import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "../service-pages";

export default function EcommerceSolutionsPage() {
  return <ServiceDetailPage service={servicePages["e-commerce-solutions"]} />;
}
