import useNavbarDisplay from "../Navbar/CustomHooks/useNavbarDisplay";
import PageHeader from "../PageHeader/pageHeader";

const Home = () => {
  const isMobile = useNavbarDisplay();
  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <>
          <PageHeader iconSize="3x" titleSize="4.5rem" />
        </>
      )}
    </>
  );
};
export default Home;
