function Normalgraph( k,a ) { //function
 var d= ((a*k) + (2*a)-Math.sqrt((a*a)*(k*k) +(4*k) + 4));
 var f=-1/2*(d)/(k+1); //calculate d point for ploting 
return f;
  }
 

/**
 * Calculate data
 */
var chartData = [];
for ( var k = 0; k < 100; k += 1 ) {
  var p1 = {
    category: k,
    value: Normalgraph( k,0.05), //Call function 
    value2: Normalgraph( k,0.10),
    value3: Normalgraph( k,0.15),
    value4: Normalgraph( k,0.20),
    value5: Normalgraph( k,0.25),
    value6: Normalgraph( k,0.30)
  };
  
  chartData.push( p1 );   //ploting curve 1
}
                 
        
/**
 * Create a chart
 */
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "xy",
  "theme": "light",
  "dataProvider": chartData,
  "precision": 2,
 //show title for each line

  "legend": {
    "horizontalGap": 10,
    "useGraphSettings": true,
    "markerSize": 16,
   "position":"right"
  },

/*  "xAxis":{
  "title":"k"
},*/

  "valueAxes": [ {
  "position": "left",
  "title":"d/A",
  "gridAlpha": 0.2,
  "dashLength": 0,
  "autoGridCount": false,
  "gridCount": 10
}, { 
  "position": "bottom",
  "title": "k",
  "maximum": 100,
  "autoGridCount": false,
  "gridCount": 10
} ],

  "titles":[{
      "text":"DesignAids Graph"
  }],
  "startDuration":1,
  "graphs": [ {
    "id":"g1",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "bullet": "round",
    "bulletAlpha": 0,
    "lineThickness": 3,
    "title":"a/A=0.05",
    "yField": "value",
    "valueField": "value",
    "xField": "category"
         
  }, {
    "id":"g2",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "bullet": "round",
    "bulletAlpha": 0,
    "lineThickness": 3,
    "title":"a/A=0.10",
    "yField": "value2",
    "valueField": "value2",
    "xField": "category"
    
     
  }, {
     "id":"g3",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "bullet": "round",
    "bulletAlpha": 0,
    "lineThickness": 3,
    "title":"a/A=0.15",
    "yField": "value3",
    "valueField": "value3",
    "xField": "category"
    
     
  }, {  
     "id":"g4",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "bullet": "round",
    "bulletAlpha": 0,
    "lineThickness": 3,
    "title":"a/A=0.20",
    "yField": "value4",
    "valueField": "value4",
    "xField": "category"
    
     
  }, { 
      "id":"g5",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "bullet": "round",
    "bulletAlpha": 0,
    "lineThickness": 3,
    "title":"a/A=0.25",
    "yField": "value5",
    "valueField": "value5",
    "xField": "category"
    
     
  }, {  
     "id":"g6",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "bullet": "round",
    "bulletAlpha": 0,
    "lineThickness": 3,
    "title":"a/A=0.30",
    "yField": "value6",
    "valueField": "value6",
    "xField": "category"
                  
  } ],

//Zoom effect
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": true,
    "oneBalloonOnly": false
  },

"balloon": {
    "borderThickness": 4,
    "horizontalPadding": 8,
  //  "offsetX": 50,
    //"offsetY": 8
   "pointerWidth":10
},

});
