import { useParams, Navigate } from "react-router-dom";
import Chiptuning from "@/pages/services/Chiptuning";
import Mechanika from "@/pages/services/SerwisMechaniczny";
import Skp from "@/pages/services/Skp";
import Holowanie from "@/pages/services/Autoholowanie";

export default function ServiceDetailsPage() {
  const { id } = useParams();

  switch (id) {
    case "chiptuning":
      return <Chiptuning />;
    case "serwis":
      return <Mechanika />;
    case "skp":
      return <Skp />;
    case "autoholowanie":
      return <Holowanie />;
    case "sprzedaz":
      return <Navigate to="/sprzedaz" replace />;
    default:
      return <Navigate to="/" replace />;
  }
}

