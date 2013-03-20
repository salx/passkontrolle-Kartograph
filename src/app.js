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
      //Testdata
      //sifu: how would I load the data without using d3.xhr?? (see testcode)
      //answers: I'm using D3. because it's wurscht here (no SVG)
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
    });

    map.loadMap( "world.svg", function(){
    	map.addLayer( "countries", {

    		click: function( data ){
    			var clickedCountry = data["iso-n3"];
    			//console.log( clickedCountry );
    			var currentRestrictions = result[clickedCountry];
    			//console.log( currentRestrictions );
    			map.getLayer( "countries" ).style( "fill", function( data ){
    				//console.log( "GetLayer" );
    				var currentCountry = data["iso-n3"];
    				//console.log( currentCountry );
    				console.log( currentRestrictions[currentCountry] );
    				console.log( colors[currentRestrictions[currentCountry]-1] );
    				return "#0f0";
    			} )
    		}
    	});
    } );

})();

/*

//the function, where all the action happens		
function map( restrictions ){ //sifu: how about I hand over the restrictions variable here, then use is below

	//loadMap svg to the base-layer map instance
	map.loadMap( 'some.svg', function(){
		//load country group from svg
		map.addLayer('countries', { //muss ich erst im SVG gruppieren ...
		styles: {
				fill: '#fff' //etc. add some styling....
			}
		});
	
	//define a reColor method to be called on mouse-click, getting as data input the svg-data of the clicked country
	function reColor( data ){
		currentRestriction = restrictions[ data.identifier ] //get the country-restrictions list for selected country
		map.getLayer('countries').style( fill, setColorByValue( currentRestriction['countries'].value) )
		//hmmmm. Frage: die setColorByValue Methode erwartet "e" als Zahlenwert der country-Einheiten von currentRestrictions
		// kann das so theoretisch funktionieren?
		// die idee ist: das bei jedem land aus dem svg der entsprechende key in "currentRestriction" gesucht wird und dann dort das value
	};


	//define an on-click event
		map.addLayer('countries', { //Frage an SiFu: do I need a new layer for this event? Ich hab mir das vom Zeit-Code abgeschaut
			styles: {
				fill: '#fff' //etc. add some styling....
			},

			onClick: function( data ){// brauche ich die Funktion? kann ich nicht einfach nur map..setColor aufrufen?
				map.reColor( data );//wieso wird data hier nicht orange?
			}
		});

	}
}

*/