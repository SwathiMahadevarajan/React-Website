import { createContext, useContext, useState } from "react";
const sectionContext = createContext();

export default function ProvideSection({ children }) {
  const [update, setUpdate] = useState(false);
  return (
    <sectionContext.Provider value={{ update, setUpdate }}>
      {children}
    </sectionContext.Provider>
  );
}
export const useSection = () => {
  return useContext(sectionContext);
};
