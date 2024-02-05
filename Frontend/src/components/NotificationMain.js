import { useEffect, useState } from "react";
import ContactUsHomePage from "./ContactUsHomePage";
import CourseDescription from "./CourseDescription";
import { useLocation, useParams } from "react-router-dom";
import { useInspiroCrud } from "./context/InspiroContext";

const NotificationMain = () => {
  const { notification, getNotificationList } = useInspiroCrud();
  const { Title } = useParams();
  const location = useLocation();
  // const notification = location.state?.data.notification;
  // console.log(notification)
  // let initialTitle = notification ? notification[0]?.name : Title;
  let initialTitle = notification[0]?.name ?? Title;

  // console.log(initialTitle)
  let initialDescription = notification && notification[0]?.description;
  // console.log(initialDescription);
  const [a, setA] = useState(initialTitle);
  const [b, setB] = useState(initialDescription);

  useEffect(() => {

    const notify = async ()=>{
      if (initialDescription === undefined && initialTitle) {
        const notificationData = await getNotificationList();
        var filteredContent=notificationData.filter((data)=>(data.name===initialTitle));
        setB(filteredContent[0]?.description);      
      }
    }

    notify();
  }, []);

  const handleNotificationClick = (name, description) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setA(name);
    setB(description);
    window.history.pushState(
      null,
      null,
      `/NotificationMain/${encodeURIComponent(name)}`
    );
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h1 id="descriptionSection">
          <b>Karnataka Carrer Notifications</b>
        </h1>
      </div>
      <div className="courses__full-content mb-5">
        <div className="courses__page col-xl-3 col-lg-3 col-md-12">
          <div className="courses__header">Recent Notifications</div>
          {notification.map((items) => {
            let Title;

            Title = (
              <div className="d-flex">
                <div
                  className="text__title"
                  onClick={() =>
                    handleNotificationClick(items.name, items.description)
                  }
                >
                  <div className="text__left">{items.name}</div>
                </div>
              </div>
            );
            return <div className="test5">{Title}</div>;
          })}
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 text__description">
          <CourseDescription Title={a} Description={b} />
        </div>
      </div>
      <ContactUsHomePage />
    </>
  );
};
export default NotificationMain;
