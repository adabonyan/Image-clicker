
var imagesData = ko.observableArray([
  {
    'category': 'Cat',
    'name': 'Zino',
    'imgSRC': 'dist/cat1.jpg',
    'imgALT': 'Cute cat',
    'imgAttribute': 'https://www.flickr.com/photos',
    'clickCount': 0,
    'nickNames': ["myPet", "myDream", "myFriend"],
    'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
  },

  {
    'category': 'Cat',
    'name': 'Bazoo',
    'imgSRC': 'dist/cat2.jpg',
    'imgALT': 'Mama cat',
    'imgAttribute': 'https://www.flickr.com/photos',
    'clickCount': 0,
    'nickNames': ["myPet", "dayDream", "boozy", "funny"],
    'ranks': ["New", "baby", "scholar", "Adult", "Wild"]
  },

  {
    'category': 'Cat',
    'name': 'Africana',
    'imgSRC': 'dist/cat3.jpg',
    'imgALT': 'Snake chaser cat',
    'imgAttribute': 'https://www.flickr.com/photos',
    'clickCount': 0,
    'nickNames': ["afropet", "afrodream", "WWW"],
    'ranks': ["fragile", "eager", "saint", "Adult", "Wild"]
  },

  {
    'category': 'Cat',
    'name': 'Judas',
    'imgSRC': 'dist/cat4.jpg',
    'imgALT': 'Trusted cat',
    'imgAttribute': 'https://www.flickr.com/photos',
    'clickCount': 0,
    'nickNames': ["little", "prince", "partner"],
    'ranks': ["fragile", "standard", "reader", "hunter", "Wild"]
  },

  {
    'category': 'Cat',
    'name': 'Reveal',
    'imgSRC': 'dist/cat5.jpg',
    'imgALT': 'Unhidden cat',
    'imgAttribute': 'https://www.flickr.com/photos',
    'clickCount': 0,
    'nickNames': ["law", "justice", "executor"],
    'ranks': ["jeeze", "auto", "train", "jet", "Rambo"]
  },

  {
    'category': 'Cat',
    'name': 'Suzho',
    'imgSRC': 'dist/cat6.jpg',
    'imgALT': 'Mind bugging cat',
    'imgAttribute': 'https://www.flickr.com/photos',
    'clickCount': 0,
    'nickNames': ["chino", "guang", "yuuu", "yelp"],
    'ranks': ["breeze", "broom", "brute", "brutal", "Wild"]
  },

  {
    'category': 'Cat',
    'name': 'Purr',
    'imgSRC': 'dist/cat7.jpg',
    'imgALT': 'Adhesive cat',
    'imgAttribute': 'https://www.flickr.com/photos',
    'clickCount': 0,
    'nickNames': ["cutton", "fabric", "wool"],
    'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
  },

  {
    'category': 'Cat',
    'name': 'Designer',
    'imgSRC': 'dist/cat8.jpg',
    'imgALT': 'Tidy and beautiful cat',
    'imgAttribute': 'https://www.flickr.com/photos',
    'clickCount': 0,
    'nickNames': ["suite", "cream", "raddo", "classic"],
    'ranks': ["jewel", "jeze", "picky", "hunter", "Wild"]
  }

]);

var Image = function(data) {
	this.category = ko.observable(data.category);
	this.name = ko.observable(data.name);
	this.imgSRC = ko.observable(data.imgSRC);
	this.imgALT = ko.observable(data.imgALT);
	this.imgAttribute = ko.observable(data.imgAttribute);	
	this.clickCount = ko.observable(data.clickCount);
	this.nickNames = ko.observableArray(data.nickNames);
	this.ranks = ko.observableArray(data.ranks);
	
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
	var self = this;

	this.imagesModels = ko.observableArray([]);
	this.selectedImage = ko.observable() // Nothing selected by default

	imagesData().forEach(function(obj){
		imageModel = new Image(obj);
		self.imagesModels.push(imageModel);
	})

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  /* This also works
  this.incrementCounter = function() {
    self.selectedImage().clickCount(self.selectedImage().clickCount() + 1);
  };
  */

};

ko.applyBindings(new ViewModel());

//Display admin form with current image data
var form = document.getElementById("adminForm");

document.getElementById("adminButton").addEventListener("click", function() {
  form.removeAttribute("class", "hideAdminform");
  form.setAttribute("class", "showAdminform");
});

function cancelAdminOps() {   
  form.removeAttribute("class", "showAdminform");
  form.setAttribute("class", "hideAdminform");  
}

function saveAdminData() {
  form.removeAttribute("class", "showAdminform");
  form.setAttribute("class", "hideAdminform");
}
