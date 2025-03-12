import styled from "styled-components";
import AppColors from "../../theme/colors";

type ContainerProps = {
  bgColor: string;
  borderColor: string;
  color: string;
  hover: { bgColor: string; borderColor: string; color?: string };
  variant: string;
  size: string;
  disabled: boolean;
};

export const variantToColor = {
  primary: {
    bgColor: AppColors.primary,
    borderColor: AppColors.primary,
    color: AppColors.white,
    hover: {
      bgColor: AppColors.darkPrimary,
      borderColor: AppColors.darkPrimary,
    },
  },
  secondary: {
    bgColor: AppColors.secondary,
    borderColor: AppColors.secondary,
    color: AppColors.white,
    hover: {
      bgColor: AppColors.darkSecondary,
      borderColor: AppColors.darkSecondary,
    },
  },
  success: {},
  info: {
    bgColor: "transparent",
    borderColor: AppColors.darkBlue,
    color: AppColors.darkBlue,
    hover: {
      bgColor: AppColors.dark,
      borderColor: AppColors.dark,
      color: AppColors.white,
    },
  },
  warning: {},
  danger: {},
};

export const Container = styled.button<ContainerProps>`
  width: 100%;
  max-width: 180px;
  height: 48px;

  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;

  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.hover.bgColor};
    border: 1px solid ${(props) => props.hover.borderColor};
    color: ${(props) => props.hover.color};
  }

  &:disabled {
    background: ${AppColors.disabled};
    border: 1px solid ${AppColors.disabled};
    color: ${AppColors.white};
    cursor: not-allowed;
  }

  //size = sm | md | lg
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
          height: 32px;
          font-size: 0.875rem;
          padding: 5px 10px;
        `;
      case "lg":
        return `
          height: 56px;
          font-size: 1.25rem;
          padding: 10px 20px;
        `;
      default:
        return "";
    }
  }}
`;
