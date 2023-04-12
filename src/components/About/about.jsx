import PageHeader from "../PageHeader/pageHeader";
import useNavbarDisplay from "../Navbar/CustomHooks/useNavbarDisplay";

const About = () => {
const isMobile = useNavbarDisplay();
return(
<div>
<h1>About</h1>
</div>
)

}
export default About;