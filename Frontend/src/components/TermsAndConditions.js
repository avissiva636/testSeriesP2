import { useEffect } from "react";
import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="heading-container">
        <h1>Terms and Conditions</h1>
        <p>Home &gt;&gt; Terms and Conditions</p>
      </div>
      <div className="container">
        <p>
          This website is owned and operated by Inspiro Schools of Civil
          Services. Your use of the www.inspiroias.in is an acknowledgement that
          you have read and understood the terms and conditions that apply
          herewith. No materials from this site may be copied, reproduced,
          modified, republished, transmitted, or distributed without prior
          written permission from AgileWeb Wizards Pvt. Ltd. By accessing any of
          the Site Content or Services, you agree you are bound by this
          Agreement, as it may be amended or supplemented from time to time, and
          agree to all operating rules that may be published by Inspiro Schools
          on the Site. There may be links and resources from other websites
          which is purely for information purposes. However, www.inspiroias.in
          does not endorse any of the sites linked to it nor does it stand
          warranty to the quality or credibility of the additional resources
          provided in the site. www.inspiroias.in has the right to revise and to
          otherwise modify this Agreement, at any point of time and the modified
          agreement will be published for your perusal. Use of the site
          following the revision indicates your acceptance of all such revised
          terms. Inspiro Schools of Civil Services has the right to modify or
          discontinue, temporarily or permanently, the Services, and/or to
          refuse or restrict anyone from access to any of the Services, with or
          without notice and in its sole discretion. www.inspiroias.in shall not
          be liable for any modification, suspension or discontinuance of any
          Services.
        </p>
      </div>
      <ContactUsHomePage />
      <Footer />
    </div>
  );
};
export default TermsAndConditions;
