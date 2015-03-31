require('./styl/index.styl')
var domready = require('domready');

var React = require('react');
var SomePage = React.createClass({
    render: function () {
        return (<h1>Hello, world!</h1>);
    }
});

domready(function () {
    React.render(<SomePage />, document.body);
});
