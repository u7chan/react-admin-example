import { defaultTheme, RaThemeOptions } from 'react-admin'

export const customTheme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#4C75A3'
    }
  }
}
