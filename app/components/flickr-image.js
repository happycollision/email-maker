import Ember from 'ember';

export default Ember.Component.extend({
  id: null,
  desiredWidth: null,
  source: null,

  key: 'c2dfff46955d313d86bcd1a051f57af7',
  sizes: null,

  setSource: function(){
    var dw = this.get('desiredWidth');
    var sizes = this.get('sizes');
    var bestDiff = 1000000;
    var bestDiffId = null;

    if( sizes === null ) {return;}
    if( dw === null ) {dw = 300;}

    for (var i = sizes.length - 1; i >= 0; i--) {
      var diff = Math.abs(sizes[i].width - dw);
      if( diff < bestDiff ){
        bestDiff = diff;
        bestDiffId = i;
      }
    }

    this.set('source', sizes[bestDiffId].source);

  }.observes('sizes', 'desiredWidth'),

  getSizes: function(){
    var that = this;
    var id = this.get('id');
    var key = this.get('key');
    var $promise;

    if(id === null) {return;}

    $promise = $.ajax({
      url: 'https://api.flickr.com/services/rest/',
      data: {
        method: 'flickr.photos.getSizes',
        format: 'json',
        api_key: key,
        photo_id: id,
        nojsoncallback: 1
      }
    });

    $promise.done(function(response){
      that.set('sizes', response.sizes.size);
    });
  }.observes('id').on('init')
});
