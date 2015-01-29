var App = App || {}

App.Router = Backbone.Router.extend({


    openPage: function(url) {
            this.navigate(url, { trigger: true });
        },

    routes: {
        "": "homePage",
        "new": "editUser"
    },

    homePage: function() {
        var usersCollection = new App.Users();
        usersCollection.fetch().then(function() {
            var usersView = new App.UsersView({ collection: usersCollection });
            $("#container").html(usersView.render().el)
        });
    },

    editUser: function() {
        var editUsersView = new EditUserView();
        $("#container").html(editUsersView.render().el)
    }
});

App.router = new App.Router();