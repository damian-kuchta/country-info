import "./App.css";
import Header from "./components/Layout/Header/Header";
import CountrySelect from "./components/CountrySelect/CountrySelect";
import Footer from "./components/Layout/Footer/Footer";
import CountryDetails from "./components/CountryDetailsPanel/CountryDetails/CountryDetails";
import AppContext from '../src/store/app-context'
import { useEffect, useContext } from "react";



function App() {
  const ctx = useContext(AppContext);
  
  useEffect(() => {
    ctx.fetchCountries();
  }, []);

  return (
    <div className="App" onClick={()=> console.log(ctx)}>
      <Header />
      <main>
        <CountrySelect
          label="Type or select the name of the country:"
          placeholder="Select the country"
        />
        <CountryDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;
