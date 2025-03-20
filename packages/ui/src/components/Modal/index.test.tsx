import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./index";

describe("Modal Component", () => {
  it("renders the modal with title and children", () => {
    render(
      <Modal
        open={true}
        onClose={jest.fn()}
        title="Test Modal"
        actions={<button>Action</button>}
      >
        <p>Modal Content</p>
      </Modal>,
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onCloseMock = jest.fn();

    render(
      <Modal
        open={true}
        onClose={onCloseMock}
        title="Test Modal"
        actions={<button>Action</button>}
      >
        <p>Modal Content</p>
      </Modal>,
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("does not render the close button when closeButton is false", () => {
    render(
      <Modal
        open={true}
        onClose={jest.fn()}
        title="Test Modal"
        actions={<button>Action</button>}
        closeButton={false}
      >
        <p>Modal Content</p>
      </Modal>,
    );

    const closeButton = screen.queryByRole("button", { name: /close/i });
    expect(closeButton).not.toBeInTheDocument();
  });

  it("applies the correct maxWidth style", () => {
    render(
      <Modal
        open={true}
        onClose={jest.fn()}
        title="Test Modal"
        actions={<button>Action</button>}
        maxWidth="lg"
      >
        <p>Modal Content</p>
      </Modal>,
    );

    const modalWrapper = screen.getByText("Modal Content").parentElement;
    expect(modalWrapper).toHaveStyle("width: 400px"); // Ajuste conforme o valor retornado por `getMaxWidth`
  });
});
