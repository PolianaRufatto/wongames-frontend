import { RouterContext } from 'next/dist/next-server/lib/router-context'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <RouterContext.Provider
        value={{
          push: () => Promise.resolve(),
          replace: () => Promise.resolve(),
          prefetch: () => Promise.resolve()
        }}
      >
        <GlobalStyles removeBg />
        <Story />
      </RouterContext.Provider>
    </ThemeProvider>
  )
]
