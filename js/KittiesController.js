(function(){
	'use strict';

angular
	.module("kittenApp")
	.controller('KittiesController', KittiesController);

KittiesController.$inject = [];

function KittiesController() {

	var vm = this;

	vm.allKittens =
	[
		{
			id: 0,
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true,
		},
		{
			id: 1,
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			id: 2,
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: true
		},
		{
			id: 3,
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	];

	// vm.newKitten = {id: 0, catName: '', monthsOld: '', gender'', image: '', adopted: false};

	// vm.add = function(){
	// 	this.allKittens.push({
	// 		id: 		 this.id,
	// 		catName: this.catName,
	// 		monthsOld: this.monthsOld,
	// 		gender: this.gender,
	// 		image: this.image,
	// 		adopted: this.adopted
	// 	)};
	// 	this.ids++;
	// 	this.newKitten.task = '';
	// };

	vm.remove = function(removeKittens){
		this.allKittens = this.allKittens.filter(function(kitten){
			return kitten.id != removeKittens.id;
		});
	};

}

})();
