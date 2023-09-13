import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

interface MyContextType {
  showItems: string;
  setShowItems: React.Dispatch<React.SetStateAction<string>>;
  arrow : {arrow1 : string, arrow2 : string,arrow3 : string},
  setArrow : React.Dispatch<React.SetStateAction<{
    arrow1: string;
    arrow2: string;
    arrow3: string;
}>>
}

interface Children {
  children : JSX.Element
}

const MyContext = createContext<MyContextType | undefined>(undefined);
export const ContextAPI = ({ children } : Children ) => {
  const [showItems,setShowItems] = useState<string>("translate-x-0")
  const [arrow,setArrow] = useState<{arrow1 : string, arrow2 : string,arrow3 : string}>({
    arrow1 : "-translate-y-2",
    arrow2 : "w-8",
    arrow3 : "translate-y-2"
  })


// all the states and functions that have to be used in other components
  return (
    <MyContext.Provider
      value={{
        showItems,setShowItems,arrow,setArrow
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// exporting the context API
export const ContextState = () => {
  return useContext(MyContext);
};