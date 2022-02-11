import './chart.css'
import { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api/dataApi';
import {Line , Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto'

export default ({data,country}) => {

    let [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        async function getDailyData() {
            setDailyData(await fetchDailyData())
        }
        getDailyData()
    }, [])


    let lineChart = (
        dailyData.length != 0 ?(<Line 
        data ={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected', 
                borderColor: '#3333ff',
                fill:true,
            },{
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths', 
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill:true,
            }]
        }}
        />):null
    )

    let barChart = (
        data.confirmed ? (
        <Bar
            data={{
                labels:['Infected' , 'Recovered' , 'Deaths'],
                datasets: [{
                    label: 'People', 
                    backgroundColor : [
                        'rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'
                    ],
                    data:[data.confirmed.value , data.recovered.value , data.deaths.value]
                }]
            }}
            options={{
                legend: {display : false},
                title: {display : true , text: `Current state in ${country}`},
            }}
        />
        ) : null
    )

    return <div className='container'>
        {country ? barChart :lineChart}
    </div>
}