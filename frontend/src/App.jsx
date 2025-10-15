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
import ProtectedRoutes from "./ProtectRoutes/ProtectRoutes";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/set-password" element={<SetPassword />} />

        {/* Volunteer Protected Routes */}
        <Route
          path="/collect-info"
          element={
            <ProtectedRoutes>
              <CollectInfo />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/door-search"
          element={
            <ProtectedRoutes>
              <DoorSearch />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/existinghhs"
          element={
            <ProtectedRoutes>
              <Existinghhs />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/final"
          element={
            <ProtectedRoutes>
              <Final />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/personal"
          element={
            <ProtectedRoutes>
              <Personal />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/survey"
          element={
            <ProtectedRoutes>
              <Survey />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/surveyqa"
          element={
            <ProtectedRoutes>
              <Surveyqa />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/survey-start"
          element={
            <ProtectedRoutes>
              <SurveyStart />
            </ProtectedRoutes>
          }
        />

        {/* Admin Protected Routes */}
        <Route
          path="/adminmenu"
          element={
            <ProtectedRoutes>
              <AdminMenu />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admintable"
          element={
            <ProtectedRoutes>
              <AdminTable />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/createform"
          element={
            <ProtectedRoutes>
              <CreateForm />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/reportlist"
          element={
            <ProtectedRoutes>
              <ReportList />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
