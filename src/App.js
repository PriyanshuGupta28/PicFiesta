import { FloatButton } from "antd";
import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import AppFooter from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <Navbar />
      <AllRoutes />
      <AppFooter />
      <FloatButton.BackTop />
    </div>
  );
}

export default App;
