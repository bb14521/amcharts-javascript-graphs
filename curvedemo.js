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
    value: Normalgraph( k,0.05) //Call function 
                 
  };
  
  chartData.push( p1 );   //ploting curve 1
                 
var p2 = {
    category: k,
    value2: Normalgraph( k,0.10) 
                 
  };   
chartData.push(p2); 
                 
var p3 = {
    category: k,
    value3: Normalgraph( k,0.15)
                 
  };   
chartData.push( p3 ); 

var p4 = {
    category: k,
    value4: Normalgraph( k,0.20)
                 
  };   
chartData.push( p4 );   //array to store data values for ploting      
                 
var p5 = {
    category: k,
    value5: Normalgraph( k,0.25)
                 
  };   
chartData.push( p5 );     

var p6 = {
    category: k,
    value6: Normalgraph( k,0.30)
                 
  };   
chartData.push( p6 );                      
                 
}
                 
        
/**
 * Create a chart
 */
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": chartData,
   "precision": 2,
  "valueAxes": [ {
    "gridAlpha": 0.2,
    "dashLength": 0
  } ],
  "startDuration":1,
  "graphs": [ {
    "id":"g1",       
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "lineThickness": 3,
    "valueField": "value"
    
     
  }, {
    "id":"g2",       
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "lineThickness": 3,
    "valueField": "value2"
    
     
  }, {
     "id":"g3",       
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "lineThickness": 3,
    "valueField": "value3"
    
     
  }, {  
     "id":"g4",       
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "lineThickness": 3,
    "valueField": "value4"
    
     
  }, { 
      "id":"g5",       
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "lineThickness": 3,
    "valueField": "value5"
    
     
  }, {  
     "id":"g6",       
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "lineThickness": 3,
    "valueField": "value6"       
                  
  },{                  
    "balloonText": "",
    "fillAlphas": 1,
    "type": "column",
    "valueField": "vertical",
    "fixedColumnWidth": 2,
    "labelText": "[[value]]",
    "labelOffset": 20
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": true
  },
  "categoryField": "category",
  "categoryAxis": {
    "gridAlpha": 0.05,
    "startOnAxis": true,
    "tickLength": 5,
    "labelFunction": function( label, item ) {
      return '' + Math.round( item.dataContext.category * 10 ) / 10;
    }
  }

} );
