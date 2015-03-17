tiy.Router = Backbone.Router.extend({

    routes: {
        "" : "",
        "pageone" : "showPageOne",
        "pagetwo" : "showPageTwo"
    },

    initialize: function() {

        var header = React.createElement(tiy.views.Header, {
            onShow: this.showPages
        });

        this.header = React.render(header, document.body); 
    },

    showPages: function(page) {
        if(page === "pageOne") {
            this.showPageOne();
            this.navigate("pageone");
        }
        else if (page === "pageTwo") {
            this.showPageTwo();
            this.navigate("pagetwo");
        }
    },

    showPageOne: function() {
        this.header.setProps({pageName: "Page One"});
    },

    showPageTwo: function() {
        this.header.setProps({pageName: "Page Two"});
    }



});