var chart = AmCharts.makeChart("chartdiv2", {
"type": "serial",
"theme": "light",
"dataDateFormat": "YYYY-MM",
"precision": 2,
"color": "#ffffff",
"valueAxes": [{
      "id": "v1",
      "title": "Sum of expenses",
      "position": "left",
      "autoGridCount": false,
      "labelFunction": function(value) {
        return "$" + Math.round(value) + "M";
      }
}, {
      "id": "v2",
      "title": "Market Days",
      "gridAlpha": 0,
      "position": "right",
      "autoGridCount": false
}],
"graphs": [
      {
      "id": "g1",
      "valueAxis": "v1",
      "lineColor": "#d0bf92",
      "fillColors": "#b50000",
      "fillAlphas": 1,
      "type": "column",
      "title": "Arsenal",
      "valueField": "sales4",
      "clustered": false,
      "columnWidth": 250,
      "legendValueText": "€[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
},{
      "id": "g2",
      "valueAxis": "v1",
      "lineColor": "#FFFFFF",
      "fillColors": "#0f8981",
      "fillAlphas": 1,
      "type": "column",
      "title": "Liverpool",
      "valueField": "sales3",
      "clustered": false,
      "columnWidth": 200.5,
      "legendValueText": "€[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
}, {
      "id": "g3",
      "valueAxis": "v1",
      "lineColor": "#6092b8",
      "fillColors": "#001f47",
      "fillAlphas": 1,
      "type": "column",
      "title": "Manchester City",
      "valueField": "sales2",
      "clustered": false,
      "columnWidth": 160,
      "legendValueText": "€[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
}, 
{
      "id": "g4",
      "valueAxis": "v1",
      "lineColor": "#e94949",																	
      "fillColors": "#ffff4f",
      "fillAlphas": 1,
      "type": "column",
      "title": "Manchester United",
      "valueField": "sales1",
      "clustered": false,
      "columnWidth": 120,
      "legendValueText": "€[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
}, ],
"chartScrollbar": {
      "graph": "g1",
      "oppositeAxis": false,
      "offset": 30,
      "scrollbarHeight": 50,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#fff"
},
"chartCursor": {
      "pan": true,
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "cursorAlpha": 0,
      "valueLineAlpha": 0.2,
              "color": "#fff",
},
"categoryField": "date",
"categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
},
"legend": {
      "useGraphSettings": true,
      "position": "top",
              "color": "#fff",
},
"balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0,
              "color": "#000"
},
"export": {
 "enabled": true
},
"dataProvider": [
    {
                
              "date": "2012-7"
       

        },
        {
      "date": "2013",
     

      "sales1": 321.976,  /*MU*/
      "sales2": 325.1, /*MC*/
      "sales3": 265.3, /*liver*/
      "sales4": 285.2 /*arsenal*/

}, {
      "date": "2014",
      
      "sales1": 386.2,
      "sales2": 366.8,
      "sales3": 345.8,
      "sales4": 321.6
}, {
      "date": "2015",
      
      "sales1": 401.696,
      "sales2": 395.2,
      "sales3": 401.7,
      "sales4": 383.2
}, {
      "date": "2016",
      
      "sales1": 453.088,
      "sales2": 376.8,
      "sales3": 293,
      "sales4": 406.2
}, {
      "date": "2017",
      
      "sales1": 530.488,
      "sales2": 403.8,
      "sales3": 371.2,
      "sales4": 381.4,
},

{
                
              "date": "2017-5"
       

        }]
});