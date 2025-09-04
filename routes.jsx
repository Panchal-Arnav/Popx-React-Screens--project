import { Routes, Route } from "react-router-dom";
import ErrorBoundary from '../src/ErrorBoundary';

// Import your component pages
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import AccountSettings from "./components/AccountSettings"; // ✅ corrected filename
import CreateAccount from "./components/CreateAccount";

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
