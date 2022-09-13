import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('Tests Loading', () => {
    it('should match snapshot', () => {
        const component = renderer.create(
            <Loading />
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});