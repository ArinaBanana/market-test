export const debounce = (handler, interval) => {
    let timer = null;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        const _this = this;

        timer = setTimeout(function () {
            handler.apply(_this, args);
        }, interval);
    }
};
