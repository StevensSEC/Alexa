const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = 'amzn1.ask.skill.59e60e2c-150b-4bce-8ddf-8f0e128b13ae' 
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
