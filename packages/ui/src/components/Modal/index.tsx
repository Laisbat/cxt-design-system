import CloseIcon from "@mui/icons-material/Close";
import { Modal as ModalMui } from "@mui/material";
import { Actions, CloseButton, Content, ModalWrapper, Title } from "./styles";

export interface ModalProps {
  children: React.ReactNode;
  closeButton?: boolean;
  open: boolean;
  onClose: () => void;
  title: string;
  actions: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}
const getMaxWidth = (maxWidth: ModalProps["maxWidth"]) => {
  switch (maxWidth) {
    case "xs":
      return "444px";
    case "sm":
      return "600px";
    case "md":
      return "900px";
    case "lg":
      return "1200px";
    case "xl":
      return "1536px";
    default:
      return "400px";
  }
};

export const Modal = ({
  children,
  closeButton = true,
  open,
  onClose,
  title,
  actions,
  maxWidth = "md",
  ...props
}: ModalProps) => {
  return (
    <ModalMui open={open} onClose={onClose} {...props}>
      <ModalWrapper
        style={{ width: maxWidth !== false ? getMaxWidth(maxWidth) : "auto" }}
      >
        {closeButton && (
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        )}
        <Title>{title}</Title>
        <Content hasActions={!!actions}>{children}</Content>
        {actions && <Actions>{actions}</Actions>}
      </ModalWrapper>
    </ModalMui>
  );
};
