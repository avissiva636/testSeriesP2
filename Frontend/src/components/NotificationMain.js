import { useEffect, useState } from "react";
import ContactUsHomePage from "./ContactUsHomePage";
import CourseDescription from "./CourseDescription";
import { useLocation } from "react-router-dom";

const NotificationMain = () => {
  const location = useLocation();
  const { notification } = location.state.data;
  let initialTitle = notification[0].name;
  let initialDescription = notification[0].description;
  const [a, setA] = useState(initialTitle);
  const [b, setB] = useState(initialDescription);

  const handleNotificationClick = (name, description) => {
    setA(name);
    setB(description);
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h1>
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
