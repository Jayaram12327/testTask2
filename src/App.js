
import './App.css';
import Navigation from './component/Navigation';
import Header from './component/Header';

import Footer from './component/Footer';
import AutoLayoutExample from './component/AutoLayoutExample';




function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Header></Header>
     <AutoLayoutExample />
     <AutoLayoutExample />
     <Footer></Footer>
    </div>
  );
}

export default App;
