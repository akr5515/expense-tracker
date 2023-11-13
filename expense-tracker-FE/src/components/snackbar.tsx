// CommonSnackbar.tsx
import React, { useState, useEffect } from "react";
import { Snackbar, SnackbarContent } from "@mui/material";

interface CommonSnackbarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

const CommonSnackbar: React.FC<CommonSnackbarProps> = ({
  message,
  isOpen,
  onClose,
  duration = 1800, // Default duration in milliseconds
}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <SnackbarContent message={message} />
    </Snackbar>
  );
};

export default CommonSnackbar;
