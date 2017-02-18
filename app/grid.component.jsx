var Tile = require("../app/image.component.jsx");
var http = require("../app/service.js");

module.exports = new React.createClass({
    getInitialState: function() {
        var self = this;
        http.login()
            .then(function () {
                return http.getUserImages();
            })
            .then(function (res) {
                self.setState(function () {
                    return {images: res.data}
                });
            });
        return {images: [{images: [{}], id: 1}]};
    },
    render: function () {
        return (
            <ul className="grid">
                {this.state.images.map(image =>
                    <Tile key={image.id} image={image}></Tile>
                )}
            </ul>
        );
    }
});