import renderer from "react-test-renderer";
import { Modal, IPropsModal } from "./Modal";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Tests Modal", () => {
  let show = true;

  const handleModal = () => {
    show = !show;
  };

  it("Render Modal", () => {
    const component = render(<Modal show={show} close={handleModal} />);

    expect(component).toBeInTheDocument;
  });

  it("Close modal", () => {
    const component = render(<Modal show={show} close={handleModal} />);

    expect(component).toBeInTheDocument;

    const closeButton = screen.getByRole("closeButton");

    expect(closeButton).toBeInTheDocument;

    fireEvent.click(closeButton);

    expect(component).not.toBeInTheDocument;
  });

  it("Should match Snapshot", () => {
    const component = renderer
      .create(<Modal show={show} close={handleModal} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
