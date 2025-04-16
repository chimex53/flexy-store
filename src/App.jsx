import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Featured from "./Components/featured/Featured";
import Exclusive from "./Components/exclusive/Exclusive";
import Footer from "./Components/Footer/Footer";
import Data from "./Components/data/Data";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Featured />
      <Exclusive />
      <Data />
      <Footer />
    </div>
  );
}
export default App;
