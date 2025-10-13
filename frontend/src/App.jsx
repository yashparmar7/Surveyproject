import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CollectInfo from "./pages/CollectInfo";
import DoorSearch from "./pages/DoorSearch";
import Existinghhs from "./pages/Existinghhs";
import Final from "./pages/Final";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Personal from "./pages/Personal";
import Profile from "./pages/Profile";
import Survey from "./pages/Survey";
import Surveyqa from "./pages/Surveyqa";
import SurveyStart from "./pages/SurveyStart";
import CreateUser from "./pages/CreateUser";
import SetPassword from "./pages/SetPassword";
import Registration from "./pages/Registration";
import AdminMenu from "./pages/Admin/AdminMenu";
import AdminTable from "./pages/Admin/AdminTable";
import CreateForm from "./pages/Admin/CreateForm";
import ReportList from "./pages/Admin/ReportList";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/collect-info" element={<CollectInfo />} />
        <Route path="/door-search" element={<DoorSearch />} />
        <Route path="/existinghhs" element={<Existinghhs />} />
        <Route path="/final" element={<Final />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/surveyqa" element={<Surveyqa />} />
        <Route path="/survey-start" element={<SurveyStart />} />

        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/set-password" element={<SetPassword />} />

        <Route path="/adminmenu" element={<AdminMenu />} />
        <Route path="/admintable" element={<AdminTable />} />
        <Route path="/createform" element={<CreateForm />} />
        <Route path="/reportlist" element={<ReportList />} />
      </Routes>
    </Router>
  );
}

export default App;
