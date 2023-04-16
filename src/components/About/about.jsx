import PageHeader from '../PageHeader/pageHeader'
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'

const About = () => {
  const isMobile = useNavbarDisplay()
  return (
    <div>
      {isMobile ? (
        <h2>About</h2>
      ) : (
        <>
          {' '}
          <PageHeader iconSize="3x" titleSize="50px" /> <h2>About</h2>{' '}
        </>
      )}
    </div>
  )
}
export default About
