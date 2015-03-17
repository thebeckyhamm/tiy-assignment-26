tiy.views = {};


(function(ns){


    var Header = React.createClass({displayName: "Header",

        render: function() {
            return (
                React.createElement("header", null, "test")

            );
        }
    });

    // var Page = React.createClass({

    //     whichPage: function() {



    //     },

    //     render: function() {
    //         return (
    //             <nav>
    //                 <ul>
    //                     <li><a href="">Page 1</a></li>
    //                     <li><a href="">Page 2</a></li>

    //                 </ul>
    //             </nav>
    //             <Header pageName="{this.whichPage}" />

    //         );
    //     }
    // });

ns.Header = Header;


})(tiy.views);