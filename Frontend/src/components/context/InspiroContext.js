import { createContext, useContext, useState } from "react";
import api from "../../api/inspiro";

const inspiroContext = createContext();

export const InspiroContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [Courses, setCourses] = useState([]);
  const [Images, setImages] = useState([]);
  const [Video, setVideos] = useState([]);
  const [Testimonial, setTestimonial] = useState([]);
  const [DemoVideo, setDemoVideo] = useState([]);
  const [notification, setNotification] = useState([]);
  const apiurl = `${api.getUri()}/`;

  const getProductList = async () => {
    let result = await api.get("/product/getProductList");
    if (result.data) {
      setProducts(result.data.productList);
    }
  };

  const getCourseList = async () => {
    let result = await api.get("/course/getCourseList");
    if (result.data) {
      setCourses(result.data.CourseList);
    }
  };

  const getImageList = async () => {
    let result = await api.get("/gallary/getphotolist");
    if (result.data) {
      setImages(result.data.files);
    }
  };
  const getVideoList = async () => {
    let result = await api.get("/gallary/getvideolist");
    if (result.data) {
      setVideos(result.data.videos);
    }
  };
  const getTestimonialList = async () => {
    let result = await api.get("/testimonial/gettestimoniallist");
    if (result.data) {
      setTestimonial(result.data.Testimonials);
    }
  };

  const getNotificationList = async () => {
    let result = await api.get("/notification/getNotificationList");
    if (result.data) {
      setNotification(result.data.NotificationList);
    }
  };
  // getNotificationList();
  // const Notification = [
  //   {
  //     id: "1",
  //     name: "KFD Recruitment",
  //     description: "New Notification for Karnataka exam",
  //   },
  //   {
  //     id: "2",
  //     name: "KSRTC Recruitment",
  //     description: "New Notification for KSRTC exam",
  //   },
  //   {
  //     id: "3",
  //     name: "KPSC Recruitment ",
  //     description: { ops: [{ insert: "lkjfdkslfj\n" }] },
  //     SubTitle: [],
  //     __v: { $numberInt: "0" },
  //   },
  // ];
  const Popup = [{}];

  const CurrentAffair = products.find(
    (product) => product.mainProduct === "Current affairs magazines"
  )?.subProducts;

  // const [CurrentAffair, setCurrentAffair] = useState(ProductLists.mainProduct("Current affairs magazines"));
  return (
    <inspiroContext.Provider
      value={{
        apiurl,
        products,
        Courses,
        Images,
        Video,
        Testimonial,
        CurrentAffair,
        DemoVideo,
        notification,
        getProductList,
        getCourseList,
        getImageList,
        getVideoList,
        getTestimonialList,
        getNotificationList,
      }}
    >
      {children}
    </inspiroContext.Provider>
  );
};
export function useInspiroCrud() {
  return useContext(inspiroContext);
}
