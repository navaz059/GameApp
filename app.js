angular.module('app', [])
.controller('myCtrl',['$scope',function($scope,$timeout){
  	WAIT = true;
	$scope.ticket = 10;
	$scope.phone = 3;
	$scope.bike = 1;
	$scope.message = "";
	$scope.game_over = true;
	var attempt = 1;
  	$scope.cards = [
		{
			"index":"0",
			"isFlipped": true,
			"text": ""
		},
		{
			"index":"1",
			"isFlipped": true,
			"text": ""
		},
		{
			"index":"2",
			"isFlipped": true,
			"text": ""
		},
		{
			"index":"3",
			"isFlipped": true,
			"text": ""
		},
		{
			"index":"4",
			"isFlipped": true,
			"text": ""
		},
		{
			"index":"5",
			"isFlipped": true,
			"text": ""
		},
		{
			"index":"6",
			"isFlipped": true,
			"text": ""
		},
		{
			"index":"7",
			"isFlipped": true,
			"text": ""
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
      		if(attempt == 3){
      			card.text = firstMovie;
    		}else{
    			card.text = $scope.movie[Math.floor(Math.random() * $scope.movie.length)];
    		}
    		card.isFlipped = false;	
    		if(count == 1){
    			firstIndex = card.index;
    			firstMovie = card.text; 
    		}
    		else if(count == 2){
    			secondIndex = card.index;
    			secondMovie = card.text;
    			$scope.toCheck = true;
    			$scope.message = check()	
    		}
    	}else{
    		alert("Please reset the game");
    	}     		
    };

	function check(){
		if( firstMovie == secondMovie){
				attempt = 1;	
				if($scope.ticket > 0){
    				$scope.ticket = $scope.ticket - 1;
    				return "Congratulations You Won Movie Ticket For this Round.Click Reset To Play Again";
    			}
    			else if($scope.phone > 0){
    				$scope.phone -= 1;
    				return "Congratulations You Won Movie Ticket For this Round.Click Reset To Play Again";
    			}
    			else if($scope.bike > 0){
    				$scope.bike -= 1;
    				$scope.game_over = false;
    				return "You Won Bumper Prize.Refresh Page to Play Again";
    			}
    		}else{
    			attempt++;
   				return "Wrong Answer, Why Don't you try again";
   			}
   			
	}
    $scope.reset = function(){
    	count = 0;
    	$scope.toCheck = false;
    	$scope.cards[secondIndex].text = "";
    	$scope.cards[firstIndex].text = "";
    	$scope.cards[secondIndex].isFlipped = true;
    	$scope.cards[firstIndex].isFlipped = true;
    }
}                           
]);