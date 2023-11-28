import { useEffect } from "react";
import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import "./css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="heading-container">
        <h1>Privacy Policy</h1>
        <p>Home &gt;&gt; Privacy Policy</p>
      </div>
      <div className="container">
        <h2>
          <b>1. Our Commitment To Privacy</b>
        </h2>
        <p>
          Your privacy is important to us. To better protect your privacy we
          provide this notice explaining our online information practices and
          the choices you can make about the way your information is collected
          and used. To make this notice easy to find, we make it available on
          our homepage and at every point where personally identifiable
          information may be requested.
        </p>
        <h2>
          <b>2. The Information We Collect</b>
        </h2>
        <p>
          This notice applies to all information collected or submitted on the
          Inspiro Schools of IAS Acadamy website. This information, personal or
          otherwise will be kept confidential by Inspiro Schools of IAS Acadamy.
        </p>
        <h2>
          <b>3. The Way We Use Information</b>
        </h2>
        <p>
          We use tools like cookies, web beacons, analytics services, and
          advertising providers to gather the data listed above. Some of these
          tools offer you the ability to opt out of data collection.
        </p>
        <h2>
          <b>4. For What We Use Your Data</b>
        </h2>
        <p>
          We use the information you provided about yourself or your business
          only to complete the desired work. We do not share this information
          with outside parties except to the extent necessary to complete that
          work/ consultancy. We use return email addresses to answer the email
          we receive. Such addresses are not used for any other purpose and are
          not shared with outside parties. You can register with our website if
          you would like to receive our newsletter on our span of services.
          Information you submit on our website will not be used for this
          purpose unless you fill out the registration form. We use
          non-identifying and aggregate information to better design our website
          and to share with advertisers.
        </p>
        <h2>
          <b>5. Our Commitment To Data Security</b>
        </h2>
        <p>
          To prevent unauthorized access, maintain data accuracy, and ensure the
          correct use of information, we have put in place appropriate physical,
          electronic, and managerial procedures to safeguard and secure the
          information we collect online. To protect your privacy and security,
          we will also take reasonable steps to verify your identity before
          granting access or making corrections.
        </p>
      </div>
      <ContactUsHomePage />
    </div>
  );
};
export default PrivacyPolicy;
