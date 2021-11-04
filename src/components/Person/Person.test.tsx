import { render, fireEvent } from '@testing-library/react';
import { Person } from './index';

const myMock = jest.fn();

describe('Person component', () => {
  it('should render Person component', () => {
    const { container } = render(
      <Person
        favorites={[]}
        name="César"
        photo="https://via.placeholder.com/100x100"
        url="https://ncesar.com"
        type="User"
        selectedPerson={[]}
        onAddFavoritesClick={myMock}
      />,
    );
    expect(container).toHaveTextContent('César');
    const button = container.querySelector('span')!;
    fireEvent.click(button);
    expect(myMock).toBeCalled();
  });
});
