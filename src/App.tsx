import { ThemeProvider, createTheme } from '@material-ui/core';
import Home from './pages/homePage';


function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: '#202020',
        paper: '#202020'
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
