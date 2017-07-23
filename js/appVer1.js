
var Image = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Shuzi');
	this.imgSRC = ko.observable('img/kings.jpg');
	this.imgAttribute = ko.observable('https://www.flickr.com/photos');
	this.ranks = ko.observableArray(["Newborn", "Cute", "Teen", "Adult", "Wild"]);
	this.nickNames = ko.observableArray(["myPet", "myDream", "myFriend", "myWhat", "thisWild"]);
	/* this.nickNames = ko.applyBindings(["myPet", "myDream", "myFriend", "myWhat", "thisWild"]); 
	Can also use this */

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};	

	
	this.imgRank = ko.computed(function() {
		var rankLevel;
		if (this.clickCount() < 5) {
			return rankLevel = this.ranks()[0];
		}

		if (this.clickCount() < 10) {
			return rankLevel = this.ranks()[1];
		}

		if (this.clickCount() < 15) {
			return rankLevel = this.ranks()[2];
		}

		if (this.clickCount() < 20) {
			return rankLevel = this.ranks()[3];
		}

		if (this.clickCount() >= 20) {
			return rankLevel = this.ranks()[4];
		}

	}, this);
}

var ViewModel = function() {
	this.currentImage = ko.observable(new Image());
};

/* This is also good to use
var ViewModel = function() {
	var self = this;
	this.currentImage = ko.observable(new Image());
	this.incrementCounter = function() {
		self.currentImage().clickCount(self.currentImage().clickCount() + 1);
	};	

};
*/
ko.applyBindings(new ViewModel());
