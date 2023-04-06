import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import "./pageHeader.css";
const PageHeader = ({ iconSize = "3x", titleSize = "2.3rem" }) => {
  return (
    <div className="page-header">
      <h1 style={{ fontSize: titleSize }}>FineDine</h1>
            <FontAwesomeIcon icon={Icon.faDrumstickBite} size={iconSize} />
      <FontAwesomeIcon icon={Icon.faChampagneGlasses} size={iconSize} />

    </div>
  );
};

export default PageHeader;
