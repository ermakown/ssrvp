import { render, screen, fireEvent } from '@testing-library/react';
import Button from 'D:/React/ssrvp/labs/src/components/components/laba2/button.jsx';

describe('Button component', () => {
  it('должен отобразить кнопку и вызывать alert при клике', () => {
    // Мокаем alert
    window.alert = jest.fn();

    render(<Button />);
    
    const buttonElement = screen.getByText(/Нажать/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(window.alert).toHaveBeenCalledWith('Кнопка нажата!');
  });
});
  