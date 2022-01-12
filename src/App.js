import "./App.css";
import CentralCard from "./components/centralCard/CentralCard";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <CentralCard />
    </div>
  );
}

export default App;
