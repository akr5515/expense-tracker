import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomDrawer from "./components/drawer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import ExpensesPage from "./pages/expenses.page";
import BudgetsPage from "./pages/budgets.page";
import AssetsPage from "./pages/assets.page";
import DebtsPage from "./pages/debts.page";
import LoginPage from "./pages/login.page";
import RegistrationPage from "./pages/registration.page";

import { useAuthHook } from "./hooks/useAuthHook";
import Authenticate from "./components/authenticate";
import NotFoundPage from "./pages/notFoundPage.page";

const drawerWidth = 240;

export default function App() {
  const { token } = useAuthHook();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: token && `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {token && <CustomDrawer />}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route element={<Authenticate />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/expenses" element={<ExpensesPage />} />
              <Route path="/budgets" element={<BudgetsPage />} />
              <Route path="/assets" element={<AssetsPage />} />
              <Route path="/debts" element={<DebtsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
