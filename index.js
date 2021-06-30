var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdown');
var collections = require('metalsmith-collections');

Metalsmith(__dirname)
	.source('./src')
	.destination('./build')
	.clean(true)		
	.use(markdown())
	.use(collections({
		posts: {
			pattern: 'posts/*',
			sortBy: 'date',
			reverse: true
		}
	}))
	.use(layouts({
		engine: 'handlebars',
		default: 'layout.hbs'
	}))
	.build(function(err){
		if (err) {
			throw err;
		}
	});
	