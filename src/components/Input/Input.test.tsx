import { render, fireEvent } from '@testing-library/react';
import { Input } from './index';

const myMock = jest.fn();

describe('Input component', () => {
  it('should render Input component with placeholder', () => {
    const { container } = render(
      <Input
        placeholder="This is a placeholder and test on clear click"
        onClearClick={myMock}
        onChange={myMock}
        value="123"
        error={false}
      />,
    );
    expect(container).toHaveTextContent('This is a placeholder');
    const button = container.querySelector('.clear-icon')!;
    fireEvent.click(button);
    expect(myMock).toBeCalled();
  });
  it('should render Input component with error', () => {
    const { container } = render(
      <Input
        placeholder="This is a placeholder"
        onClearClick={myMock}
        onChange={myMock}
        value="123"
        error={true}
      />,
    );
    expect(container).toHaveTextContent('This is a placeholder');
    const styles = getComputedStyle(container);
    expect(styles.border).toBe('1px solid red');
  });
});
