
Highcharts.chart('correlcontainer', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        "color": "#ffffff",
        
    },
    title: {
        text: '',
        
    },
    subtitle: {
        text: '<b style="color:#fff"></b>',
        
    },
    xAxis: {
        title: {
            enabled: true,
            text: '<b style="color:#fff">Squad payroll (€)</b>'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
    },
    yAxis: {
        title: {
            text: '<b style="color:#fff">Points in the league season</b>'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    },
    
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b style="color:#000">{series.name}</b><br>',
                pointFormat: '<b style="color:#000"> €{point.x}M, {point.y}</b>'
            }
        }
    },
    series: [{
        name: 'EPL',
        color: 'rgba(0, 35, 93, 1)',
        data: [
            [256.5, 78], [251.712, 69], [188.784, 76], [138.168, 86], [248.52, 93], [228.57, 75], [37.62, 40], [38.76, 28], [94.62, 61], [62.7, 41], [72.504, 46], [90.972, 45], [86.526, 44], [75.24, 44], [67.26, 41], [38.76, 46], [77.862, 24], [28.5, 34], [46.74, 40], [74.1, 45]

            
            
            
        ]

    }, {
        name: 'LaLiga',
        color: 'rgba(254, 229, 0, 1)',
        data: [
        [390.7, 90], [182.8, 78], [129.7, 46], [419.3, 93], [44.6, 39], [76.9, 67], [123.8, 72], [31.9, 20], [39.3, 45], [23.5, 54], [61.4, 63], [15.6, 22], [56.7, 64], [30.2, 35], [47.4, 56], [28.6, 55], [21.3, 31], [24.7, 36], [24.6, 39], [43.1, 46]

            
            ]
    }, {
        name: 'Seria A',
        color: 'rgba(221, 41, 49, 1)',
        data: [
       [24, 72], [15.5, 32], [30, 41], [21, 47], [18, 43], [14, 34], [44, 60], [30, 36], [120, 62], [145, 91], [55, 70], [80, 63], [75, 86], [92, 87], [35, 48], [28, 46], [16.5, 18], [32, 53], [28, 45], [14, 26]

            
            
            
            ]
    }]
});

