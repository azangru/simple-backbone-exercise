var ClipCollectionView = Backbone.View.extend({
  tagName: 'table',
  className: 'clips',
  initialize: function(){
    this.render();
    this.collection.on('update', function(){
      this.render()
    }, this);
  },
  render: function(){
    var head = '<thead><tr><th>№</th><th>Название</th><th>Тип</th><th>Жанр</th></tr></thead>'
    return this.$el.html(head).append(
      this.collection.map(function(clip){
        return new ClipView({model: clip}).render();
      })
    );
  }
});
