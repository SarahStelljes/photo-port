import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem Ipsum BLAH BLAH BLAH',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        ></Modal>);
        expect(asFragment()).toMatchSnapshot();
    });
});