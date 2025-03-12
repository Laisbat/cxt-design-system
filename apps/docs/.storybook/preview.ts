import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#f0f0f0" },
        { name: "dark", value: "#333" },
      ],
    },
  },
};

export default preview;
