var chart = AmCharts.makeChart("chartdiv3", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM",
        "precision": 2,
        "color": "#ffffff",
        "valueAxes": [{
              "id": "v1",
              "title": "Sum of revenue",
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
              "lineColor": "#004d98",
              "fillColors": "#a50044",
              "fillAlphas": 1,
              "type": "column",
              "title": "FC Barcelona",
              "valueField": "sales4",
              "clustered": false,
              "columnWidth": 250,
              "legendValueText": "€[[value]]M",
              "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
        },{
              "id": "g2",
              "valueAxis": "v1",
              "lineColor": "#0051a0",
              "fillColors": "#febf07",
              "fillAlphas": 1,
              "type": "column",
              "title": "FC Real Madrid",
              "valueField": "sales3",
              "clustered": false,
              "columnWidth": 200.5,
              "legendValueText": "€[[value]]M",
              "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
        }, {
              "id": "g3",
              "valueAxis": "v1",
              "lineColor": "#f8d340",
              "fillColors": "#14148b",
              "fillAlphas": 1,
              "type": "column",
              "title": "FC Athletico Madrid",
              "valueField": "sales2",
              "clustered": false,
              "columnWidth": 160,
              "legendValueText": "€[[value]]M",
              "balloonText": "[[title]]<br /><b style='font-size: 130%; color: #000'>€[[value]]M</b>"
        } 
       
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
              

              
              "sales2": 120,
              "sales3": 518.9,
              "sales4": 482.6

        }, {
              "date": "2014",
              
              
              "sales2": 169.9,
              "sales3": 549.5,
              "sales4": 484
        }, {
              "date": "2015",
              
              
              "sales2": 187.1,
              "sales3": 577,
              "sales4": 560.8
        }, {
              "date": "2016",
             
              
              "sales2": 228.6,
              "sales3": 620.1,
              "sales4": 620.2
        }, {
              "date": "2017",
              
              
              "sales2": 272.5,
              "sales3": 674.6,
              "sales4": 648.3
          },    {
                
              "date": "2017-5"
       

        }]
      });