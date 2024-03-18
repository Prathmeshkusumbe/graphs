import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


function Pie({data}) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div><Doughnut data={data} /></div>
  )
}

export default Pie