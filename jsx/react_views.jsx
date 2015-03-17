tiy.views = {};


(function(ns){


    var OneHeader = React.createClass({

        render: function() {
            return (
                <header>
                    <h1>Page One</h1>
                    <img src="images/success.png" />
                </header>

            );
        }
    });

    var TwoHeader = React.createClass({

        render: function() {
            return (
                <header>
                    <h1>Page Two</h1>
                    <img src="images/nph.gif" />
                </header>

            );
        }
    });

    var Page = React.createClass({
        // if the show property is pageone, then return
        // the rendered OneHeader, etc.
        whichPage: function(show) {
            if (show === "pageone") {
                return <OneHeader/>;
            }
            else if (show === "pagetwo") {
                return <TwoHeader/>;
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
                <div>
                    <nav>
                        <ul>
                            <li><a href="#" onClick={
                                this.onNav.bind(this, "pageone")}>Page 1
                                </a>
                            </li>
                            <li><a href="#" onClick={
                                this.onNav.bind(this, "pagetwo")}>Page 2
                                </a>
                            </li>

                        </ul>
                    </nav>
                    <div className="content">{currentPage}</div>
                </div>

            );
        }
    });

ns.Page = Page;


})(tiy.views);