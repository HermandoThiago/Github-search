import { Meta, Story } from "@storybook/react";
import { IPropsHeader, Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  args: {
    children: "Github Search",
  },
} as Meta;

export const Default: Story<IPropsHeader> = () => (
  <Header>Github Search</Header>
);
