import React from "react";
import { IconWrapper, NotificationWrapper } from "./styles";

export interface NotificationProps {
  message: string;
  icon?: React.ReactNode;
  type?: "success" | "error" | "info";
}

const Notification: React.FC<NotificationProps> = ({
  message,
  icon,
  type = "info",
}) => {
  return (
    <NotificationWrapper type={type}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <span>{message}</span>
    </NotificationWrapper>
  );
};

export default Notification;
