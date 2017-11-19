window.onload = function () {
    var navigation = document.getElementsByTagName('nav')[0];
    var menuButton = document.getElementsByClassName('mobile-menu-button')[0];
    var body = document.getElementsByTagName('body')[0];

    navigation.onclick = function (e) {
        e.stopPropagation();
    };

    menuButton.onclick = function (e) {
        navigation.className += ' noLeftShift';
        e.stopPropagation();
    };

    body.onclick = function () {
        var style = window.getComputedStyle(navigation);
        var leftShift = parseInt(style.getPropertyValue('left'));
        if (leftShift == 0) {
            navigation.className = navigation.className.replace('noLeftShift', '');
        }
    };
};
