var conf = {

	title: 'Quasi',

	description: 'Write about anything',

	url: 'http://caelum.github.io/quasi',

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
