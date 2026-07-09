import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import NewCustomer from "../pages/NewCustomer";
import SavedCustomers from "../pages/SavedCustomers";
import Calendar from "../pages/Calendar";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
<BrowserRouter>
  <Routes>

    <Route element={<MainLayout />}>

      <Route path="/" element={<Dashboard />} />

      <Route path="/new-customer" element={<NewCustomer />} />

      <Route path="/saved-customers" element={<SavedCustomers />} />

      <Route path="/customers" element={<Customers />} />

      <Route path="/calendar" element={<Calendar />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/settings" element={<Settings />} />

    </Route>

  </Routes>
</BrowserRouter>
  );
}