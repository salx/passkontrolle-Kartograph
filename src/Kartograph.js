Kartograph

pseudocode

(function(){

//define a map - variable
var map = //muss ich hier ein div angeben? mir ist an der stelle der Zeit-Code nicht klar

//define a get colorByValue Method. Here colors will be assigned by a value between 1 and 3
function getColorByValue(e){
	if( e == 1 ) return #aaa;
	if( e == 2 ) return #bbb;
	if( e == 3 ) return #ccc;
}

//define a variable containing the data about the travel restrictions
var restrictions = /* enter the data in the format 124: {
      40: 2,
      840: 3,
      76: 1
      },
      */
    

//the function, where all the action happens		
function map( restrictions ){ //sifu: how about I hand over the restrictions variable here, then use is below

	//loadMap svg to the base-layer map instance
	map.loadMap( 'some.svg' function(){
		//load country group from svg
		map.addLayer('countries') //muss ich erst im SVG gruppieren ...
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
		map.addLayer('countries' { //Frage an SiFu: do I need a new layer for this event? Ich hab mir das vom Zeit-Code abgeschaut
			styles: {
				fill: '#fff' //etc. add some styling....
			}

			onClick: function( data ){// brauche ich die Funktion? kann ich nicht einfach nur map..setColor aufrufen?
				map.reColor(data);//wieso wird data hier nicht orange?
			}
		});
	
	}
}