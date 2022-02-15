import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Activity from "../Pages/Activity/Activity";
import FileManage from "../Pages/FileManage/FileManage";
import Error from "../Pages/Error/Error";
import UserManagement from "../Components/MainContent/UserManagement/UserManagement";
import MainContentSelectedCandidates from "../Components/MainContent/SelectedCandidates/SelectedCandidates";
import MainContentAppliedCandidates from "../Components/MainContent/AppliedCandidates/AppliedCandidates";
import MainContentViewJobs from "../Components/MainContent/ViewJobs/ViewJobs";
import MainContentScheduleDetails from "../Components/MainContent/ScheduleDetails/ScheduleDetails";
import MainContentDashboard from "../Components/MainContent/Dashboard/Dashboard";
import MainContentSchedule from "../Components/MainContent/Schedule/Schedule";
import MainContentCreateHR from "../Components/MainContent/CreateHR/CreateHR";
import MainContentCreateJob from "../Components/MainContent/CreateJob/CreateJob";
import MainContentUpcomingScheduled from "../Components/MainContent/UpcomingSchedule/UpcomingSchedule";
import LiveStatus from "../Components/MainContent/LiveStatus/LiveStatus";
import Loading from "../Components/Loaders/SquareLoader/loading";
import Documents from "../Components/FileManage/Components/Pages/Documents";
import Media from "../Components/FileManage/Components/Pages/Media";
import Home2 from "../Components/FileManage/Components/Pages/Home";

export const Navigation = ({ authenticated, isLoading }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={!authenticated ? <Login /> : <Navigate to="/" from="/login" />}
      />
      <Route
        path="/register"
        element={
          !authenticated ? <Register /> : <Navigate to="/" from="/login" />
        }
      />
      {authenticated && (
        <>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Navigate to="/admin" />} />
            <Route path="admin" element={<Home />}>
              <Route
                path="/admin"
                element={<Navigate to="/admin/dashboard" from="/admin" />}
              />
              <Route path="posted-jobs" element={<MainContentViewJobs />} />
              <Route path="create-new-job" element={<MainContentCreateJob />} />
              <Route path="create-new-hr" element={<MainContentCreateHR />} />
              <Route
                path="schedule-interview"
                element={<MainContentSchedule />}
              />
              <Route path="user-Management">
                <Route path=":usrId" element={<UserManagement />} />
              </Route>
              <Route path="live-status" element={<LiveStatus />} />
              <Route
                path="ProfileDetail"
                element={<MainContentScheduleDetails />}
              />

              <Route path="dashboard" element={<MainContentDashboard />} />
              <Route
                path="Upcoming"
                element={<MainContentUpcomingScheduled />}
              />
              <Route
                path="AppliedCandidates"
                element={<MainContentAppliedCandidates />}
              />
              <Route
                path="SelectedCandidates"
                element={<MainContentSelectedCandidates />}
              />
              <Route path="*" element={<Error />} />
            </Route>
            <Route path="/admin/contact" element={<Contact />} />
            <Route path="/admin/activity" element={<Activity />} />
            <Route path="/admin/filemanage" element={<FileManage />}>
              <Route path="docs" element={<Home2 />} />
              <Route exact path="files" element={<Documents />} />
              <Route exact path="media" element={<Media />} />
            </Route>
          </Route>
        </>
      )}

      <Route
        path="*"
        element={!authenticated && !isLoading ? <Error /> : <Loading />}
      />
    </Routes>
  );
};
