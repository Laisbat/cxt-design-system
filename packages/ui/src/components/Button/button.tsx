import React from "react";
import { Container, variantToColor } from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps): JSX.Element {
  const { bgColor, borderColor, color, hover } = variantToColor[variant];

  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor}
      color={color}
      hover={hover}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}

Button.displayName = "Button";
