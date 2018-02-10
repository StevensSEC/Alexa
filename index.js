const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = 'amzn1.ask.skill.XXXXXX' 
    alexa.registerHandlers(handlers);
    alexa.execute()
};

const handlers = {
	'SayHello' : function()
	{
		this.emit(':tell', 'Hey there Software Engineering Club')
	},
	'SayGoodbye' : function()
	{
		this.emit(':tell', 'Goodbye for now Software Engineering Club')
	}
}
