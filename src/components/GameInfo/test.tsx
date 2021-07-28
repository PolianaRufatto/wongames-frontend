import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Game title',
  description: 'Game description',
  price: '140.00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />)
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)
  })
})
