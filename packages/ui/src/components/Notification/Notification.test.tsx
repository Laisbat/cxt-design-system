import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { render, screen } from "@testing-library/react";
import Notification from ".";

describe("Notification Component", () => {
  test("renders success notification with icon", () => {
    render(
      <Notification
        message="Operation was successful!"
        type="success"
        icon={<CheckCircleIcon />}
      />
    );

    // Verifica se a mensagem está no documento
    expect(screen.getByText(/Operation was successful!/i)).toBeInTheDocument();

    // Verifica se o ícone está no documento (usando queryByRole ou outro método)
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("renders error notification without icon", () => {
    render(
      <Notification
        message="There was an error processing your request."
        type="error"
      />
    );

    // Verifica se a mensagem de erro está no documento
    expect(
      screen.getByText(/There was an error processing your request./i)
    ).toBeInTheDocument();

    // Verifica se não há ícone presente
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  test("renders informational notification", () => {
    render(<Notification message="This is informational." type="info" />);

    // Verifica se a mensagem informativa está no documento
    expect(screen.getByText(/This is informational./i)).toBeInTheDocument();

    // Verifica se não há ícone presente (opcional, se não for fornecido)
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
