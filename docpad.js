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
            var sections = {}

            docpad.collections.forEach(function(collection){
                if(collection.options.parentCollection.options.name == 'articles') {
                    var section = ''
                    var articles = collection.toJSON()
                    articles.forEach(function(article){
                        console.log('\n' + article.contentRendered)
                        section += article.contentRendered
                    })

                    sections[collection.options.name] = section
                }
            })

            return sections
        }
    },

    collections: {
        articles: function() {
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