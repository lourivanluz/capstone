import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import { Routers } from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer position="top-center" />
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
