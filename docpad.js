// DocPad Configuration File
// http://docpad.org/docs/config

// Define the DocPad Configuration

var docpadConfig = function() {

    var addNewArticle = function(new_model) {

        var collection = docpad.getCollection(new_model.attributes.section)

        if(!collection) {
            docpad.setCollection(new_model.attributes.section,
                docpad.getCollection('articles')
                .findAllLive({
                    section: new_model.attributes.section
                })
                .on('add', function(model){
                    model.setMetaDefaults({layout:'article'})
                })
            )
        }

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
                model.setMetaDefaults({ignored: true})
                addNewArticle(model)
            })
        }
    }

    }//END return

}()

// Export the DocPad Configuration
module.exports = docpadConfig