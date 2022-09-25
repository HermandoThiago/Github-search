import { Meta, Story } from '@storybook/react';
import Footer, { IPropsFooter } from './Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
    args: {
        children: 'Develop by Hermando Thiago'
    }
} as Meta;

export const Default: Story<IPropsFooter> = () => (
    <Footer>
        Develop by Hermando Thiago
    </Footer>
);

