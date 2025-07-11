import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function LanguageRedirector() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let shouldRedirect = false;
    if (!params.get("lang")) {
      params.set("lang", "fr");
      shouldRedirect = true;
    }
    if (params.get("page") === "1") {
      params.delete("page");
      shouldRedirect = true;
    }
    if (shouldRedirect) {
      navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
    }
  }, [location, navigate]);

  return null;
} 