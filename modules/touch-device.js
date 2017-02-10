'use strict';

export function isTouchDevice() {

    if (typeof window !== 'undefined') {
        return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }

    return false;
}

export function disableGestures() {

    if (typeof document !== 'undefined') {

        const prevent = e => e.preventDefault();

        document.body.addEventListener('gesturechange', prevent);
        document.body.addEventListener('gesturestart', prevent);
        document.body.addEventListener('gestureend', prevent);
    }
}
