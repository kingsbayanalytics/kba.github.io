---
layout: page
title: "Plotly Chart"
permalink: /plotly-chart/
---

 <div id="plotly-chart"></div>

  <script>
    // Your Plotly code goes here
    var data = [{
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter'
    }];

    var layout = {
      title: 'Sample Plot',
      xaxis: {
        title: 'X Axis',
      },
      yaxis: {
        title: 'Y Axis'
      }
    };

    Plotly.newPlot('plotly-chart', data, layout);
  </script>