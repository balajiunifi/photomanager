var FB = window.FB;
module.exports = {
    checkAuth: function () {

    },
    login: function () {
        var defer = $.Deferred();
        FB.login(function (res) {
            if (res && !res.error) {
                defer.resolve();
            }
        }, {scope: "user_photos"});

        return defer.promise();
    },
    getUserImages: function () {
        var defer = $.Deferred();

        FB.api("me/photos?fields=link,likes,created_time,updated_time,images", function (res) {
            if (res && !res.error) {
                defer.resolve(res);
            }
            else {
                defer.reject(res);
            }
        });

        return defer.promise();
    }
};