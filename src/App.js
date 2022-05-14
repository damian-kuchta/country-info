import "./App.css";
import getWindowHeight from './utils/getWindowHeight'
import Header from "./components/Layout/Header/Header";
import CountrySelect from "./components/CountrySelect/CountrySelect";
import Footer from "./components/Layout/Footer/Footer";
import CountryDetails from "./components/CountryDetailsPanel/CountryDetails/CountryDetails";
import AppContext from '../src/store/app-context'
import { useState, useEffect, useContext } from "react";

function App() {
  const [appHeight, setAppHeight] = useState('');
  const ctx = useContext(AppContext);

  useEffect(()=> {
    setAppHeight(getWindowHeight());
    window.addEventListener("resize", () => {
      setAppHeight(getWindowHeight());
    }, [appHeight]);
  })

  useEffect(() => {
    ctx.fetchCountries();
  }, []);

  return (
    <div className="App" style={{height: appHeight}}>
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
