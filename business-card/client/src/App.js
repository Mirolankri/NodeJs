import './App.css';
import Layout from './layout/Layout'
import { SnackBarProvider } from './providers/SnackBarProvider';
import ThemeProvider from './providers/ThemeProvider';
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackBarProvider>
          <Layout>
            <Router/>
          </Layout>

          </SnackBarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;