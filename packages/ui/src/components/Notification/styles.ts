import styled from "styled-components";
import AppColors from "../../theme/colors";

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
        return AppColors.green;
      case "error":
        return AppColors.red;
      case "info":
      default:
        return AppColors.warning;
    }
  }};
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
`;
