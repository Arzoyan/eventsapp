import { Alert } from "@mui/material";

const Notification = ({ alert }) => {
  return (
    <Alert
      severity={alert.type}
      sx={{
        position: "absolute",
        zIndex: 111,
        top: 10,
        width: 350,
        right: 10,
      }}
    >
      {alert.message}
    </Alert>
  );
};

export default Notification;
