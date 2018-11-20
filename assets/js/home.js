function _type_out(message, id) {
    return new Promise((resolve) => {
        let delay = 200;
        (function loop(i) {
            if (i < message.length) {
                $(id).text($(id).text() + message[i]);
                window.setTimeout(function () { loop(++i); }, delay);
            }
            else {
                resolve();
                return;
            }
        })(0);
    })
}

function _blink(id) {
    return new Promise((resolve) => {
        let delay = 400;
        (function loop(i) {
            if (i < 100000000) {
                if ($(id).text().slice(-1) === '_') {
                    $(id).text($(id).text().slice(0, -1));
                }
                else {
                    $(id).text($(id).text() + '_');
                }
                window.setTimeout(function () { loop(++i); }, delay);
            }
            else {
                return;
            }
        })(0)
        resolve();
    })
}

$(function () {
    $('#left_x5F_brack_1_').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            _type_out('> coming soon_', '#coming_soon').then(function () { return _blink('#coming_soon') });
        }
    );

});