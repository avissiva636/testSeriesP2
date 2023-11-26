import { useEffect } from "react";
import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="heading-container">
        <h1>Refund and Cancellation Policy</h1>
        <p>Home &gt;&gt; Refund and Cancellation Policy</p>
      </div>
      <div className="container">
        <p>Our Policy for the refund will be as follows:</p>
        <br></br>
        <p>
          You may terminate your membership at any time, for any reason. But the
          payments made by members by way of registration / membership / renewal
          fee / auto renewal is /are treated as non-refundable.
        </p>
        <br></br>
        <p>
          For complaints related to payment please contact us via the email
          given below.
        </p>
        <br></br>
        <p>inspiroschools@gmail.com</p>
      </div>
      <ContactUsHomePage />
      <Footer />
    </div>
  );
};
export default RefundPolicy;
