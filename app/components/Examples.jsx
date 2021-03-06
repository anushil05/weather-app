var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//     render () {
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });


var Examples = (props) => {
    return (
        <div>
            <h1 className = "text-center page-title"> Examples</h1>
            <p>Here are a few example location to try out:</p>
            <ol>
                <li>
                    <Link to = '/?location = Bangalore'>Bangalore</Link>
                </li>
                <li>
                    <Link to = '/?location = LA'>LA</Link>
                </li>
            </ol>
        </div>
    );
};


module.exports = Examples;