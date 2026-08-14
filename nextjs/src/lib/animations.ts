import { gsap, EASE } from "./gsap";

/**
 * Reveal text word-by-word with stagger.
 * Splits innerText of the element and staggers opacity + y-translate.
 */
export function revealText(
  element: HTMLElement,
  options?: { delay?: number; duration?: number; stagger?: number }
) {
  const { delay = 0, duration = 0.8, stagger = 0.04 } = options || {};
  const text = element.innerText;
  const words = text.split(" ");

  element.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block overflow-hidden"><span class="inline-block gsap-word" style="transform:translateY(100%);opacity:0">${word}</span></span>`
    )
    .join(" ");

  const wordEls = element.querySelectorAll(".gsap-word");

  return gsap.to(wordEls, {
    y: 0,
    opacity: 1,
    duration,
    stagger,
    delay,
    ease: EASE.smooth,
  });
}

/**
 * Standard fade-in-up entrance for sections/elements.
 */
export function fadeInUp(
  elements: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
  }
) {
  const { delay = 0, duration = 0.8, y = 40, stagger = 0.1 } = options || {};

  return gsap.from(elements, {
    y,
    opacity: 0,
    duration,
    delay,
    stagger,
    ease: EASE.smooth,
  });
}

/**
 * Animate a number counting upward from 0 to the target value.
 * Used only for illustrative UI elements, never for fabricated results.
 */
export function countUp(
  element: HTMLElement,
  target: number,
  options?: {
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  }
) {
  const {
    duration = 2,
    prefix = "",
    suffix = "",
    decimals = 0,
  } = options || {};
  const obj = { val: 0 };

  return gsap.to(obj, {
    val: target,
    duration,
    ease: EASE.expo,
    onUpdate: () => {
      element.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
    },
  });
}

/**
 * Magnetic hover effect for buttons/CTAs.
 * Moves the element slightly toward the cursor on mouseover.
 */
export function magneticHover(element: HTMLElement, strength: number = 0.3) {
  const handleMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: EASE.smooth,
    });
  };

  const handleLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  element.addEventListener("mousemove", handleMove);
  element.addEventListener("mouseleave", handleLeave);

  return () => {
    element.removeEventListener("mousemove", handleMove);
    element.removeEventListener("mouseleave", handleLeave);
  };
}
