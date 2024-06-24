// components/GoogleTagManager.js

import { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    // Function to load GTM script
    const loadGTM = () => {
      // Check if window is defined (client-side rendering)
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-KXZRG4LK`;

        // Append GTM script to head
        document.head.appendChild(script);
      }
    };

    loadGTM();
  }, []);

  return null; // GTM script is loaded asynchronously, no need to render anything
};

export default GoogleTagManager;
