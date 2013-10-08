//Kartograph

//pseudocode

(function(){

	//define a map - variable
	var map = Kartograph.map( "#map", 700, 500 );

	//define a get colorByValue Method. Here colors will be assigned by a value between 1 and 3

	var colors= ["#0cc", "#c0c", "#cc0"];

//define a variable containing the data about the travel restrictions
/*
var restrictions =  124: {
      40: 2,
      840: 3,
      76: 1
      },
      */ 
    var result = {};
    d3.xhr( "matrix_testData_import_num.tsv", function(d){
      	var rows = d3.tsv.parseRows( d.response );
      	var header = ( rows[0] );

      	for( var i=1; i<rows.length; i++ ){
      		var kvPair = {};
      		var line = rows[i];
      		for( var j=1; j<line.length; j++ ){
      			var priority = parseInt( line[j] );
      			var destLand = ( header[j] ); 
      			kvPair[destLand]= parseInt( priority ); 
      		}
      		var sourceLand = line[0]; 
      		result[sourceLand]=kvPair;
      	}
      	//console.log( result );
    } );

    map.loadMap( "world.svg", function(){
    	map.addLayer( "countries", {
    		styles:  {
    			fill: '#ddd'
    		},
    		click: function( data ){
    			var clickedCountry = parseInt(data["iso-n3"]).toString();
    			var currentRestrictions = result[clickedCountry];
    			map.getLayer( "countries" ).style( "fill", function( data ){
    				var currentCountry = parseInt(data["iso-n3"]).toString();
            if ( currentCountry === clickedCountry ){
              return '#ddd';
            }else {
    				  return colors[currentRestrictions[currentCountry]-1];
            }
      		} );
    		}
    	} );

    } ); 

})();