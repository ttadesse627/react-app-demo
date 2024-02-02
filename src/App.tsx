import Header from "./Components/Header/Header";
import Menu from "./Components/Menus/Menu";
import "./styles/App.css";
import Navbar from "./Components/Menus/Navbar";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-page">
        <Navbar />
        <Menu />
      </div>
    </div>
  );
}

export default App;
