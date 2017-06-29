var friendList = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {

    res.json(friendList);

  });

  app.post("/api/friends", function(req, res) {
  	var userAnswers=[];
  	var differences=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  	//Populate differences array with the sum of the differences in the answers for each friend
  	for(var i=0; i<friendList.scores.length; i++){
  		for(var j=0; j<userAnswers.length; j++){
  			differences[i]+=(Math.abs(userAnswers[j]-friendList.scores[j]));
  		}
  	}
  	
  	//Find which difference is the smallest and return its corresponding friend
  	var min=10000;
  	for(var i=0, i<differences.length; i++){
  		if(differences[i]<min){
  			min=differences[i];
  		}
  	}

  	res.json(friendList[differences.indexOf(min)]);
   
  });

  
};
