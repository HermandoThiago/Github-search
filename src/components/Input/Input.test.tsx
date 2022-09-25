import { ChangeEvent } from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

describe('Tests Input', () => {
    it('should match snapshot', () => {
        let name = '';

        const handleName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            name = e.target.value;
        };

        const component = renderer.create(
            <Input 
                placeholder='Name'
                type='text'
                value={name}
                change={handleName}
            />
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});
