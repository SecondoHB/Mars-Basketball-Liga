import { applyTheme } from "./theme.js";
let lastState = null;
function stripTheme(state) {
    const { theme, ...rest } = state;
    return rest;
}
export function shouldRender(nextState) {
    if (!lastState) {
        lastState = structuredClone(nextState);
        return true;
    }
    const prev = stripTheme(lastState);
    const next = stripTheme(nextState);
    if (JSON.stringify(prev) !== JSON.stringify(next)) {
        lastState = structuredClone(nextState);
        return true;
    }
    lastState = structuredClone(nextState);
    return false;
}
export function tryRender(nextState) {
    applyTheme(nextState.theme);
    if (!shouldRender(nextState))
        return;
    import("../view.js").then(({ render }) => render()).catch(console.error);
}
