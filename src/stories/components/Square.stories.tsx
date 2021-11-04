import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Square from "../../Square";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Square",
  component: Square,
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args) => <Square {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "small",
};
Primary.argTypes = {
  size: {
    type: "select",
    options: ["small", "default", "large", 120, 150, 200],
  },
};
