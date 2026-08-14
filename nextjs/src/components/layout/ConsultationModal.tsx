"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type FormState = {
  name: string;
  email: string;
  query: string;
  meetingDate: string;
  meetingTime: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  query: "",
  meetingDate: "",
  meetingTime: "",
};

export default function ConsultationModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const closeTimerRef = useRef<number | null>(null);

  const closeModal = () => {
    if (isClosing) {
      return;
    }

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldReduceMotion) {
      setIsOpen(false);
      setIsClosing(false);
      return;
    }

    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, 280);
  };

  useEffect(() => {
    const openModal = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest("[data-consultation-trigger]");

      if (!trigger) {
        return;
      }

      event.preventDefault();
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }

      setIsClosing(false);
      setIsOpen(true);
      setStatus("idle");
      setMessage("");
    };

    document.addEventListener("click", openModal);
    return () => document.removeEventListener("click", openModal);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, isClosing]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to book the consultation right now.");
      }

      setStatus("success");
      setMessage("Your consultation request is booked. Please check your email for the confirmation details.");
      setForm(initialFormState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to book the consultation right now.");
    }
  };

  if (pathname?.startsWith("/ads")) return null;

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`consultation-modal${isClosing ? " consultation-modal--closing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="consultation-modal-title">
      <button className="consultation-modal__backdrop" aria-label="Close consultation form" type="button" onClick={closeModal} />
      <div className="consultation-modal__panel">
        <div className="consultation-modal__header">
          <div>
            <p>Free consultation</p>
            <h2 id="consultation-modal-title">Book a Free Consultation</h2>
          </div>
          <button className="consultation-modal__close" aria-label="Close consultation form" type="button" onClick={closeModal}>
            x
          </button>
        </div>

        <form className="consultation-form" onSubmit={submitForm}>
          <label>
            Name
            <input
              autoComplete="name"
              name="name"
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Your full name"
              required
              type="text"
              value={form.name}
            />
          </label>

          <label>
            Email
            <input
              autoComplete="email"
              name="email"
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
              required
              type="email"
              value={form.email}
            />
          </label>

          <label className="consultation-form__full">
            Query
            <textarea
              name="query"
              onChange={(event) => updateField("query", event.target.value)}
              placeholder="Tell us what you need help with"
              required
              rows={4}
              value={form.query}
            />
          </label>

          <label>
            Meeting date
            <input
              name="meetingDate"
              onChange={(event) => updateField("meetingDate", event.target.value)}
              placeholder="Select a date"
              required
              type="date"
              value={form.meetingDate}
            />
          </label>

          <label>
            Time
            <input
              name="meetingTime"
              onChange={(event) => updateField("meetingTime", event.target.value)}
              placeholder="Select a time"
              required
              type="time"
              value={form.meetingTime}
            />
          </label>

          <button className="consultation-form__submit" disabled={status === "sending"} type="submit">
            {status === "sending" ? "Sending..." : "Send Confirmation"}
          </button>

          {message ? (
            <p className={`consultation-form__message consultation-form__message--${status}`} role="status">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
