import { Link } from "react-router-dom";
import useCollapse from "../CustomHooks/useCollapse";
import { useCallback } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from '@fortawesome/free-solid-svg-icons';

const NavItem = ({href, text = "", setToCollapse, icon}) => {
       icon = icon || Icon.faAngleDoubleRight
       return (   
       <Link to={href} onClick={setToCollapse}>{text}
       <FontAwesomeIcon icon={icon} />
        </Link> 
     )
}
export default NavItem;