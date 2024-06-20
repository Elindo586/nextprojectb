import React from "react";
import Head from "next/head";
import ContactForm from "../components/contact-form";

const Contact = () => {
  return (
    <div>
      <div>
        <Head>
          <title>TU | Contact US.</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/tu-favicon.png"
          />

          <meta
            name="facebook-domain-verification"
            content="fzctnjbrtlybvytmamk8glkng9af7p"
          />
          <meta name="description" content=" Feel free to contact TU " />
          <meta name="keywords" content=" tu, Contact, page " />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta property="og:title" content=" TU" />
          <meta property="og:description" content="Contact TU " />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/Tubiz-contact.png"
          />
          <meta property="og:url" content="https://www.tu.biz/constact-us" />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Contact Us" />

          <meta name="twitter:description" content="Contact TU " />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/Tubiz-contact.png"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="contactus">
            <strong>CONTACT US</strong>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="ratio ratio-21x9">
            <iframe
              title="Find us on Google Maps"
              className="contact-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216362.5009948874!2d-83.41793946346354!3d42.46945574124075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ae2f8c7e3c7f%3A0x1978ab227e003bbc!2sFarmington%20Hills%2C%20MI!5e0!3m2!1sen!2sus!4v1712859025858!5m2!1sen!2sus"
              width="800"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <ContactForm />
          <div className="col-md-6">
            <div className="row">
              <div className="col-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </div>
              <div className="col-9">
                <p>
                  <strong>PHONE:</strong> <br />
                  <a href="+15862213095">+1-586-221-3095</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </div>
              <div className="col-9">
                <strong>EMAIL:</strong> <br />
                <a href="mailto:info@tu.biz">info@tu.biz</a>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-compass-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                </svg>
              </div>
              <div className="col-9">
                <strong>ADDRESS:</strong> <br />
                TU <br />
                Farmington Hills, MI 48334 <br />
                USA <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
