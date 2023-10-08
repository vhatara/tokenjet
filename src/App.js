import Home from "./Pages/Home/Home";
import Market from "./Pages/Market/Market";
import NavBar from "./Components/Navbar/Navbar";
import ChooseUs from "./Pages/ChooseUs/ChooseUs";
import Footer from "./Components/Footer/Footer";
import Join from "./Pages/Join/Join";

function App() {
  return (
    <>
    <div className="container">
      <NavBar />
      <Home />
      <Market />
      <ChooseUs />
      {/* <Join /> */}
    </div>
    <Footer />
    </>
  );
}

export default App;
