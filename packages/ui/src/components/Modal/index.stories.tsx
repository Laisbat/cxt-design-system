import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Modal, ModalProps } from ".";
import { Button } from "../Button";

export default {
  title: "Design System/Modal",
  component: Modal,
} as Meta;

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        closeButton={true}
        onClose={() => setOpen(false)}
        title="Confirmação"
        actions={
          <>
            <Button variant="info" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setOpen(false)}>Confirmar</Button>
          </>
        }
      >
        Tem certeza que deseja prosseguir?
      </Modal>
    </>
  );
};

export const Primary: StoryFn<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        closeButton={false}
        title="Modal sem botão de fechar"
      >
        Aperte esc ou clique fora da caixa para fechar o modal.
      </Modal>
    </>
  );
};
