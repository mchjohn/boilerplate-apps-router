import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderizar o componente
    const { container } = render(<Main />)

    // Buscar o elemento e verificar se existe
    expect(
      screen.getByRole('heading', { name: /React avançado/i })
    ).toBeInTheDocument()

    // Gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
