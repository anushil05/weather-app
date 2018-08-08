var React = require('react');

// var About = React.createClass({
//     render () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

//when we have a simple presentational component that only has a render function we can use the 
// statless functional components

var About = (props) => {
    return (
        <h3>About Component</h3>
    );
} ;

module.exports = About;