import { render, fireEvent } from '@testing-library/react';
import { Topbar } from './index';

const myMock = jest.fn();

describe('Topbar component', () => {
  it('should render Topbar component and redirect to favorites page', () => {
    const { container } = render(<Topbar />);
    expect(container).toHaveTextContent('Favorites');
    const button = container.querySelector('.favorites-btn')!;
    fireEvent.click(button);
    expect(myMock).toBeCalled();
  });
});
