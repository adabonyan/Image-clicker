
var imagesData = ko.observableArray([
    {
      'category': 'Cat:',
      'name': 'Zino',
      'imgSRC': 'dist/cat1.jpg',
      'imgALT': 'Cute cat',
      'imgAttribute': 'https://www.flickr.com/photos',
      'clickCount': '',
      'nickNames': ["myPet", "myDream", "myFriend", "myWhat", "thisWild"],
      'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
    },

    {
      'category': 'Cat:',
      'name': 'Bazoo',
      'imgSRC': 'dist/cat2.jpg',
      'imgALT': 'Mama cat',
      'imgAttribute': 'https://www.flickr.com/photos',
      'clickCount': '',
      'nickNames': ["myPet", "myDream", "myFriend", "myWhat", "thisWild"],
      'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
    },

    {
      'category': 'Cat:',
      'name': 'Africana',
      'imgSRC': 'dist/cat3.jpg',
      'imgALT': 'Snake chaser cat',
      'imgAttribute': 'https://www.flickr.com/photos',
      'clickCount': '',
      'nickNames': ["myPet", "myDream", "myFriend", "myWhat", "thisWild"],
      'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
    },

    {
      'category': 'Cat:',
      'name': 'Judas',
      'imgSRC': 'dist/cat4.jpg',
      'imgALT': 'Trusted cat',
      'imgAttribute': 'https://www.flickr.com/photos',
      'clickCount': '',
      'nickNames': ["myPet", "myDream", "myFriend", "myWhat", "thisWild"],
      'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
    },

    {
      'category': 'Cat:',
      'name': 'Reveal',
      'imgSRC': 'dist/cat5.jpg',
      'imgALT': 'Unhidden cat',
      'imgAttribute': 'https://www.flickr.com/photos',
      'clickCount': '',
      'nickNames': ["myPet", "myDream", "myFriend", "myWhat", "thisWild"],
      'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
    },

    {
      'category': 'Cat:',
      'name': 'Suzho',
      'imgSRC': 'dist/cat6.jpg',
      'imgALT': 'Mind bugging cat',
      'imgAttribute': 'https://www.flickr.com/photos',
      'clickCount': '',
      'nickNames': ["myPet", "myDream", "myFriend", "myWhat", "thisWild"],
      'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
    },

    {
      'category': 'Cat:',
      'name': 'Purr',
      'imgSRC': 'dist/cat7.jpg',
      'imgALT': 'Adhesive cat',
      'imgAttribute': 'https://www.flickr.com/photos',
      'clickCount': '',
      'nickNames': ["myPet", "myDream", "myFriend", "myWhat", "thisWild"],
      'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
    },

    {
      'category': 'Cat:',
      'name': 'Designer',
      'imgSRC': 'dist/cat8.jpg',
      'imgALT': 'Tidy and beautiful cat',
      'imgAttribute': 'https://www.flickr.com/photos',
      'clickCount': '',
      'nickNames': ["myPet", "myDream", "myFriend", "myWhat", "thisWild"],
      'ranks': ["Newborn", "Cute", "Teen", "Adult", "Wild"]
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

	this.imagesModels = ko.observableArray([""]);
	this.imagesModelsNames = ko.observableArray([""]);
	this.chosenImage = ko.observable("");

	imagesData().forEach(function(obj){
		imageModel = new Image(obj);
		self.imagesModels.push(imageModel);
		self.imagesModelsNames.push(imageModel.name);
	})

	console.log(this.imagesModels().length);	
	
	this.displayChosenImage = function() {		
        self.currentImage = ko.observable(chosenImage);
    }
	
};

ko.applyBindings(new ViewModel());
