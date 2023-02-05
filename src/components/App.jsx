import "../styles/App.scss";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Search from "./layout/Search";
import PhoneList from './render/PhoneList';

function App() {
  return (
    <div className="App">
      <Header />
      <Search/>
      <PhoneList />
      <Footer />
    </div>

  );
}

export default App;