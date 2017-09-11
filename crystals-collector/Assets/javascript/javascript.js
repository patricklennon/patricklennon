$(document).ready(function(){
	
	
	//toggle instructions (slow)
	
	$("#instructions").click(function(){
		$("#hide-me").toggle("slow");
		$(".glyphicon-triangle-bottom").toggleClass("glyphicon-triangle-top");
	});
	

	//random givenumber 1-120
	//crystalNumber 1-12
	
	var givenNumber = Math.floor((Math.random() * 120) + 1);
	
	//function that shows a random number on #given-number
	
	$("#given-number").text(givenNumber); 

	
	//define random number to each crystal
	
	
	var blackCrystal = Math.floor ((Math.random() * 12) + 1);
	var blueCrystal = Math.floor ((Math.random() * 12) + 1);
	var greenCrystal = Math.floor ((Math.random() * 12) + 1);
	var pinkCrystal = Math.floor ((Math.random() * 12) + 1);
	
	
	//set userTotal, wins and losses to 0
	
	var userTotal = 0;
	var wins = 0; 
	var losses = 0;
	 
	
	//funtion reset
	
	function reset(){
		givenNumber = Math.floor((Math.random() * 120) + 1); 
		$("#given-number").text(givenNumber);
		blackCrystal = Math.floor ((Math.random() * 12) + 1);
		blueCrystal = Math.floor ((Math.random() * 12) + 1);
		greenCrystal = Math.floor ((Math.random() * 12) + 1);
		pinkCrystal = Math.floor ((Math.random() * 12) + 1);
		userTotal = 0;
		$("#total-score").empty();
		$("#total-score").append(userTotal);
	}
	
	
	//logic
	
	function statement(){
		if (userTotal === givenNumber){
				wins++;
			
				$("#total-wins").text(wins);
				$("#display").text("YOU WON!");
				reset();
			} else if ( userTotal > givenNumber){
				losses++;
				
				$("#total-losses").text(losses);
				$("#display").text("YOU LOST!");
				reset();
			}
	}
	
	//on click events
	
	function addScore(){
		
	
		$("#black-diamond").on("click", function(){
			userTotal = userTotal + blackCrystal;
			$("#total-score").text(userTotal);
			statement();
			
		});

		$("#blue-diamond").on("click", function(){
			userTotal = userTotal + blueCrystal;
			$("#total-score").text(userTotal);
			statement();
		});

		$("#green-diamond").on("click", function(){
			userTotal = userTotal + greenCrystal;
			$("#total-score").text(userTotal);
			statement();
		});

		$("#pink-diamond").on("click", function(){
			userTotal = userTotal + pinkCrystal;
			$("#total-score").text(userTotal);
			statement();
		});
		
	}
	
	addScore();
	
});