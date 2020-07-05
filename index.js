import ReactDOM from 'react-dom';
import React from 'react';

import MyChart from './MyChart.jsx';

const appEl = document.querySelector('#app');

const chartData = [
  {name: 'Type A', value: 100, color: '#C84760'},
  {name: 'Type B', value: 50, color: '#36678A'},
  {name: 'Type C', value: 25, color: '#D6D54C'}
];

const load = () => {
  ReactDOM.render(
    <div>
      <MyChart data={ chartData } />
    </div>,
    appEl
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
