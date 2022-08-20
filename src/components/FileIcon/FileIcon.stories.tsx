import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileIcon } from './FileIcon';

export const Primary: ComponentStory<typeof FileIcon> = (args) => (
  <FileIcon {...args} />
);

export default {
  title: 'FileIcon',
  component: FileIcon,
  argTypes: {
    fill: {
      defaultValue: '#0788ff',
      control: {
        type: 'color'
      }
    },
    size: {
      defaultValue: 256,
      control: {
        type: 'select',
        options: [16, 32, 64, 128, 256, 512]
      }
    }
  }
} as ComponentMeta<typeof FileIcon>;
