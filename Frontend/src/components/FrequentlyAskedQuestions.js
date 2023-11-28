import "./css/FrequentlyAskedQuestions.css";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const initialFAQs = [
  {
    question: "How to prepare for current affairs for civil service exam?",
    answer:
      "As the majority of the questions in both the Preliminary Test and the Main test are current affairs-related, at Inspiro Academy, we guide our students to comprehensively cover current affairs topics. We provide our students with exclusive notes and weekly updates on current affairs. If you had been referring to online sites for UPSC preparation, make a point of sticking to a few sources rather than referring to multiple sources. Augment your preparations by regularly reading at least one standard newspaper.",
  },
  {
    question:
      "What are the eligibility criteria to appear for the civil service exam?",
    answer:
      "The Union Public Service Commission has set eligibility criteria for all the candidates who wish to appear for this exam. Degree holders or graduates, who are graduated from colleges or universities that are recognized by the University Grants Commission (UGC) are eligible to appear for the civil services examination. Also, the Indian students who hold foreign degrees must make sure that their degree is recognized by UGC. Crack IAS in the very first attempt by enrolling for the premium UPSC coaching offered at Inspiro IAS Academy.",
  },
  {
    question: "How to register with Inspiro Acadamy?",
    answer:
      "Inspiro IAS academy is the top IAS academy in India that provides excellent coaching to all IAS aspirants. We provide offline & online courses to students making it easier for them to prepare for IAS from the comfort of their homes. Students can do registration in offline and online.Our online registration process is a cakewalk! Students just need to click on the enroll now button in the course section, fill up the registration form and submit it. Alternatively, a student can also register by clicking the register/login button available in the main menu. If you still face any issues while registering with us, you can feel free to contact us by the email id or phone number mentioned on the contact page.",
  },
  {
    question:
      "What is the minimum and maximum age limit required to appear for the civil service exam?",
    answer: "Some content",
  },
];

const FrequentlyAskedQuestions = () => {
  const [faqs, setFAQs] = useState(initialFAQs);

  const toggleAnswer = (index) => {
    const updatedFAQs = [...faqs];
    updatedFAQs[index].isOpen = !updatedFAQs[index].isOpen;
    setFAQs(updatedFAQs);
  };
  return (
    <div className="faq-container">
      <div className="heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{faq.question}</span>
              {faq.isOpen ? (
                <KeyboardArrowRightOutlinedIcon />
              ) : (
                <KeyboardArrowDownOutlinedIcon />
              )}
            </div>
            {faq.isOpen && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FrequentlyAskedQuestions;
