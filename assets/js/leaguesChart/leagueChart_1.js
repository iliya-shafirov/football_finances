var chart = AmCharts.makeChart("leaguechart_1",
{
    "type": "serial",
    "theme": "none",
    "color": "#fff",
    "dataProvider": [{
        "name": "Profit",
        "points": 683,
        "color": "#19ACFF",
        "backgroundcolor": "#fff",
        "bullet": "https://drive.google.com/uc?export=download&id=1vhQZ5gE5g6LdvmI0b6xdI1NcbioRGB1q"
    }, {
        "name": "Profit",
        "points": 400,
        "color": "#19ACFF",
        "bullet": "https://drive.google.com/uc?export=download&id=10cFkXqp5vwr6yvgOoheN9_z6uF1_WNV7"
    }, {
        "name": "Loss",
        "points": 38,
        "color": "#F01D2D",
        "bullet": "https://drive.google.com/uc?export=download&id=1TsJJZsrVf6niDibzVC5nejRYJ6Z__IFZ"
    } 
//    {
//        "name": "Profit",
//        "points": 284,
//        "color": "#19ACFF",
//        "bullet": "https://drive.google.com/uc?export=download&id=1LksQy3hNtbTr8J-9IpcMbKDGcaT3mODg"
//    }, {
//        "name": "Loss",
//        "points": 98,
//        "color": "#F01D2D",
//        "bullet": "https://drive.google.com/uc?export=download&id=16C4KnoZN88R32k66xk-bXKP_mHolunRZ"
//    }
    ],
    "valueAxes": [{
        "maximum": 800,
        "minimum": 0,
        "axisAlpha": 0,
        "dashLength": 4,
        "position": "left",
        
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:15px; color: #000;'>[[category]]: <b></span><span style='font-size:15px; color: #000;'>$[[value]]M</b></span>",
        "bulletOffset": 35,
        "bulletSize": 52,
        "colorField": "color",
        "cornerRadiusTop": 10,
        "customBulletField": "bullet",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "valueField": "points",
        "colortext": "#fff",
    }],
    "marginTop": 50,
    "marginRight": 10,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": true,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0,
    },
    "export": {
    	"enabled": true
     }
});