import { Meta, Story } from "@storybook/react";
import { IPropsInput, Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Name",
    type: "text",
  },
} as Meta;

export const Default: Story<IPropsInput> = (args) => {
  return <Input {...args} />;
};
