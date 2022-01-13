import "./App.css";
import CentralCard from "./components/centralCard/CentralCard";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Template from "./components/template/Template";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <CentralCard />
      <Template />
    </div>
  );
}

export default App;
