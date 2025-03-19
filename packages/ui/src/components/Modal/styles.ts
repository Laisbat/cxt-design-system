import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 32px;
  border-radius: 8px;
  max-width: 90%;
  background-color: #fff;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Content = styled.div<{ hasActions: boolean }>`
  margin-top: 16px;
  margin-bottom: ${(props) => (props.hasActions ? "32px" : "0")};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
  padding-top: 16px;
`;
