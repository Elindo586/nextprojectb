// components/GoogleTagManager.js

import { useEffect } from "react";

const GoogleTagManager2 = () => {
  useEffect(() => {
    // Function to load GTM script
    const loadGTM = () => {
      var callback = function () {
        if (typeof url === "string") {
          window.location = url;
        }
      };
      gtag("event", "conversion_event_phone_call_lead", {
        event_callback: callback,
        event_timeout: 2000,
        // <event_parameters>
      });
      return false;
    };

    loadGTM();
  }, []);

  return null; // GTM script is loaded asynchronously, no need to render anything
};

export default GoogleTagManager2;
