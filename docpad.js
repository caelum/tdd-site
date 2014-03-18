// DocPad Configuration File
// http://docpad.org/docs/config
// Define the DocPad Configuration

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

        participants: function(){
            var participants = require('./participants_util.js')
            return participants.getAll()
        }
    },//END templateData

    collections: {
        articles: function(){
            return docpad.getCollection('html')
            .setFilter('isInArticles', function(model){
                var isIn = model.attributes.fullPath.substr((__dirname+'/src/').length)
                if(isIn.indexOf('articles') >= 0) return true
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

    }//END return

}()

// Export the DocPad Configuration
module.exports = docpadConfig