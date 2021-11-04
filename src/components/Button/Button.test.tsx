import { render } from '@testing-library/react';
import { Button } from './index';

describe('Button component', () => {
  it('should render Button component with children', () => {
    const { container } = render(<Button>Button component</Button>);
    expect(container).toHaveTextContent('Button component');
  });
});
