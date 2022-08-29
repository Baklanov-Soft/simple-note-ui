import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileItem } from './FileItem';

const Template: ComponentStory<typeof FileItem> = (args) => (
  <FileItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: '#e56666',
  title: 'Important file'
};

export default {
  title: 'FileItem',
  component: FileItem,
  decorators: [
    (Story) => (
      <ul className="list-none">
        <Story />
      </ul>
    )
  ]
} as ComponentMeta<typeof FileItem>;
