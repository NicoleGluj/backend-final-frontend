import Footer from "./Footer"
import Header from "./Header"
import TopBar from "./TopBar"

const Layout = (props) => {
  return (
    <>
      <TopBar />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout