var App =  App || {}

App.Users = Backbone.Collection.extend({
    url: '/users',
    model: App.User
});