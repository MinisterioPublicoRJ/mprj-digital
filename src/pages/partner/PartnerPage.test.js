import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PartnerPage from './PartnerPage';

describe('<PartnerPage />', () => {
  test('it should mount', () => {
    render(<PartnerPage />);
    
    const partnerPage = screen.getByTestId('PartnerPage');

    expect(partnerPage).toBeInTheDocument();
  });
});