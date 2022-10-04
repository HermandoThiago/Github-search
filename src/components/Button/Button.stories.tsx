import { Meta, Story } from "@storybook/react";
import { IPropsButton, Button } from "./Button";
import { AiOutlineGithub } from "react-icons/ai";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    title: "Click me",
    color: "primary",
  },
} as Meta;

export const Default: Story<IPropsButton> = (args) => <Button {...args} />;

export const Secondary: Story<IPropsButton> = (args) => (
  <Button {...args} color="secondary" />
);

export const Icon: Story<IPropsButton> = (args) => (
  <Button {...args} icon={<AiOutlineGithub />} />
);
