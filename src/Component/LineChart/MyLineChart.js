import React from 'react'
import './MyLineChart.css'

import { Line } from 'react-chartjs-2'

const MyLineChart = () => {

    const state = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
            // label: 'My First Dataset',
            data: [55, 70, 65, 71, 86, 80, 75],
            fill: true,
            // borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(194, 16, 40)',
            tension: 0.1
        }]
    }
    const state1 = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
            // label: 'My First Dataset',
            data: [55, 65, 60, 71, 76, 70, 65],
            fill: true,
            // borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(194, 16, 40)',
            tension: 0.1
        }]
    }

    return (
        <div className="myLineChart">
            <Line
                data={state}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'faisal Khan',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}

export default MyLineChart
