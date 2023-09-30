import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./coponent/Dashboard";
import Footer from "./coponent/Footer";
import Header from "./coponent/Header";
import Sidebar from "./coponent/Sidebar";
import kanban from "./coponent/kanban";
import empRegistration from "./coponent/empRegistration";
import empList from "./coponent/empList";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" Component={Dashboard} />
        <Route path="/kanban" Component={kanban} />
        <Route path="/empRegistration" Component={empRegistration} />
        <Route path="/empList" Component={empList} />
      </Routes>
      {/* <Dashboard /> */}

      <Footer />
    </div>
  );
}

export default App;
