import ConfirmModal from "./Components/ConfirmModal";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import { Routers } from "./Routes";

function App() {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
