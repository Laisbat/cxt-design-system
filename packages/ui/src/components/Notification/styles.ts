import styled from "styled-components";

export const NotificationWrapper = styled.div<{
  type: "success" | "error" | "info";
}>`
  padding: 10px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  background-color: ${({ type }) => {
    switch (type) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "info":
      default:
        return "blue";
    }
  }};
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
`;
