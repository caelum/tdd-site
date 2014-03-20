// DocPad Configuration File
// http://docpad.org/docs/config
// Define the DocPad Configuration

var participants_util = require('./participants_util.js')

var docpadConfig = function() {

    var createCollectionFor = function(new_model) {
        docpad.setCollection(new_model.attributes.section,
            docpad.getCollection('articles')
            .findAllLive({
                section: new_model.attributes.section
            })
        )
    }

    return {

    documentsPaths: ['pages', 'articles'],

    plugins: {
        handlebars: {
            helpers: {
                getStylesAndAdd: function(){
                    //creating array from arguments
                    var styles = Object.keys(arguments).map(function(key){
                        return this[key]
                    }, arguments)

                    //removing hash object
                    styles.pop()

                    return docpad.getBlock('styles').add(styles).toHTML()
                }
            }
        }
    },

    templateData: {
        sections: function(){
            var sections = []

            docpad.collections.forEach(function(collection){
                var isArticleSection = collection.options.parentCollection.options.name == 'articles'
                if(isArticleSection) {
                    var section = {name: collection.options.name, content: ''}
                    var articles = collection.toJSON()
                    articles.forEach(function(article){
                        section.content += article.contentRendered
                    })
                    sections.push(section)
                }
            })

            return sections
        },

        participants: participants_util.getAll(),

        sponsors: require('./sponsors')
    },//END templateData

    collections: {
        articles: function(){
            return docpad.getCollection('html')
            .setFilter('isInArticles', function(model){
                var isIn = model.attributes.fullPath.substr((__dirname+'/src/').length)
                if(isIn.indexOf('articles') == 0) return true
                return false
            })
            .findAllLive({
                section: {$exists: true}

            })
            .on('add', function(model){
                var collection = docpad.getCollection(model.attributes.section)

                if(!collection) {
                    createCollectionFor(model)
                }
                model.setMetaDefaults({layout: 'article', write: false})
            })
        }
    }

    }//END config

}()

// Export the DocPad Configuration
module.exports = docpadConfig