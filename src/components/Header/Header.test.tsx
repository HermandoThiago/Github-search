import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Header } from "./Header";

describe("Testing Header", () => {
  it("Render correct test", async () => {
    render(<Header>Github Search</Header>);

    await screen.findByText(/Github Search/i);
  });

  it("should match snapshot", () => {
    const component = renderer.create(<Header>Github Search</Header>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
