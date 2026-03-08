import { State } from "../model.js";
import { applyTheme } from "./theme.js";

let lastState: State | null = null;

function stripTheme(state: State): Omit<State, "theme"> {
  const { theme, ...rest } = state;
  return rest;
}

export function shouldRender(nextState: State): boolean {
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

export function tryRender(nextState: State) {
  applyTheme(nextState.theme);

  if (!shouldRender(nextState)) return;

  import("../view.js").then(({ render }) => render()).catch(console.error);
}
