module.exports = new React.createClass({
    render: function () {
        return (
            <li className="grid-image">
                <img src={this.props.image.images[0].source} />
            </li>
        );
    }
});