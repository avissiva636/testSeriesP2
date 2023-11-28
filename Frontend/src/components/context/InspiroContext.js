import { createContext, useContext, useState } from "react";

const inspiroContext = createContext();

export const InspiroContext = ({ children }) => {
  let ProductLists = [
    {
      mainProduct: "KAS Mains notes",
      subProducts: [
        { name: "Subproduct 1", link: "https://www.google.com" },
        { name: "Subproduct 2", link: "" },
        { name: "Subproduct 3", link: "" },
      ],
    },
    {
      mainProduct: "KAS Prelims notes",
      subProducts: [
        { name: "Subproduct A", link: "" },
        { name: "Subproduct B", link: "" },
        { name: "Subproduct C", link: "" },
      ],
    },
    {
      mainProduct: "Current affairs magazines",
      subProducts: [
        { name: "Subproduct X", link: "https://www.google.com" },
        { name: "Subproduct Y", link: "" },
        { name: "Subproduct Z", link: "" },
      ],
    },
    {
      mainProduct: "SAAD Material",
      subProducts: [
        { name: "Subproduct I", link: "" },
        { name: "Subproduct II", link: "" },
        { name: "Subproduct III", link: "" },
      ],
    },
    {
      mainProduct: "KPSC Group C Material",
      subProducts: [
        { name: "Subproduct Alpha", link: "" },
        { name: "Subproduct Beta", link: "" },
        { name: "Subproduct Gama", link: "" },
      ],
    },
    {
      mainProduct: "PSI/ ESI Material",
      subProducts: [
        { name: "Subproduct 4", link: "" },
        { name: "Subproduct 5", link: "" },
        { name: "Subproduct 6", link: "" },
      ],
    },
    {
      mainProduct: "FDA & SDA Material",
      subProducts: [
        { name: "Subproduct 11", link: "" },
        { name: "Subproduct 12", link: "" },
        { name: "Subproduct 13", link: "" },
      ],
    },
  ];
  let CourseList = [
    {
      Title: "Indian Administrative Service",
      subarr: [
        {
          Syllabus: "Something",
          Fees: "10000",
          Portions: "Some content here",
        },
      ],
      SubTitle: "",
    },
    {
      Title: "Karnataka Administrative Service",
      subarr: [
        {
          Syllabus: "No content",
          Fees: "10500",
          Portions: "Some content here for second",
        },
      ],
      SubTitle: "",
    },
    {
      Title: "State Audit And Accounts Department",
      subarr: [
        {
          Syllabus: "Something",
          Fees: "10000",
          Portions: "Some content here",
        },
      ],
      SubTitle: "",
    },
    {
      Title: "KPSC Prelims",
      SubTitle: [
        {
          Title: "CTI",
          subarr: [
            {
              Syllabus: "Something1",
              Fees: "100100",
              Portions: "Some content here",
            },
          ],
        },
        {
          Title: "AE/JE",
          subarr: [
            {
              Syllabus: "Something2",
              Fees: "100200",
              Portions: "Some content here",
            },
          ],
        },
        {
          Title: "Group C",
          subarr: [
            {
              Syllabus: "Something3",
              Fees: "100030",
              Portions: "Some content here",
            },
          ],
        },
      ],
    },
    {
      Title: "KEA",
      SubTitle: [
        {
          Title: "Topic 1",
          subarr: [
            {
              Syllabus: "Another sub section 1",
              Fees: "100100",
              Portions: "Some content here",
            },
          ],
        },
        {
          Title: "Topic 2",
          subarr: [
            {
              Syllabus: "Started developing on 27th Nov",
              Fees: "100200",
              Portions: "Some content here",
            },
          ],
        },
        {
          Title: "Topic 3",
          subarr: [
            {
              Syllabus: "We will make it whatever issue comes",
              Fees: "100030",
              Portions: "Some content here",
            },
          ],
        },
      ],
    },
  ];
  const ImageList = [
    {
      id: 1,
      url: "https://img.freepik.com/free-photo/smiling-happy-indian-student-with-backpack-pointing-his-finger-wall_496169-1532.jpg?w=2000&t=st=1698738650~exp=1698739250~hmac=9227a55e0296273ebc6b5d58b1a0a3bd76c9e1f614f8ba9e05919a2c318ac44a",
      description: "",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-photo/portrait-beautiful-girl-working-home-with-laptop-notebook_496169-2812.jpg?w=2000&t=st=1698741399~exp=1698741999~hmac=aed8b1b6727dcfa7c2df2ce7741d2310cf6d252b47270d97155b762d4f930c5d",
      description: "",
    },
    {
      id: 3,
      url: "https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149476755.jpg?t=st=1698741399~exp=1698741999~hmac=21294fe5b8576b4568702bccbda32c833eb18fe66d9338c9f8a92e4486e97b2d",
      description: "",
    },
    {
      id: 4,
      url: "https://img.freepik.com/free-photo/emotional-friends-doing-work-laptop-outdoor_624325-3557.jpg?t=st=1698741399~exp=1698741999~hmac=f4046a04b638358c6851d8e7adf119b581d1075dfc56d1a15d66461d5977aee1",
      description: "",
    },
  ];
  const Videos = [
    {
      id: "1",
      embedId: "n0QonGNwsxY?si=OtSW8_Zs3vBYSyKu",
      desc: "Demo 1",
    },
    {
      id: "2",
      embedId: "kruJZUOoetQ?si=58me1OZ47isLGDa0",
      desc: "",
    },
    {
      id: "3",
      embedId: "kruJZUOoetQ?si=2hTbGCKcKLVC9Ccr",
      desc: "",
    },
    {
      id: "4",
      embedId: "LwYIeSmftM8?si=fwABF9lL7ycfeNCd",
      desc: "",
    },
  ];
  const DemoClassVideo = [
    {
      id: "1",
      embedId: "u9yyC6uLTDQ?si=wIOwJ1xCZhpGfCsv",
      desc: "",
    },
  ];
  const Testimonials = [
    {
      id: "1",
      name: "vijay",
      desc: "I came here to get some help with my prelims. Individual guidance is quite beneficial.I was able to complete the syllabus according to the schedule.Worth for money.",
      rating: "4",
    },
    {
      id: "2",
      name: "stephen",
      desc: "The way lecturers communicate and maintain the explanation of the topics is extremely outstanding. They are wonderful teachers and highly professional in their daily work. You must have patience to comprehend, though, as you cannot expect your lecturers to complete everything for you if you rush them. They also assist you in resolving any questions.",
      rating: "5",
    },
    {
      id: "3",
      name: "root",
      desc: "I am a student in this institute since August 2022. With regular quizzes, mock tests, and feedback via Personalized Mentorship, this institute has drastically helped me improve my preparation and stay motivated. The faculties are very knowledgeable and caring regarding classes. Students are taken care individually. I would highly recommend inspiro to all the aspirants prepping for any kind of competitive specially civil services examinations.",
      rating: "4.5",
    },
    {
      id: "4",
      name: "morgan",
      desc: "Very supportive faculty. Mains test series evaluation has helped me to improve my answer writing skills and  presentation. The feedback given for each answer and one to one interaction with Harish sir and Venktesh sir helps to understand the mistake and gives scope for improvement in quality of preparation. Its a very good Institute which gives individual attention to each aspirant and boosts morale.",
      rating: "4.9",
    },
  ];

  const CurrentAffair = ProductLists.find(
    (product) => product.mainProduct === "Current affairs magazines"
  )?.subProducts;

  const [products, setProducts] = useState(ProductLists);
  const [Courses, setCourses] = useState(CourseList);
  const [Images, setImages] = useState(ImageList);
  const [Video, setVideos] = useState(Videos);
  const [Testimonial, setTestimonial] = useState(Testimonials);
  const [DemoVideo, setDemoVideo] = useState(DemoClassVideo);
  // const [CurrentAffair, setCurrentAffair] = useState(ProductLists.mainProduct("Current affairs magazines"));
  return (
    <inspiroContext.Provider
      value={{
        products,
        Courses,
        Images,
        Video,
        Testimonial,
        CurrentAffair,
        DemoVideo,
      }}
    >
      {children}
    </inspiroContext.Provider>
  );
};
export function useInspiroCrud() {
  return useContext(inspiroContext);
}
