import renderer from 'react-test-renderer';
import Container from './Container';

describe('Tests Container', () => {
    it('should match snapshot', () => {
        const component = renderer.create(
            <Container>
                <p>container</p>
            </Container>
        ).toJSON();

        expect(component).toMatchSnapshot();
    })
})