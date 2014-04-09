// DocPad Configuration File
// http://docpad.org/docs/config
// Define the DocPad Configuration

var custom_site_config = require('./site_config.js')

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

    filesPaths: ['assets'],

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
                },

                getMetas: function(){
                    return docpad.getBlock('meta').toHTML()
                }
            }
        }
    },

    templateData: {
        site: {
            title: custom_site_config.name,
            company: custom_site_config.company
        },

        intro: function(){
            return docpad.database.findOne({isIntro: true}).toJSON()
        },

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

        participants: custom_site_config.participants,

        sponsors: custom_site_config.sponsors

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
                section: {$exists: true},
                isIntro: {$exists: false}
            },
            function(model) {
                return model.basename
            }
            )
            .on('add', function(model){
                var collection = docpad.getCollection(model.attributes.section)
                if(!collection) {
                    createCollectionFor(model)
                }
                model.setMetaDefaults({layout: 'article', write: false})
            })
        }
    } //END collections

    }//END config

}()

// Export the DocPad Configuration
module.exports = docpadConfig