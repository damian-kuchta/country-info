import "./App.css";
import Header from "./components/Layout/Header/Header";
import Select from "./components/UI/Select/Select";
import Footer from "./components/Layout/Footer/Footer";
import CountryDetails from "./components/CountryDetailsPanel/CountryDetails/CountryDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Select />
        <CountryDetails/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
