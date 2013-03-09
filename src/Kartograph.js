Kartograph

pseudocode

(function(){

//define a map - variable
var map = //muss ich hier ein svg definieren? mir ist an der stelle der Zeit-code nicht klar

//define an array with three color-codes
var colorCodes = [#aaa, #bbb, #ccc]; //sifu: was spricht dagegen, 
//hier auch eine funktion mit if-statement zu machen (siehe ZEIT)

//the function, where all the action happens		
function map(map){ //sifu: what di I need to hand over? map? some container in the DOM, right?

	//loadMap svg to the map instance
	map.loadMap( 'some.svg' function(){
		//load country group from svg
		map.addLayer('countries') //muss ich erst definieren...
			styles: {
				fill: '#fff' //etc. add some styling....
			}
	});
	
	//load data into an object (containing objects wit key-value pairs)

//define a reColor method(data)
	//me.currentRestriction = restrictions[ data.identifier ]
	//call getLayer('countries').style( fill, setColor )

//define a setColor method(data)
	//variable =  value of data.identifier ad color
	//return colors [restriction-1]

//define an on-click event()
	//call reColor(data)
	
	}
}