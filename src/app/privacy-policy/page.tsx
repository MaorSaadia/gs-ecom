import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-5xl font-bold text-center mb-8">Privacy Policy</h1>

      <div className="space-y-8">
        <section>
          <p className="mb-4">
            This Privacy Policy describes how GS-Ecom (the &quot;Site&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
            and discloses your personal information when you visit, use our
            services, or make a purchase from gs-ecom.com (the &quot;Site&quot;)
            or otherwise communicate with us (collectively, the
            &quot;Services&quot;).
          </p>

          <p className="mb-4">
            Please read this Privacy Policy carefully. By using and accessing
            any of the Services, you agree to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
            If you do not agree to this Privacy Policy, please do not use or
            access any of the Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            How We Collect and Use Your Personal Information
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Information We Collect Directly from You
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Basic contact details including your name, address, phone
                number, email
              </li>
              <li>
                Order information including your name, billing address, shipping
                address, payment confirmation, email address, phone number
              </li>
              <li>
                Customer support information including any information you
                choose to provide in communications with us
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Information We Collect through Cookies
          </h2>
          <p className="mb-4">
            We also automatically collect certain information about your
            interaction with the Services when you visit our site. We may use
            cookies and similar technologies (&quot;Cookies&quot;). Usage Data
            may include information about how you access and use our Site and
            your account, including device information, browser information,
            information about your network connection, your IP address and other
            information regarding your interaction with the Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            How We Use Your Personal Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">
                Providing Products and Services:
              </span>{" "}
              We use your personal information to provide you with the Services,
              fulfill our contract with you, process your payments, fulfill your
              orders, send notifications to you related to your account, and
              manage your account.
            </li>
            <li>
              <span className="font-semibold">Marketing and Advertising:</span>{" "}
              With your consent, we use your personal information for marketing
              and promotional communications by email, text message or postal
              mail, and to show you advertisements for products or services.
            </li>
            <li>
              <span className="font-semibold">
                Security and Fraud Prevention:
              </span>{" "}
              We use your personal information to detect, investigate and
              prevent fraudulent transactions and other illegal activities.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to access your personal information</li>
            <li>Right to correct or update your personal information</li>
            <li>Right to delete your personal information where applicable</li>
            <li>Right to opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time, including to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Privacy Policy on the
            Site, update the &quot;Last updated&quot; date and take any other
            steps required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at:{" "}
            <a
              href="mailto:contact@gs-ecom.com"
              className="text-blue-600 hover:underline"
            >
              gs-ecom@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
