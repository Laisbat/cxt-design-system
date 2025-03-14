import type { StoryFn } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "Design System/Buttons/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "info"],
      },
    },
  },
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Default</Button>
);

export const Secondary: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Secondary button</Button>
);

Secondary.args = {
  variant: "secondary",
};

export const Info: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Info button</Button>
);

Info.args = {
  variant: "info",
};
