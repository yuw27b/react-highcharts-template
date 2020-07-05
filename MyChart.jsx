import React from 'react';
import PropTypes from 'prop-types';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const MyChart = ({ data }) => {
  return (
    <div className="myChart">
      <HighchartsReact highcharts={ Highcharts } options={ generateChartData(data) } />
    </div>
  );
}

MyChart.propTypes = {
  data: PropTypes.array
}

export default MyChart;

const chartOption = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    width: 500,
    height: 250,
    marginTop: 30,
    marginBottom: 30,
    spacing: 0,
    animation: false
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true
      },
      showInLegend: true,
      animation: false
    }
  },
  credits: {
    enabled: false
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  title: '',
  series: []
};

const generateChartData = data => {
  let newOptions = Object.assign({}, chartOption);
  const chartData = data.map((d, idx) => {
    return {
      name: d.name,
      y: d.value,
      color: d.color
    }
  });
  newOptions.series = [{
    name: 'My pie chart',
    data: chartData,
    size: '100%'
  }];
  return newOptions;
}
