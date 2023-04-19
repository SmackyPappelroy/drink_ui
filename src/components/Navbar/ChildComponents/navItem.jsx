import { Link } from "react-router-dom";
import useCollapse from "../CustomHooks/useCollapse";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import "./navItem.css";

const NavItem = ({ href, text = "", onClick, icon }) => {
  icon = icon || Icon.faAngleDoubleRight;
  return (
    <li className="nav-item">
      <Link className="nav-link" to={href} onClick={onClick}>
        {text}
        <FontAwesomeIcon icon={icon} />
      </Link>
    </li>
  );
};
export default NavItem;
