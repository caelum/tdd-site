// DocPad Configuration File
// http://docpad.org/docs/config
// Define the DocPad Configuration

var docpadConfig = function() {

    var createCollectionFor = function(new_model, docpad) {
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

                    return this.getBlock('styles').add(styles).toHTML()
                },

                getMetas: function(){
                    return this.getBlock('meta').toHTML()
                }
            }
        }
    },

    templateData: {
        site: require('./site_config.js'),

        intro: function(){
            return this.getDatabase().findOne({basename: 'site-intro'}).toJSON()
        },

        sections: function(){
            var sections = []
            var collection = this.getCollection('articles')
            var section = {name: collection.options.name, articles: collection.toJSON()}
            sections.push(section)
            return sections
        },

        participants: require('./src/participants.js'),

        sponsors: require('./src/sponsors.js')

    },//END templateData

    collections: {
        articles: function(){
            var docpad = this;
            return docpad.getCollection('html')
            .setFilter('isInArticles', function(model){
                var isIn = model.attributes.fullPath.substr((__dirname+'/src/').length)
                if(isIn.indexOf('articles') == 0) return true
                return false
            })
            .findAllLive({
                section: {$exists: true},
                basename: {$ne: 'site-intro'}
            },
            function(model) {
                return model.basename
            }
            )
            .on('add', function(model){
                var collection = docpad.getCollection(model.attributes.section)
                if(!collection) {
                    createCollectionFor(model, docpad)
                }
                model.setMetaDefaults({write: false})
            })
        }
    }, //END collections

    events: {
      renderAfter: function(opts){
        opts.collection.findOne({basename: 'site-intro'}).setMetaDefaults({write: false})
      }
    }

    }//END config

}()

// Export the DocPad Configuration
module.exports = docpadConfig
