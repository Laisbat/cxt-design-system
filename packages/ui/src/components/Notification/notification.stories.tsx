import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import Notification, { NotificationProps } from ".";

export default {
  title: "Design System/Notification",
  component: Notification,
};

const Template = (args: NotificationProps) => <Notification {...args} />;

export const SuccessNotification = Template.bind({}) as any;
SuccessNotification.args = {
  message: "Operation was successful!",
  type: "success",
  icon: <CheckCircleIcon />,
};

export const ErrorNotification = Template.bind({}) as any;
ErrorNotification.args = {
  message: "There was an error processing your request.",
  type: "error",
  icon: <CloseIcon />,
};

export const InfoNotification = Template.bind({}) as any;
InfoNotification.args = {
  message: "This is informational.",
  type: "info",
  icon: <InfoIcon />,
};
