'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isTouchDevice = isTouchDevice;
exports.disableGestures = disableGestures;
function isTouchDevice() {

    if (typeof window !== 'undefined') {
        return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    return false;
}

function disableGestures() {

    if (typeof document !== 'undefined') {

        var prevent = function prevent(e) {
            return e.preventDefault();
        };

        document.body.addEventListener('gesturechange', prevent);
        document.body.addEventListener('gesturestart', prevent);
        document.body.addEventListener('gestureend', prevent);
    }
}