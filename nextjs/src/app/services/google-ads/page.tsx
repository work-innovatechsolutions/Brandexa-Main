import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "../service-pages";

export default function GoogleAdsPage() {
  return <ServiceDetailPage service={servicePages["google-ads"]} />;
}
