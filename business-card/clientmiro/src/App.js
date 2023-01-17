import './App.css';
import CardsComponent from './cards/components/Cards';
import CardsPage from './cards/pages/CardsPage';
import Layout from './layout/Layout';
import AboutPage from './pages/AboutPage';
import SandBox from './sandbox/SandBox';

function App() {
  return (
    <div className="App">
      {/* <SandBox/> */}
      <Layout>
      <CardsPage/>
      <AboutPage/>
      {/* <p>Welcome</p> */}
      </Layout>
      {/* <CardsComponent/> */}
    </div>
  );
}

export default App;