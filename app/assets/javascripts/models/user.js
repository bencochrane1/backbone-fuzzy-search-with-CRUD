var App =  App || {}

App.User = Backbone.Model.extend({
    urlRoot: '/users',
    fullName: function() {
        return this.get('first_name') + " " + this.get('last_name');
    }
});