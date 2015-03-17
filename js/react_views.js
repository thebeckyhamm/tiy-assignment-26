tiy.views = {};


(function(ns){


    var OneHeader = React.createClass({displayName: "OneHeader",

        render: function() {
            return (
                React.createElement("header", null, 
                    React.createElement("h1", null, "Page One"), 
                    React.createElement("img", {src: "images/success.png"})
                )

            );
        }
    });

    var TwoHeader = React.createClass({displayName: "TwoHeader",

        render: function() {
            return (
                React.createElement("header", null, 
                    React.createElement("h1", null, "Page Two"), 
                    React.createElement("img", {src: "images/nph.gif"})
                )

            );
        }
    });

    var Page = React.createClass({displayName: "Page",
        // if the show property is pageone, then return
        // the rendered OneHeader, etc.
        whichPage: function(show) {
            if (show === "pageone") {
                return React.createElement(OneHeader, null);
            }
            else if (show === "pagetwo") {
                return React.createElement(TwoHeader, null);
            }
        },
        // e gets passed after the bound parameter
        onNav: function(show, e) {
            e.preventDefault();
            // pass the showing page to props.onShow (which is a prop
            // that is called when rendered)
            this.props.onShow(show);

        },

        render: function() {
            // set the current page to the return value
            // of the whichPage function with the show
            // property as a parameter
            var currentPage = this.whichPage(this.props.show);
            // when a link is clicked, call the onNav function to
            // tell onShow what link to navigate to. We pass in the
            // link name by binding it. It's an easier way to pass
            // a parameter. 
            return (
                React.createElement("div", null, 
                    React.createElement("nav", null, 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", {href: "#", onClick: 
                                this.onNav.bind(this, "pageone")}, "Page 1"
                                )
                            ), 
                            React.createElement("li", null, React.createElement("a", {href: "#", onClick: 
                                this.onNav.bind(this, "pagetwo")}, "Page 2"
                                )
                            )

                        )
                    ), 
                    React.createElement("div", {className: "content"}, currentPage)
                )

            );
        }
    });

ns.Page = Page;


})(tiy.views);