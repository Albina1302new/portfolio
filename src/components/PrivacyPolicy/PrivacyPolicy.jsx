import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <a href={import.meta.env.BASE_URL} className="privacy-back">
          ← Back to Portfolio
        </a>

        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated: November 16, 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to my personal portfolio. My name is Albina Biriukova. I
            respect your privacy and want to explain how information is
            processed when you visit this website.
          </p>
        </section>

        <section>
          <h2>2. Analytics</h2>
          <p>
            This website uses Google Analytics 4 to understand how visitors
            interact with my portfolio. Analytics may provide information about
            visited pages, approximate geographic location, device type and
            interactions.
          </p>
          <p>
            I use this information to understand website traffic and improve my
            portfolio. Google Analytics does not provide me with the names of
            individual visitors.
          </p>
        </section>

        <section>
          <h2>3. Cookies and Consent</h2>
          <p>
            This website uses CookieScript to manage cookie preferences. You can
            accept, reject or customize optional cookies through the cookie
            banner.
          </p>
          <p>
            Analytics cookies are intended to be used only with your consent.
            Depending on the consent implementation, limited cookieless signals
            may also be transmitted to Google.
          </p>
        </section>

        <section>
          <h2>4. Third-party Services</h2>
          <p>
            This website uses Google Analytics, provided by Google, and
            CookieScript for consent management. These providers may process
            information according to their own privacy policies and applicable
            data protection laws.
          </p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>
            Under applicable data protection law, you may have the right to
            access, correct or request deletion of your personal data, object to
            certain processing and withdraw your consent at any time.
          </p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>
            If you have questions about privacy or data processing, you can
            contact me through the contact section of my portfolio.
          </p>
        </section>

        <a href={import.meta.env.BASE_URL} className="privacy-button">
          Back to Portfolio
        </a>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
