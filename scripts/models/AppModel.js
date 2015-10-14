var AppModel = Backbone.Model.extend({
  url: 'mock-data/1.json',
  initialize: function(){
    var self = this;
    this.set('clips', new ClipCollection());
    this.fetch();
    this.on('change', function(){
      // let’s enumerate the clips (obviously not relying on id's)
      var lastNumber = this.getLastNumber();
      var currentNumber;
      this.get('content').map(function(clip){
        currentNumber = lastNumber + 1;
        clip.number = currentNumber;
        lastNumber = currentNumber;
      });
      // and now add these clips to the collection
      this.get('clips').add(this.get('content'));
    })
  },
  getLastNumber: function(){
    var lastNumber = 0;
    if (this.get('clips').models.length > 0){
      lastNumber = _.max(this.get('clips').pluck('number'));
    }
    return lastNumber;
  }
});
