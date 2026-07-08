import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "../service-pages";

export default function VideoEditingPage() {
  return <ServiceDetailPage service={servicePages["video-editing"]} />;
}
