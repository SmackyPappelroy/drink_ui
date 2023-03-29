import { useState, useEffect} from "react";

const useNavbarDisplay = () => {
       const [isMobileNavbar, setMobileNavbar] = useState(false);
       useEffect(() => {
         function handleResize() {
           if (window.innerWidth > 800) {
             setMobileNavbar(false);
           } else {
             setMobileNavbar(true);
           }
         }
         handleResize()
         window.addEventListener("resize", handleResize);    
         return () => window.removeEventListener("resize", handleResize);
       }, [], );
       return isMobileNavbar;
};
export default useNavbarDisplay;
