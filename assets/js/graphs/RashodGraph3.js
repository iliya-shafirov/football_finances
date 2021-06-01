var chart = AmCharts.makeChart("chartdiv6", {
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
              },
              

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
              "lineColor": "#000000",
              "fillColors": "#d90000",
              "fillAlphas": 1,
              "type": "column",
              "title": "AC Milan",
              "valueField": "sales4",
              "clustered": false,
              "columnWidth": 250,
              "legendValueText": "€[[value]]M",
              "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
        },{
              "id": "g2",
              "valueAxis": "v1",
              "lineColor": "#000",
              "fillColors": "#fff",
              "fillAlphas": 1,
              "type": "column",
              "title": "Juventus FC",
              "valueField": "sales3",
              "clustered": false,
              "columnWidth": 200.5,
              "legendValueText": "€[[value]]M",
              "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
        }, {
              "id": "g3",
              "valueAxis": "v1",
              "lineColor": "#fff",
              "fillColors": "#0a66ac",
              "fillAlphas": 1,
              "type": "column",
              "title": "Internazionale Milan",
              "valueField": "sales2",
              "clustered": false,
              "columnWidth": 160,
              "legendValueText": "€[[value]]M",
              "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
        }, 
        {
              "id": "g4",
              "valueAxis": "v1",
              "lineColor": "#990529",																	
              "fillColors": "#fcbb01",
              "fillAlphas": 1,
              "type": "column",
              "title": "AS Roma",
              "valueField": "sales1",
              "clustered": false,
              "columnWidth": 120,
              "legendValueText": "€[[value]]M",
              "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
        }, 
                             ],
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
              "valueLineAlpha": 0.8,
              "color": "#fff",
              
              
        },
        "categoryField": "date",
        "categoryAxis": {
              "parseDates": true,
              "dashLength": 1,
              "minorGridEnabled": true,
              
        },
        "legend": {
              "useGraphSettings": true,
              "position": "top",
              "color": "#fff",
        },
        "balloon": {
              "borderThickness": 1.5,
              "shadowAlpha": 1,
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
              

              "sales1": 100,
              "sales2": 198.11,
              "sales3": 194.6,
              "sales4": 199.82

        }, {
              "date": "2014",
              
              "sales1": 143.36,
              "sales2": 168.12,
              "sales3": 211.31,
              "sales4": 237.07
        }, {
              "date": "2015",
              
              "sales1": 127.33,
              "sales2": 147.64,
              "sales3": 226.13,
              "sales4": 185.34
        }, {
              "date": "2016",
             
              "sales1": 170.43,
              "sales2": 161.95,
              "sales3": 257.15,
              "sales4": 253.98
        }, {
              "date": "2017",
              
              "sales1": 199.31,
              "sales2": 182.77,
              "sales3": 174.12,
              "sales4": 252.69,
        },
    {
                
              "date": "2017-5"
       

        }]
      });