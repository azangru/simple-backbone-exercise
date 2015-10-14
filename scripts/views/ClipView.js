var ClipView = Backbone.View.extend({
  tagName: 'tr',

  clipType: function(){
    return this.model.get('type') === 'movie' ? 'видео' : 'музыка';
  },

  categoryOrGenre: function(){
    // movies have 'categories', music has 'genres'
    return this.model.get('type') === 'movie' ?
      categoriesAndGenres[this.model.get('category')] :
      categoriesAndGenres[this.model.get('genre')];
  },

  template: _.template('<td><%= number %></td>' +
            '<td><a href="<%= page_url %>"><%= name %></a></td>' +
            '<td><%= this.clipType() %></td>' +
            '<td><%= this.categoryOrGenre() %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

var categoriesAndGenres = {
  serials: 'сериал',
  international: 'зарубежный',
  soviet: 'советское кино',
  comedy: 'комедия',
  drama: 'драма',
  alternative: 'альтернатива',
  pop: 'поп',
  rap: 'рэп',
  rock: 'рок',
  soundtrack: 'из фильма'
}
