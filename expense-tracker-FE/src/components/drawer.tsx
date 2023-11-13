import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import BudgetsIcon from "@mui/icons-material/AttachMoney";
import ExpensesIcon from "@mui/icons-material/MoneyOff";
import AssetsIcon from "@mui/icons-material/Apartment";
import DebtsIcon from "@mui/icons-material/AccountBalance";
import SignOutIcon from "@mui/icons-material/MeetingRoom";
import { HEADER_DATA } from "../constants/data";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { logout } from "../store/reducers/userReducers";

const drawerWidth = 240;

const CustomDrawer = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const navMap = {
    home: {
      icon: <HomeIcon />,
      path: "/",
    },
    expenses: {
      icon: <ExpensesIcon />,
      path: "expenses",
    },
    budgets: {
      icon: <BudgetsIcon />,
      path: "Budgets",
    },
    assets: {
      icon: <AssetsIcon />,
      path: "Assets",
    },
    debts: {
      icon: <DebtsIcon />,
      path: "Debts",
    },
  };

  const handleNavClick = (key: string) => {
    navigate(navMap[key].path);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Expense Tracker
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {HEADER_DATA.map((header, index) => (
          <ListItem
            key={header.key}
            disablePadding
            onClick={() => handleNavClick(header.key)}
          >
            <ListItemButton>
              <ListItemIcon>{navMap[header.key].icon}</ListItemIcon>
              <ListItemText primary={header.value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sign Out"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(logout());
              navigate("/login");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <SignOutIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
