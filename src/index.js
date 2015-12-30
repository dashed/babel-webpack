const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
});


ReactDOM.render(<App name="Andy" />, document.getElementById('app-container'));
