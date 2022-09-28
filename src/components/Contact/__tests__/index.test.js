import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline text
    it('renders', () => {
        render(<ContactForm/>)
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Matching by testId', () => {
    it('h1 has Contact me', ()=> {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('h1contact')).toHaveTextContent('Contact me');
    });

    it('button for submit has text Submit', () => {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('btnContact')).toHaveTextContent('Submit');
    });
});