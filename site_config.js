var conf = {

	title: 'TDD',

	description: 'Write about anything',

	url: 'http://tdd.caelum.com.br',

	img: function() {
		return this.publisher.img
	},

	publisher: {
		name: 'Caelum',
		img: 'img/main-logo.svg',
		website: 'http://www.caelum.com.br',
		facebook_page: "https://www.facebook.com/caelumbr"
	}

}

module.exports = conf
