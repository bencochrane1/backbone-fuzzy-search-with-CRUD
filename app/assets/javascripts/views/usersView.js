var App =  App || {}

App.UsersView = Backbone.View.extend({

    render: function() {
        this.$el.html(JST['app']());
        this.renderCollection(this.collection.toJSON());
        return this;
    },

    renderCollection: function(data) {
        this.$el.find("#all-users").html(JST['users']({ users: data }));
        return this;
    }
});