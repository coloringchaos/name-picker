var main = function () {
	/*this array holds the names of the categories, which match the IDs in the HTML file */	
	var id_array = ["name"];

	/* all category arrays go here */
	var name_array = [
	"Student 1", 
    "Student 2", 
    "Student 3", 
    "Student 4", 
    "Student 5", 
    "Student 6",
    "Student 7", 
    "Student 8", 
    "Student 9", 
    "Student 10", 
    "Student 11", 
    "Student 12"
	];
	// var form_array = [ "box", "alarm clock", "teddy bear", "unicorn", "plant", "bird", "hat", "puppy", "cat", "light", "jewelry box", "blow dryer", "pillow", "stuffed animal", "smoke alarm", "watering can", "flower pot", "necklace", "shoe", "cereal box", "book", "boombox", "lamp", "rug", "painting", "toy", "toy", "beach ball", "wallet", "Mr. Potato Head", "Barrel of Monkeys", "football", "Ken Doll", "Darth Vader", "Care Bear", "wookie", "Happy Meal toy", "toy car", "smurf", "baby doll", "lava lamp", "neon sign", "chair", "mouse pad", "hammer", "blender", "sofa", "yoga mat", "can of beer", "night light", "door knob", "zombie", "megaphone", "blanket"];
	// var action_array = ["falls in love with you", "snuggles you", "starts a fight with you", "welcomes you", "kisses you", "yells at you", "wakes you up", "teaches you", "is obsessed with you", "loves you", "wants to take a selfie with you", "puts you to sleep", "comforts you", "offends you", "surprises you", "slaps you", "argues with you", "sings to you", "copies you", "cleans for you", "misses you", "tickles you", "pokes you", "laughs at you", "compliments you", "encourages you", "criticizes you", "stalks you", "alerts you", "proposes to you", "judges you", "tells you jokes", "courts you", "is scared of you", "wants to marry you"];

	/* picker function randomly chooses an item
	 from an array of categories, takes array as input */
	var picker = function (choices) {
		randomNumber = Math.floor(Math.random() * choices.length);
		return choices[randomNumber];
	};

	/* takes IDs from the id_array,
	runs the picker function on the array for that ID,
	and fills in one of the choices in the correct blank */
	var fillBlank = function (cat) {
		$("#" + cat).text(picker(eval(cat + "_array")));
	};

	for ( var i = 0 ; i < id_array.length ; i++) {
		fillBlank(id_array[i]);
	}
	
	// refresh individual blank on click 
	$(".gen").hover( function () {
	$(this).css( 'cursor', 'pointer');
	});
	$(document).on("click", ".gen", function() {
		var currentId = $(this).attr('id');
		var oldText = $(this).text();
		fillBlank(currentId);
		var newText = $(this).text();
		/* check that the old text doesn't match the new text,
		if it does, roll the dice again until it doesn't */
		while ( oldText === newText ) {
			fillBlank(currentId);
			newText = $(this).text();
		};
	});

	// refresh button behavior
	$("#refresh").hover( function () {
		$(this).css( 'cursor', 'pointer');
	});

	$(document).on("click", "#refresh", main);
};

$(document).ready( main );

