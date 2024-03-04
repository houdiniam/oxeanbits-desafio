import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './components/Table'

describe('Table', () => {

  it('should render the correct title', () => {
    render(<Table />);
    expect(screen.getByText('Agentes Valorant')).toBeInTheDocument();
  });

  it('should render the correct button text', () => {
    render(<Table />);
    expect(screen.getByText('Carregar Agentes')).toBeInTheDocument();
  });

});