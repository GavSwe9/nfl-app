import { Footer } from './Components/Footer';
import { Header } from './Header';
import { Routes } from './Components/Routes';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="mt-16 flex-1 overflow-hidden flex flex-col">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
