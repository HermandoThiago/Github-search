import { Meta, Story } from '@storybook/react';
import Loading from './Loading';

export default {
    title: 'Components/Loading',
    component: Loading
} as Meta;

export const Default: Story = () => (
    <Loading />
);