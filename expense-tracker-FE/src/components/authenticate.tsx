import { Navigate, Outlet } from "react-router-dom";
import { useAuthHook } from "../hooks/useAuthHook";
import CustomDrawer from "./drawer";
import { Box, Toolbar } from "@mui/material";

const Authenticate = () => {
  const { token } = useAuthHook();

  return token ? (
    <>
      {/* <CustomDrawer /> */}
      <Box
        component="main"
        // sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Box>
          <Outlet />
        </Box>
      </Box>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Authenticate;
