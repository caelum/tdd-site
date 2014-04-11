var participants = [
	{	name: "organizadores",
		people: [
			{name: "Fulano da Silva", email: "fulano@quasi.com"},
			{name: "Cicrano do Santos", email: "cicrano@quasi.com"}
		]
	},

	{	name: "colaboradores",
		people:	[
			{name: "Fulano da Silva", email: "fulano@quasi.com"},
			{name: "Cicrano dos Santos", email: "cicrano@quasi.com"}
		]
	}
]

var crypto = require('crypto')

function gravatar_url_for(email){
	var md5sum = crypto.createHash('md5')
	md5sum.update(email)
	return 'http://gravatar.com/avatar/' + md5sum.digest('hex')
}

function parsedParticipants() {
	participants.forEach(function(type){
		type.people.forEach(function(person){
			person.img = gravatar_url_for(person.email)
			delete person.email
		})
	}, participants)

	return participants
}

module.exports = parsedParticipants()
