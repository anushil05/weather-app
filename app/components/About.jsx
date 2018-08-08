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
        <div>
            <h1 className = "text-center">About Component</h1>
            <p>This is a weather app build on react, I build this for fun.</p>
            <p>
            <ul>
                <li>
                    <a href = "https://github.com/facebook/react">React</a> - This was the JS framework. 
                </li>
                <li>
                    <a href = "https://openweathermap.org">Open Weather Map</a> - This was the free API used to get the temperature.
                </li>
            </ul>
            </p>
        </div>
        
    );
} ;

module.exports = About;