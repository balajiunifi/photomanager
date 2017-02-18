window.fbAsyncInit = function () {
    FB.init({
        appId: '1767886649903906',
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView();

    var Grid = require("../app/grid.component.jsx");

    ReactDom.render(<Grid></Grid>, $(".app-container")[0]);
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));