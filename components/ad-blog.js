import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-client="ca-pub-8682017023658879"
        data-ad-slot="8603987287"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script
        dangerouslySetInnerHTML={{
          __html: `adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      ></script>
    </>
  );
};

export default AdBanner;
