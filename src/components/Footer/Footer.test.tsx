import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from "./Footer";

describe('Tests Footer', () => {
    it('Render correct text', () => {
        render(
            <Footer>
                Develop by @ 🎩 HermandoThiago
            </Footer>
        )

        screen.getByText(/Develop by @ 🎩 HermandoThiago/i);
    })

    it('should math snapshot', () => {
        const component = renderer.create(
            <Footer>
                Develop by @ 🎩 HermandoThiago
            </Footer>
        ).toJSON();
        expect(component).toMatchSnapshot();
    })
})