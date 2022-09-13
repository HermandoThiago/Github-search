import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CardRepository from './CardRepository';

describe('Tests CardRepository', () => {
    it('Render correct', () => {
        render(
            <CardRepository 
                title='github'
                description='description'
                url='www.github.com'
            />
        );

        expect(screen.getByText(/github/i)).toBeInTheDocument;
        expect(screen.getByText(/description/i)).toBeInTheDocument;
    });

    it('should math snapshot', () => {
        const component = renderer.create(
            <CardRepository 
                title='github'
                description='description'
                url='www.github.com'
            />
        ).toJSON();

        expect(component).toMatchSnapshot();
    })
});