import Features from "./Features";
import Footer from "./Footer";
import { useEffect } from "react";
import Navigationbar from "./Navigationbar";
import ContactUs from "./ContactUs";
import ContactUsHomePage from "./ContactUsHomePage";
const WhyInspiro = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div className="inspiro__content">
   <div className="p-5">   <h1>About Us</h1>
      <p>
        How it will be if highly motivated and dedicated coaching experts from
        Delhi come together to start a school, the sole purpose of which is to
        provide high-end focussed guidance to the aspirants to crack one of the
        toughest exams? Inspiro School of Civil Services is the outcome of such
        a team. We, at ISCS is well versed with the changing patterns of UPSC
        civil service syllabus and exams. We guide the aspirants to have a
        proper study plan, focussed approach on every subject and guide their
        minds to be oriented towards UPSC’s dynamic demands. In Bengaluru
        Inspiro is the Best KAS and IAS coaching centre, Best IAS and KAS mains
        Test Series, Premier in Mains Writing skill enhancement Programme, Best
        KPSC- KAS,SAAD,FDA,SDA,PSI,AE,JE,PDO Prelims Test Series Coaching
        centre.
      </p>
      <h3 className="d-flex justify-content-center">
        “We teach you how less is too less and how much is too much to Study”.
      </h3>
      <Features />
      <h2 className="mt-5">Vision</h2>
      <div>  <p>
        To be a professional School of Civil Services that stands at the
        forefront of the line of institutions, which catalyse the potential
        aspirants to be successful candidates in the UPSC conducted Civil
        Service Examination. And to be an energetic / a true / a lively academic
        school of thought and influence on public governance that strives to
        develop its students into more responsive individuals aligned with human
        values.
      </p>
      <h3>Mission</h3>
      <p>
        In the recent time, recognizing the role of the civil servants in a
        changing paradigm, the UPSC have been reviewing its methods and process
        of recruiting Civil Servants, to improve the quality of selections. As a
        sensitive school, we at Inspiro School of Civil Services facilitate the
        aspirant’s examination preparation with a more appropriate plan, design
        and construct, and deliver courses and programmes which are highly
        reasonable for the Civil Services Exam preparation. In this order of
        business, our mission includes:
      </p></div>
      <ol>
        <li>
          To evolve a learning culture that values freedom of thought,
          inquiry, expression, sharing, innovation, teamwork and dissent of
          aspirants in the class room, and ultimately develops the quality of
          real policy makers and executors which the exam demands.
        </li>
        <li>
          To develop an in-depth knowledge and understanding of the
          subject and issues rather than simple mugging-up of information
          gathered at the last moment before the exams.
        </li>
        <li>
          To generate a durable knowledge by engaging in cutting-edge
          teaching methodologies and to promote academic gain by offering
          flexible and state-of-the-art courses and programmes according to the
          need of the aspirants.
        </li>
        <li>
          To provide guidance and training to the needy students to
          develop better learning skills and personality.
        </li>
        <li>
          To provide quality training to faculty members and teachers,
          and to update their knowledge and skills in their fields of teaching.
        </li>
        <li>
          To undertake collaborative projects with NGOs and other
          institutions that offer opportunities for the aspirants to have
          real-time interaction with academia, public and public policy makers
          and implementers.
        </li>
        <li>
          To engage in consultancy for the generation and application of
          knowledge in the field of academics and public governance.
        </li>
        <li>
          To develop human potential to its finest extent in our
          students so that intellectually capable, imaginative, ethical and
          people-friendly leaders can emerge in the Indian Political and
          Bureaucratic system
        </li>
        <li>
          To publish journal, magazines, research papers and books in
          print and electronic media for the wider dissemination of knowledge
          and useful content for the aspirants of competitive exams, activation
          of public interest and participation in the study and improvement of
          public governance.
        </li>
      </ol>
      <h3>Teaching methodology:</h3>
      <ol>
        <li> Greatest thrust on Conceptual Clarity.</li>
        <li>Meticulously designed Course Plan.</li>
        <li>
          Prime focus on answer writing practice for Main Examination.
        </li>
        <li>Invaluable inputs for Writing Best Answers.</li>
        <li>Ensuring individual Attention.</li>
        <li>Quality is the hallmark of Our School.</li>
        <li>Highly relevant printed materials</li>
      </ol></div>
      <ContactUsHomePage />
    </div>
  );
};
export default WhyInspiro;
