angular.module('app', [])
.controller('myCtrl',['$scope',function($scope,$timeout){
  	WAIT = true;
	$scope.ticket = 10;
	$scope.phone = 3;
	$scope.bike = 1;
	$scope.message = "";
	$scope.game_over = true;
	$scope.warning = false;
  	$scope.cards = [
		{
			"index":"0",
			"isFlipped": true,
			"text": "",
			"src":"1.png"
		},
		{
			"index":"1",
			"isFlipped": true,
			"text": "",
			"src":"3.png"
		},
		{
			"index":"2",
			"isFlipped": true,
			"text": "",
			"src":"2.png"
		},
		{
			"index":"3",
			"isFlipped": true,
			"text": "",
			"src":"6.png"
		},
		{
			"index":"4",
			"isFlipped": true,
			"text": "",
			"src":"4.png"
		},
		{
			"index":"5",
			"isFlipped": true,
			"text": "",
			"src":"5.png"
		},
		{
			"index":"6",
			"isFlipped": true,
			"text": "",
			"src":"7.png"
		},
		{
			"index":"7",
			"isFlipped": true,
			"text": "",
			"src":"8.png"
		}
	];

	var firstMovie = '';
	var firstIndex = -1;

	var secondIndex = -1;
	var secondMovie = '';
	$scope.toCheck = false;
	$scope.movie = ["Inception","Interstellar","Dark Knight","Titanic"];
	var count = 0;
	
	$scope.select = function(card) {
     	if(card.isFlipped == true && count < 2){
      		count++;
   			card.text = $scope.movie[Math.floor(Math.random() * $scope.movie.length)];
    		card.isFlipped = false;	
    		if(count == 1){
    			firstIndex = card.index;
    			firstMovie = card.text; 
    		}
    		else if(count == 2){
    			sec = [];
    			sec.push(firstMovie);
    			for(var i = 0 ; i < 4 ; i++){
    				if(sec[0] != $scope.movie[i]){
    					sec.push($scope.movie[i]);
    				}
    				if(sec.length == 3){
    					break;
    				}
    			}
    			card.text = sec[Math.floor(Math.random() * sec.length)];
    			secondIndex = card.index;
    			secondMovie = card.text;
    			$scope.toCheck = true;
    			$scope.message = check()	
    		}
    	}else{
    		$scope.warning = true;
    	}     		
    };
// To check whether matched correctly or not in second attempt
	function check(){
		if( firstMovie == secondMovie){
				// then select which prize to be given based on the no. of prize left
				var total = $scope.ticket +  $scope.phone;
				var rand = 0;
				if(total > 0){
					// to generate a number between 1 and total prize available
					rand = Math.floor(Math.random() * (total)) + 1;
				}	
				if($scope.ticket > 0 && rand <= $scope.ticket){
    				$scope.ticket = $scope.ticket - 1;
    				return "Congratulations You Won Movie Ticket For this Round.Click Reset To Play Again";
    			}
    			else if($scope.phone > 0){
    				$scope.phone -= 1;
    				return "Congratulations You Won Phone For this Round.Click Reset To Play Again";
    			}
    			else if($scope.bike > 0){
    				$scope.bike -= 1;
    				$scope.game_over = false;
    				return "You Won Bumper Prize.Refresh Page to Play Again";
    			}
    		}else{
    			return "Movie Names Don't Match. Try Again! ";
   			}
   			
	}
// To reset the values till prizes last.	
    $scope.reset = function(){
    	count = 0;
    	$scope.toCheck = false;
    	$scope.warning = false;
       	$scope.cards[secondIndex].text = "";
    	$scope.cards[firstIndex].text = "";
    	$scope.cards[secondIndex].isFlipped = true;
    	$scope.cards[firstIndex].isFlipped = true;
    }
}                           
]);