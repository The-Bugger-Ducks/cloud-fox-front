import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './global/theme'
import './global/styles.css'

import AppRoutes from './routes'
import Sidebar from './components/Sidebar'

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Sidebar />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
