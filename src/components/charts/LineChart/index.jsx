import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

import { ListColorRGB } from '../colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ labels, datasets, ...props }) => {
  const listColor = _.shuffle(ListColorRGB);

  const options = {
    responsive: true,
    interaction: props.interaction && {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        position: props.legendPosition || 'top'
      },
      title: {
        display: true,
        text: props.title
      }
    }
    // scales: {
    //   y: {
    //     type: "linear",
    //     display: true,
    //     position: "left"
    //   },
    //   y1: {
    //     type: "linear",
    //     display: true,
    //     position: "right",
    //     grid: {
    //       drawOnChartArea: false
    //     }
    //   }
    // }
  };

  const dataConfig = {
    labels: labels,
    datasets: datasets.map(set => {
      const color = listColor.shift();
      return {
        ...set,
        backgroundColor: `rgba(${color}, 0.2)`,
        borderColor: `rgba(${color}, 1)`
      };
    })
  };

  return (
    <Line options={options} data={dataConfig} className={props.className} />
  );
};

export default LineChart;
