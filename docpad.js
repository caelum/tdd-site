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

    documentsPaths: ['documents', 'articles'],

    templateData: {
        article_groups: function(){
            var groups = {}

            docpad.collections.forEach(function(collection){
                if(collection.options.parentCollection.options.name == 'articles') {
                    var article_group = ''
                    var articles = collection.toJSON()
                    articles.forEach(function(article){
                        article_group += article.contentRendered
                    })

                    groups[collection.options.name] = article_group
                }
            })

            return groups
        }
    },

    collections: {
        articles: function() {
            return docpad.getCollection('html')
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