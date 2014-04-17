var conf = {

	title: 'TDD',

	description: 'Test-Driven Development (TDD) é uma das mais populares práticas ágeis de desenvolvimento de software. Mas com certeza uma das quais as pessoas mais tem dúvidas. A ideia deste site é explicar TDD para não-técnicos. Quais as vantagens? Serei mais produtivo? Essas e outras perguntas são respondidas aqui.',

	url: 'http://tdd.caelum.com.br/',

	img: function() {
		return this.url + this.publisher.img
	},

	publisher: {
		name: 'Caelum',
		img: 'img/main-logo.svg',
		website: 'http://www.caelum.com.br',
		facebook_page: "https://www.facebook.com/caelumbr"
	}

}

module.exports = conf
