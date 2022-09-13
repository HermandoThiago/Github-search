import renderer from 'react-test-renderer';
import Button from './Button';

describe('Tests Button', () => {
    it('should match snapshot', () => {
        const component = renderer.create(
            <Button 
                title='click me'
                color='primary'
            />
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});
