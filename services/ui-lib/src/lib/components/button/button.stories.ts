import type { Meta, StoryObj } from '@storybook/svelte';
import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'base-components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: {
            type: 'string',
            description: 'Content of the button',
            defaultValue: '',
        },
        href: {
            type: 'string',
            description: 'URL, if you want to change site on press',
            defaultValue: '',
        },
        targetBlank: {
            type: 'boolean',
            description: 'Open url in new window',
            defaultValue: false,
        }
    },
    args: {
        label: 'My-Button',
        href: 'https://www.google.com',
        targetBlank: true
    }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
