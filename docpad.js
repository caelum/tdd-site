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
        article_collections: function() {
            var collections = {}
            docpad.collections.forEach(function(collection){
                if(collection.options.parentCollection.options.name == 'articles') {
                    collections[collection.options.name] = (collection.toJSON())
                }
            })

            return collections
        }
    },

    //TODO try not generating articles
    // plugins: {
    //     partials: {
    //         partialsPath: 'articles'
    //     }
    // },

    collections: {
        articles: function() {
            return docpad.getCollection('html')
            .findAllLive({
                section: {$exists: true}
            })
            .on('add', addNewArticle)
        }
    }

    }//END return

}()

// Export the DocPad Configuration
module.exports = docpadConfig