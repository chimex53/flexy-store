import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
/*import Exclusive from "./Components/exclusive/Exclusive";*/
import Footer from "./Components/footer/Footer";
import Data from "./Components/data/Data";
import Contact from "./Components/contact/Contact";
function App() {
  return (
    <div>
      <Header />
      <Home />
      {/*    <Exclusive />*/}
      <Data />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
