

const PrivacyPolicy = () => {
  return (
    <div className=" bg-stone-100 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last Updated: September 2024]</p>

      <p className="mb-4">
        Welcome to Cloud9 Calm Co. ("we," "our," or "us"). This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit our website
        cloud9calm.com, particularly concerning our use of Google Analytics. Please read this policy
        carefully. If you do not agree with the terms of this policy, please do not access the site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect information about you in various ways when you visit our website, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Usage Data:</strong> We automatically collect certain information when you visit,
          use, or navigate the website. This information does not reveal your specific identity
          (like your name or contact information) but may include device and usage information, such
          as your IP address, browser type, operating system, pages viewed, and other technical
          information.
        </li>
        <li className="mb-2">
          <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking
          technologies to collect and store information when you use our website. You can find more
          information about our use of cookies in our Cookie Policy.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Google Analytics</h2>
      <p className="mb-4">
        We use Google Analytics, a web analytics service provided by Google LLC (“Google”), to
        better understand how visitors interact with our site, improve our services, and enhance
        your experience.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Data Collected by Google Analytics:</strong> Google Analytics uses cookies to
          track your interactions with our website and collects information such as your IP address,
          the pages you visit, and the time you spend on each page. This information is aggregated
          and anonymized so that it cannot be used to identify you individually.
        </li>
        <li className="mb-2">
          <strong>Purpose of Using Google Analytics:</strong> The information collected by Google
          Analytics helps us analyze website traffic and usage patterns, allowing us to make
          data-driven improvements to our site.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Share Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personal information to outside parties
        except as required by law. We may share your information with trusted third-party service
        providers, including Google, to help us operate our website and analyze how it is used.
        Google’s ability to use and share information collected by Google Analytics is restricted by
        Google’s Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Managing Your Cookies and Data</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Opting Out of Google Analytics:</strong> You can opt out of having your activity
          on our site available to Google Analytics by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          . The add-on prevents Google Analytics JavaScript from sharing information with Google
          Analytics about visit activity.
        </li>
        <li className="mb-2">
          <strong>Cookie Preferences:</strong> You can manage your cookie preferences at any time
          through your browser settings or by using the cookie consent tool on our website.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Retention and Security</h2>
      <p className="mb-4">
        We retain your data only for as long as necessary to fulfill the purposes outlined in this
        policy unless a longer retention period is required or permitted by law. We implement
        appropriate technical and organizational security measures to protect your data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Privacy Rights</h2>
      <p className="mb-4">
        Depending on where you are located, you may have certain rights regarding your personal
        data, such as the right to access, correct, delete, or object to the processing of your
        data. To exercise any of these rights, please contact us at [your contact email].
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Updates to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time to reflect changes in our practices or
        legal requirements. Any changes will be posted on this page with an updated "Last Updated"
        date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or our use of Google Analytics, please
        contact us at:
      </p>
      <p className="mb-4">
        <strong>Cloud9 Calm Co.</strong> <br />
        <strong>Email:</strong> admin@cloud9calm.com <br />
      </p>
    </div>
  );
};

export default PrivacyPolicy;