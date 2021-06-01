if (!Highcharts.theme) {
  Highcharts.setOptions({
    chart: {
      backgroundColor: '#00000000'
    },
    colors: ['#F62366', '#9DFF02', '#0CCDD6'],
    title: {
      style: {
        color: 'white'
      }
    },
    tooltip: {
      style: {
        color: 'white'
      }
    }
  });
}


/**
 * In the chart render event, add icons on top of the circular shapes
 */
function renderIcons() {

  // Move icon
  if (!this.series[0].icon) {
    this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
      .attr({
        'stroke': '#303030',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'zIndex': 10
      })
      .add(this.series[2].group);
  }
  this.series[0].icon.translate(
    this.chartWidth / 2 - 10,
    this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
      (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
  );

  // Exercise icon
  if (!this.series[1].icon) {
    this.series[1].icon = this.renderer.path(
      ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
        'M', 8, -8, 'L', 16, 0, 8, 8]
      )
      .attr({
        'stroke': '#ffffff',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'zIndex': 10
      })
      .add(this.series[2].group);
  }
  this.series[1].icon.translate(
    this.chartWidth / 2 - 10,
    this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
      (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
  );

  // Stand icon
  if (!this.series[2].icon) {
    this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
      .attr({
        'stroke': '#303030',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'zIndex': 10
      })
      .add(this.series[2].group);
  }

  this.series[2].icon.translate(
    this.chartWidth / 2 - 10,
    this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
      (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
  );
}

Highcharts.chart('MUDonut', {

  chart: {
    type: 'solidgauge',
    height: '110%',
    events: {
      render: renderIcons
    }
  },

  title: {
    text: 'Manchester United revenue by stream 2012/13',
    style: {
      fontSize: '24px'
    }
  },

  tooltip: {
    borderWidth: 2,
    backgroundColor: '#00000080',
    shadow: true,
    style: {
      fontSize: '16px'
    },
    pointFormat: '{series.name}<br><span style="font-size:1.7em; color: {point.color}; font-weight: bold">€{point.y}M</span>',
    positioner: function (labelWidth) {
      return {
        x: (this.chart.chartWidth - labelWidth) / 2,
        y: (this.chart.plotHeight / 2) + 50
      };
    }
  },

  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [{ // Track for Move
      outerRadius: '112%',
      innerRadius: '88%',
      backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
        .setOpacity(0.3)
        .get(),
      borderWidth: 0
    }, { // Track for Exercise
      outerRadius: '87%',
      innerRadius: '63%',
      backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
        .setOpacity(0.3)
        .get(),
      borderWidth: 0
    }, { // Track for Stand
      outerRadius: '62%',
      innerRadius: '38%',
      backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
        .setOpacity(0.3)
        .get(),
      borderWidth: 0
    }]
  },

   yAxis: {
    min: 0,
    max: 350,
    lineWidth: 0,
    tickPositions: []
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: false
      },
      linecap: 'round',
      stickyTracking: false,
      rounded: true
    }
  },

  series: [{
    name: 'Matchday',
    data: [{
      color: Highcharts.getOptions().colors[0],
      radius: '112%',
      innerRadius: '88%',
      y: 169.46
    }]
  }, {
    name: 'Broadcoasting',
    data: [{
      color: Highcharts.getOptions().colors[1],
      radius: '87%',
      innerRadius: '63%',
      y: 112.98
    }]
  }, {
    name: 'Commercial',
    data: [{
      color: Highcharts.getOptions().colors[2],
      radius: '62%',
      innerRadius: '38%',
      y: 121.3
    }]
  }]
});