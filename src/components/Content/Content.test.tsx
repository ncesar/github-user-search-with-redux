import { render } from '@testing-library/react';
import { Content } from './index';

describe('Content component', () => {
  it('should render Content component with children', () => {
    const { container } = render(<Content>Content component</Content>);
    expect(container).toHaveTextContent('Content component');
  });
  it('should render Content component with children, hide title and buttons', () => {
    const { container } = render(
      <Content hideTitle hideButtons>
        Content component
      </Content>,
    );
    expect(container).toHaveTextContent('Content component');
    expect(container).not.toHaveTextContent('Search for a');
    expect(container).not.toHaveTextContent('&lt; Prev');
  });
});
