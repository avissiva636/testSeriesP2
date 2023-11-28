// import "./css/Features.css";
const Features = () => {
  return (
    <div>
      <div className="heading">
        <h1>Our Features</h1>
      </div>

      <div class="features d-flex mt-5">
        <div class="features__card col-xl-3 col-lg-3 col-md-12 p-5">
          <h2>Professional & Expert</h2>
          <p>
            India topmost civil service trainers are working with us to share
            their knowledge. Students can learn from some of India's most senior
            retired IAS and IPS officers namely Dr. Alexander Jacob, Dr. Babu
            Sebastian, Dr. Muhammad Basheer, and many more!
          </p>
        </div>
        <div class="features__card feature__card col-xl-3 col-lg-3 col-md-12 p-5">
          <h2>Reasonable Course Fees</h2>
          <p>
            Get access to high-quality content, study materials, and online IAS
            coaching classes by top IAS officers at a one-time registration fee
            of INR 29,999. As a cherry on top, you will get the entire fee
            refunded if you successfully clear the prelims for civil services
            with our innovative online civil service coaching.
          </p>
        </div>
        <div class="features__card feature__card col-xl-3 col-lg-3 col-md-12 p-5">
          <h2>Visual Learning Experience</h2>
          <p>
            Experience a unique opportunity for visual learning, featuring
            artificial intelligence-supported study materials, personalized
            evaluation platforms, and interactive video lectures. We operate
            entirely on a digital platform, providing the best online IAS
            coaching in India.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
