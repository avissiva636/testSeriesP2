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
  const [products, setProducts] = useState(ProductLists);
  return (
    <inspiroContext.Provider value={{ products }}>
      {children}
    </inspiroContext.Provider>
  );
};
export function useInspiroCrud() {
  return useContext(inspiroContext);
}
