import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Home from './pages/homePage';


function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#202020',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: '#202020',
        paper: '#202020'
      },

    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
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
