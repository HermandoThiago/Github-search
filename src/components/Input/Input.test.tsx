import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Input } from "./Input";

describe("Tests Input", () => {
  let name = "";

  it("Render input", () => {
    const component = render(
      <Input placeholder="Name" type="text" value={name} change={() => {}} />
    );

    expect(component).toBeInTheDocument;
  });

  it("should match snapshot", () => {
    const component = renderer
      .create(
        <Input placeholder="Name" type="text" value={name} change={() => {}} />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
