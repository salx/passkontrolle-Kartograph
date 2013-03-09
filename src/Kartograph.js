Kartograph

pseudocode

(function(){

//define a map - variable
var map = //muss ich hier ein svg definieren? mir ist an der stelle der Zeit-code nicht klar

//define an array with three color-codes
var colorCodes = [#aaa, #bbb, #ccc]; //sifu: was spricht dagegen, 
//hier auch eine funktion mit if-statement zu machen (siehe ZEIT)

//define a variable containing the data about the travel restrictions
var restrictions = //enter the data....

//the function, where all the action happens		
function map(restrictions){ //sifu: how about I hand over the restrictions variable here?

	//loadMap svg to the map instance
	map.loadMap( 'some.svg' function(){
		//load country group from svg
		map.addLayer('countries') //muss ich erst definieren...
			styles: {
				fill: '#fff' //etc. add some styling....
			}
	});
	
	//define a reColor method(data)
		currentRestriction = restrictions[ data.identifier ]
		map.getLayer('countries').style( fill, setColor )

	//define a setColor method(data)
		//variable =  value of data.identifier ad color
		//return colors [restriction-1]
		setColor('countries'){
			
		}

	//define an on-click event
		map.addLayer('countries' {
			styles: {
				fill: '#fff' //etc. add some styling....
			}

			onClick: function(data){
				getLayer('countries'.style(fill, setColor) )
			}
		});
	
	}
}