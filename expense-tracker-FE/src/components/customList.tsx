import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Modal,
} from "@mui/material";
import { formatDate } from "../utils/helpers";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface YourObject {
  label: string;
  amount: number;
  createdAt: Date;
}

interface Props {
  data: YourObject[];
}

const CustomList = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    handleClose();
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "460px",
        overflowY: "auto",
        maxHeight: "400px",
        minHeight: "250px",
        marginTop: "10px",
      }}
    >
      <List>
        {data.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Label: ${item.label}`}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Amount: ${item.amount}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textSecondary"
                  >
                    {/* Date: {item ? item.createdAt.toLocaleDateString() : ""} */}
                    Date: {formatDate(item.createdAt)}
                  </Typography>
                </>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleOpen()}
                sx={{ marginRight: "10px" }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>{" "}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleDelete()}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CustomList;
