import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Main } from '.';

describe('Main', () => {
  it('should render correctly', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: 'Template com Next App Router' }),
    ).toBeInTheDocument();
  });
});
