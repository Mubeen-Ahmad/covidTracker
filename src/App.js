import './App.css';
import { useEffect, useState } from 'react';

import Card from './components/cards/card';
import Chart from './components/charts/chart';
import Country from './components/countries/country';
import { fetchData, fetchDailyData } from './api/dataApi';


function App() {
  let [valueData, setValueData] = useState({
    data: {},
    country: '',
  });


  useEffect(() => {
    async function getData() {


      let res = await fetchData()
      setValueData({ data: res })
      // console.log(valueData);
    }

    getData();
  }, [])

  const handleCountryChange = async (country) => {
    let res = await fetchData(country)
    setValueData({ data: res ,country :country })

    // console.log(res);
  }


  return (

    <div className='fullForm'>
      <img src='covid.png' className='covidImage' />
      <Card data={valueData.data}></Card>
      <Country handleCountryChange={handleCountryChange}></Country>
      <Chart data={valueData.data} country={valueData.country}></Chart>
    </div>

  );
}

export default App;
