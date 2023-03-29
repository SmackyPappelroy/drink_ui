import { useEffect, useMemo } from "react";
import { useCallback, useState } from "react";

const useCollapse = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  console.log(isCollapsed)
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
    console.log(isCollapsed)
    setIsCollpasedToLS();
  };
  const setToCollapse = () => {
    setIsCollapsed(true);
    setIsCollpasedToLS();
  };

  console.log({ isCollapsed, toggleCollapse })
  return { isCollapsed, toggleCollapse, setToCollapse };
};
export default useCollapse;
