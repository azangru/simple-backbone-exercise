var AppView = Backbone.View.extend({
  className: 'app',
  initialize: function(params){
    var self = this;
    self.clipsView = new ClipCollectionView({collection: self.model.get('clips')});
    this.model.on('change', function(model){
      self.checkForNextPage();
    });
  },
  checkForNextPage: function(){
    if(this.model.get('has_next') === "false"){
      this.$el.find('button').hide()
    }
  },
  loadMore: function(){
    var currentPage = parseInt(this.model.get('page'));
    var nextPage = currentPage + 1;
    var url = 'mock-data/' + nextPage + '.json';
    this.model.url = url;
    this.model.fetch();
  },
  render: function(){
    var self = this;
    var $button = $('<button>');
    $button.html('Загрузить еще');
    $button.click(function(){
      self.loadMore();
    });
    return this.$el.html([
      this.clipsView.$el,
      $button
    ]);
  }
});
