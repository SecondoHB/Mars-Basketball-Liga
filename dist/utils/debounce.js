export function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
