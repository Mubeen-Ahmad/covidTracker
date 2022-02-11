import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let newUrl = url;

    if (country) {
        newUrl = `${url}/countries/${country}`
    }
    try {
        let { data } = await axios.get(newUrl)
        let newData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return newData;
    } catch (e) {
        console.log(e);
    }
}
export const fetchDailyData = async () => {
    try {
        let { data } = await axios.get(`${url}/daily`)

        let newData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return newData;
    } catch (e) {
        console.log(e);

    }
}

export const countries = async () => {
    try {
        let { data } = await axios.get(`${url}/countries`)
        return data.countries.map((country) => country.name)
    } catch (e) {
        console.log(e);

    }
}