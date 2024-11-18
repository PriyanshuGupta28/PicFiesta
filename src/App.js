import { FloatButton } from "antd";
import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import AppFooter from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <AppFooter />
      <FloatButton.BackTop />
    </>
  );
}

export default App;
