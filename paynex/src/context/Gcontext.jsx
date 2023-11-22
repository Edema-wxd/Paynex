import { createContext, useState } from "react";

const Gcontext = createContext();

export const GProvider = ({ children }) => {
  const [useractive, setUseractive] = useState(false);

  const login = () => {
    setUseractive(true);
  };
  const logout = () => {
    setUseractive(false);
  };
  return (
    <Gcontext.Provider value={{ useractive, login, logout }}>
      {children}
    </Gcontext.Provider>
  );
};

export default Gcontext;
