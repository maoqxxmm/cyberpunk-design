import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button as ButtonComp } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: ButtonComp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ButtonComp>;

const Template: ComponentStory<typeof ButtonComp> = (args) => (
  <ButtonComp {...args} />
);

export const Button = Template.bind({});
Button.args = {
  text: "AVAILABLE NOW",
};
