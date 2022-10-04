import renderer from "react-test-renderer";
import { CardContainer } from "./CardContainer";
import { render, screen } from "@testing-library/react";
import { IRepository } from "../../interfaces";

describe("Tests CardContainer", () => {
  const data: IRepository[] = [
    {
      name: "Teste",
      description: "Teste",
      html_url: "https://www.github.com",
    },
  ];

  it("Render List repositories", () => {
    render(
      <CardContainer
        data={data}
        isError={false}
        erro={false}
        fetching={false}
      />
    );
    expect(screen.findAllByText(/teste/i)).toBeInTheDocument;
  });

  it("Render error message", () => {
    render(
      <CardContainer data={[]} isError={true} erro={true} fetching={false} />
    );

    expect(screen.getByText(/Nenhum repositório encontrado!/i))
      .toBeInTheDocument;
  });

  it("should match snapshot", () => {
    const component = renderer
      .create(
        <CardContainer
          data={data}
          isError={false}
          erro={false}
          fetching={false}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
