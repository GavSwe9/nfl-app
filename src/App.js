import { Footer } from './Components/Footer';
import { Header } from './Header';
import { Routes } from './Components/Routes';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
