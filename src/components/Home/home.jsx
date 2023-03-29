import useNavbarDisplay from "../Navbar/CustomHooks/useNavbarDisplay";
import PageHeader from "../PageHeader/pageHeader"


const Home = () => {

  const isMobile = useNavbarDisplay();
      return(
        <>
       {isMobile ? (<></>): ( <PageHeader titleSize="100px" iconSize="5x"></PageHeader>)}
       </>
        )
}
export default Home;