
Highcharts.chart('correlcontainer2', {
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
            text: '<b style="color:#fff">Squad value estimation (€)</b>'
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
           [497.3, 78], [428.85, 69], [357.48, 76], [386.1, 86], [473.18, 93], [474.3, 75], [76.05, 40], [72.6, 28], [240.8, 61], [154.96, 41], [208.35, 46], [193.91, 45], [136.35, 44], [187.47, 44], [120.69, 41], [82.44, 46], [42.75, 24], [54.45, 34], [116.55, 40], [88.07, 45]

            
            
        ]

    }, {
        name: 'LaLiga',
        color: 'rgba(254, 229, 0, 1)',
        data: [
        [787.2, 90], [456.7, 78], [286.4, 46], [743.1, 93], [76.8, 39], [158.7, 67], [236.4, 72], [85.8, 20], [95.5, 45], [52.1, 54], [151.6, 63], [36.9, 22], [110.5, 64], [47.3, 35], [84.7, 56], [39.8, 55], [50.5, 31], [92.8, 36], [55.9, 39], [80.6, 46]

            
            ]
    }, {
        name: 'Seria A',
        color: 'rgba(221, 41, 49, 1)',
        data: [
       [91.9, 72], [66.1, 32], [81.98, 41], [63.18, 47], [56.48, 43], [25.23, 34], [195.18, 60], [113.35, 36], [352.15, 62], [463.78, 91], [170.63, 70], [226.28, 63], [310.65, 86], [319.5, 87], [99.35, 48], [107.05, 46], [47.53, 18], [150.28, 53], [120.5, 45], [48, 26]

            
            
            
            ]
    }]
});

