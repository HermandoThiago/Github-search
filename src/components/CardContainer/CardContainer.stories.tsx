import { Meta, Story } from "@storybook/react";
import { CardContainer, IPropsCardContainer } from "./CardContainer";
import { IRepository } from "../../interfaces";

const data: IRepository[] = [
  {
    description: "Buscador de repositórios e de projetos do github",
    name: "Github Search",
    html_url: "https://github.com/HermandoThiago/Github-search",
  },
  {
    description: "Buscador de repositórios e de projetos do github",
    name: "Github Search",
    html_url: "https://github.com/HermandoThiago/Github-search",
  },
];

export default {
  title: "Components/CardContainer",
  component: CardContainer,
  args: {
    fetching: false,
    isError: false,
    data: data,
    erro: "",
  },
} as Meta;

export const Default: Story<IPropsCardContainer> = (args) => (
  <CardContainer {...args} />
);

export const error: Story<IPropsCardContainer> = (args) => (
  <CardContainer {...args} isError={true} />
);
