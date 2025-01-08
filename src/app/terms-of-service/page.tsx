import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-8 mt-16">
        Terms of Service
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">OVERVIEW</h2>
          <p className="mb-4">
            This website is operated by GS-Ecom. Throughout the site, the terms
            &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to GS-Ecom.
            GS-Ecom offers this website, including all information, tools and
            Services available from this site to you, the user, conditioned upon
            your acceptance of all terms, conditions, policies and notices
            stated here.
          </p>

          <p className="mb-4">
            By visiting our site and/or purchasing something from us, you engage
            in our &quot;Service&quot; and agree to be bound by the following
            terms and conditions (&quot;Terms of Service&quot;,
            &quot;Terms&quot;), including those additional terms and conditions
            and policies referenced herein and/or available by hyperlink. These
            Terms of Service apply to all users of the site.
          </p>

          <p className="mb-4">
            Please read these Terms of Service carefully before accessing or
            using our website. By accessing or using any part of the site, you
            agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            SECTION 1 - ONLINE STORE TERMS
          </h2>
          <p className="mb-4">
            By agreeing to these Terms of Service, you represent that you are at
            least the age of majority in your state or province of residence,
            and you have given us your consent to allow any of your minor
            dependents to use this site.
          </p>
          <p className="mb-4">
            You may not use our products for any illegal or unauthorized purpose
            nor may you, in the use of the Service, violate any laws in your
            jurisdiction (including but not limited to copyright laws). You must
            not transmit any worms or viruses or any code of a destructive
            nature.
          </p>
          <p className="mb-4">
            A breach or violation of any of the Terms will result in an
            immediate termination of your Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            SECTION 2 - GENERAL CONDITIONS
          </h2>
          <p className="mb-4">
            We reserve the right to refuse Service to anyone for any reason at
            any time.
          </p>
          <p className="mb-4">
            You understand that your content (not including credit card
            information), may be transferred unencrypted and involve (a)
            transmissions over various networks; and (b) changes to conform and
            adapt to technical requirements of connecting networks or devices.
            Credit card information is always encrypted during transfer over
            networks.
          </p>
          <p className="mb-4">
            You agree not to reproduce, duplicate, copy, sell, resell or exploit
            any portion of the Service, use of the Service, or access to the
            Service or any content on the website through which the Service is
            provided, without express written permission by us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            SECTION 3 - PRODUCTS OR SERVICES
          </h2>
          <p className="mb-4">
            Certain products or Services may be available exclusively online
            through the website. These products or Services may have limited
            quantities and are subject to return or exchange only according to
            our Refund Policy.
          </p>
          <p className="mb-4">
            We have made every effort to display as accurately as possible the
            colors and images of our products that appear at the store. We
            cannot guarantee that your computer monitor&apos;s display of any
            color will be accurate.
          </p>
          <p className="mb-4">
            We reserve the right to limit the sales of our products or Services
            to any person, geographic region or jurisdiction. We may exercise
            this right on a case-by-case basis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            SECTION 4 - MODIFICATIONS AND PRICES
          </h2>
          <p className="mb-4">
            Prices for our products are subject to change without notice.
          </p>
          <p className="mb-4">
            We reserve the right at any time to modify or discontinue the
            Service (or any part or content thereof) without notice at any time.
          </p>
          <p className="mb-4">
            We shall not be liable to you or to any third-party for any
            modification, price change, suspension or discontinuance of the
            Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            SECTION 5 - CONTACT INFORMATION
          </h2>
          <p>
            Questions about the Terms of Service should be sent to us at:{" "}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
