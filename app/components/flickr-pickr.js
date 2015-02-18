import Ember from 'ember';

export default Ember.Component.extend({
  galleryId: null,
  desiredWidth: 75,
  chosenId: null,

  key: 'c2dfff46955d313d86bcd1a051f57af7',
  imageIds: null,


  getImages: function(){
    var that = this;
    var id = this.get('galleryId');
    var key = this.get('key');
    var $promise;

    if(id === null) {return;}

    $promise = $.ajax({
      url: 'https://api.flickr.com/services/rest/',
      data: {
        method: 'flickr.photosets.getPhotos',
        format: 'json',
        api_key: key,
        photoset_id: id,
        nojsoncallback: 1
      }
    });

    $promise.done(function(response){
      var imageIds = [];
      for (var i = response.photoset.photo.length - 1; i >= 0; i--) {
        imageIds.push(response.photoset.photo[i].id);
      }
      that.set('imageIds', imageIds);
    });
  }.observes('galleryId').on('init')

});
