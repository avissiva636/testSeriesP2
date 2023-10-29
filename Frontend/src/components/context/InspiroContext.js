import { createContext, useContext, useState } from "react";

const inspiroContext = createContext();

export const InspiroContext = ({ children }) => {
  let ProductLists = [
    {
      mainProduct: "KAS Mains notes",
      subProducts: ["Subproduct 1", "Subproduct 2", "Subproduct 3"],
    },
    {
      mainProduct: "KAS Prelims notes",
      subProducts: ["Subproduct A", "Subproduct B"],
    },
    {
      mainProduct: "Current affairs magazines",
      subProducts: ["Subproduct X", "Subproduct Y", "Subproduct Z"],
    },
    {
      mainProduct: "SAAD Material",
      subProducts: ["Subproduct I", "Subproduct II"],
    },
    {
      mainProduct: "KPSC Group C Material",
      subProducts: ["Subproduct Alpha", "Subproduct Beta"],
    },
    {
      mainProduct: "PSI/ ESI Material",
      subProducts: ["Subproduct One", "Subproduct Two"],
    },
    {
      mainProduct: "FDA & SDA Material",
      subProducts: ["Subproduct A", "Subproduct B", "Subproduct C"],
    },
  ];
  let CourseList = [
    {
      Title: "IAS",
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
      Title: "KAS",
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
      Title: "SAAD",
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
              Syllabus: "Something",
              Fees: "100100",
              Portions: "Some content here",
            },
          ],
        },
        {
          Title: "AE/JE",
          subarr: [
            {
              Syllabus: "Something",
              Fees: "100200",
              Portions: "Some content here",
            },
          ],
        },
        {
          Title: "Group C",
          subarr: [
            {
              Syllabus: "Something",
              Fees: "100030",
              Portions: "Some content here",
            },
          ],
        },
      ],
    },
  ];
  const [products, setProducts] = useState(ProductLists);
  const [Courses, setCourses] = useState(CourseList)
  return (
    <inspiroContext.Provider value={{ products , Courses }}>
      {children}
    </inspiroContext.Provider>
  );
};
export function useInspiroCrud() {
  return useContext(inspiroContext);
}
