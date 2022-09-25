import { Meta, Story } from '@storybook/react';
import Header, { IPropsHeader } from './Header';

export default {
    title: 'Components/Header',
    component: Header,
    args: {
        children: 'Github Search'
    }
} as Meta;

export const Default: Story<IPropsHeader> = () => (
    <Header>
        Github Search
    </Header>
);

