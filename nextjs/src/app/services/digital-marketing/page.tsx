import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "../service-pages";

export default function DigitalMarketingPage() {
  return <ServiceDetailPage service={servicePages["digital-marketing"]} />;
}
