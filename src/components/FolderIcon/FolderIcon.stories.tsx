import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FolderIcon } from './FolderIcon';

export const Primary: ComponentStory<typeof FolderIcon> = (args) => (
  <FolderIcon {...args} />
);

export default {
  title: 'FolderIcon',
  component: FolderIcon,
  argTypes: {
    fill: {
      defaultValue: '#ffc928',
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
} as ComponentMeta<typeof FolderIcon>;
