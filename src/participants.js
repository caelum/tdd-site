var crypto = require('crypto')

var participants = [
	{	name: "organizadores",
		people: [
			{name: "Maurício Aniche", email: "mauricio.aniche@caelum.com.br"}
		]
	}
]

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