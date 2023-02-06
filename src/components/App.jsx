import "../styles/App.scss";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PhoneList from "./render/PhoneList";

function App() {
  return (
    <div className="App">
      <Header />
      <PhoneList />
      <Footer />
    </div>
  );
}

export default App;
