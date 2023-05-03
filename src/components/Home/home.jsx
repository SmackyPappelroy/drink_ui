import useNavbarDisplay from "../Navbar/CustomHooks/useNavbarDisplay";
import PageHeader from "../PageHeader/pageHeader";

const Home = () => {
  const isMobile = useNavbarDisplay();
  return (
    <>
      {isMobile ? (
        <h2>Home</h2>
      ) : (
        <>
          {" "}
          <PageHeader iconSize="3x" titleSize="4.5rem" /> <h2>Home</h2>{" "}
        </>
      )}
    </>
  );
};
export default Home;
