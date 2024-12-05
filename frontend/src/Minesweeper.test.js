import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Minesweeper from './Minesweeper';

describe('Minesweeper Component', () => {
  test('renders Minesweeper title', () => {
    render(<Minesweeper />);
    const titleElement = screen.getByText(/Minesweeper/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the game board', () => {
    render(<Minesweeper />);
    const gameBoard = screen.getByTestId('game-board');
    expect(gameBoard).toBeInTheDocument();
  });

  test('checks if clicking on a cell reveals it', () => {
    render(<Minesweeper />);
    const cell = screen.getAllByRole('button')[0];
    fireEvent.click(cell);
    expect(cell).not.toHaveTextContent('');
  });

  test('shows game over alert when clicking on a mine', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Minesweeper />);

    const mineCell = screen.getByTestId('cell-0-0');
    fireEvent.click(mineCell);
    
    expect(window.alert).toHaveBeenCalledWith('Game Over!');
});
});
