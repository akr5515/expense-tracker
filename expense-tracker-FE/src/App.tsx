import { useState } from "react";
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
import CommonSnackbar from "./components/snackbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { setNotification } from "./store/reducers/notificationReducer";

const drawerWidth = 240;

export default function App() {
  const { token } = useAuthHook();
  const dispatch = useDispatch();
  const notificationState = useSelector(
    (state: RootState) => state.notification
  );

  const handleSnackbarClose = () => {
    dispatch(setNotification({ message: "", isOpen: false }));
  };

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
          <Typography variant="h6" noWrap component="div"></Typography>
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
            <Route path="/register" element={<RegistrationPage />} />
            <Route element={<Authenticate />}>
              {/* <CustomDrawer /> */}
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
      {/* <button onClick={handleSnackbarOpen}>Show Snackbar</button> */}

      <CommonSnackbar
        message={notificationState.message}
        isOpen={notificationState.isOpen}
        onClose={handleSnackbarClose}
      />
    </Box>
  );
}
