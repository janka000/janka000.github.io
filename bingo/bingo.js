
function generate() {
	for(var j=0; j <20 ; j++){
		table(j);
		var num = new Array(75)
		for(var i=0; i<75; i++){
		        num[i]=i+1;
		}
		//console.log(num)
		shuffleArray(num)
		//console.log(num)
		
		//Starting loop through each square card
		for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
			setSquare(j,i,num);
		}
	}
}

function setSquare(tab,thisSquare, num) {
	var currSquare = tab+"square"+thisSquare;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	document.getElementById(currSquare).innerHTML = num[thisSquare];
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function table(i) {
if(i>0){
document.getElementById("content").innerHTML += '<br>'
}
 document.getElementById("content").innerHTML += '<table id="bingotable'+i+'" class="bingotable"><tr><th class="green">B</th><th class="green">I</th> <th class="green">N</th> <th class="green">G</th> <th class="green">O</th> </tr> <tr> <td id="'+i+'square0"> &nbsp;</td> <td id="'+i+'square1"> &nbsp;</td> <td id="'+i+'square2"> &nbsp;</td> <td id="'+i+'square3"> &nbsp;</td> <td id="'+i+'square4"> &nbsp;</td> </tr> <tr> <td id="'+i+'square5"> &nbsp;</td> <td id="'+i+'square6"> &nbsp;</td> <td id="'+i+'square7"> &nbsp;</td> <td id="'+i+'square8"> &nbsp;</td> <td id="'+i+'square9"> &nbsp;</td> </tr> <tr> <td id="'+i+'square10"> &nbsp;</td> <td id="'+i+'square11"> &nbsp;</td> <td id="'+i+'squarefree"> <img src="machovisko.png" id="machlogo"></td> <td id="'+i+'square12"> &nbsp;</td> <td id="'+i+'square13"> &nbsp;</td> </tr> <tr> <td id="'+i+'square14"> &nbsp;</td> <td id="'+i+'square15"> &nbsp;</td> <td id="'+i+'square16"> &nbsp;</td> <td id="'+i+'square17"> &nbsp;</td> <td id="'+i+'square18"> &nbsp;</td> </tr> <tr> <td id="'+i+'square19"> &nbsp;</td> <td id="'+i+'square20"> &nbsp;</td> <td id="'+i+'square21"> &nbsp;</td> <td id="'+i+'square22"> &nbsp;</td> <td id="'+i+'square23"> &nbsp;</td> </tr> </table> ';
				
}
