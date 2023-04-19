import { useEffect } from "react";
import { useState } from "react";

const useCollapse = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  useEffect(() => {
    const storedState = localStorage.getItem('navbarState_isCollapsed');
    if (storedState !== null) {
      setIsCollapsed(JSON.parse(storedState));
    }
  }, []);

  const setIsCollpasedToLS = () => {
    localStorage.setItem('navbarState_isCollapsed', JSON.stringify(!isCollapsed));
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsCollpasedToLS();
  };
  const setToCollapse = () => {
    setIsCollapsed(true);
    setIsCollpasedToLS();
  };

  return { isCollapsed, toggleCollapse, setToCollapse };
};
export default useCollapse;
