var chart = AmCharts.makeChart("leaguechart",
{
    "type": "serial",
    "theme": "none",
    "color": "#fff",
    "dataProvider": [{
        "name": "EPL",
        "points": 4865,
        "color": "#04255f",
        "bullet": "https://drive.google.com/uc?export=download&id=1vhQZ5gE5g6LdvmI0b6xdI1NcbioRGB1q"
    }, {
        "name": "LaLiga",
        "points": 2437,
        "color": "#ed7c1c",
        "bullet": "https://drive.google.com/uc?export=download&id=10cFkXqp5vwr6yvgOoheN9_z6uF1_WNV7"
    }, {
        "name": "Serie A",
        "points": 1917,
        "color": "#4ab05e",
        "bullet": "https://drive.google.com/uc?export=download&id=1TsJJZsrVf6niDibzVC5nejRYJ6Z__IFZ"
    } 
//    {
//        "name": "Bundesliga",
//        "points": 801.2,
//        "color": "#d20515",
//        "bullet": "https://drive.google.com/uc?export=download&id=1LksQy3hNtbTr8J-9IpcMbKDGcaT3mODg"
//    }, {
//        "name": "League 1",
//        "points": 770.5,
//        "color": "#929a9e",
//        "bullet": "https://drive.google.com/uc?export=download&id=16C4KnoZN88R32k66xk-bXKP_mHolunRZ"
//    }
],
    "valueAxes": [{
        "maximum": 6000,
        "minimum":  0,
        "axisAlpha": 0,
        "dashLength": 4,
        "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:15px; color: #000;'>[[category]]: <b></span><span style='font-size:15px; color: #000;'>€[[value]]M</b></span>",
        "bulletOffset": 35,
        "bulletSize": 52,
        "colorField": "color",
        "cornerRadiusTop": 10,
        "customBulletField": "bullet",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "valueField": "points"
    }],
    "marginTop": 100,
    "marginRight": 10,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": true,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 1,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
    	"enabled": true
     }
});