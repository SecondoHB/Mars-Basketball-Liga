// bindings.ts
import { model } from "./model.js";
import { tryRender } from "./utils/store.js";
import { debounce } from "./utils/debounce.js";
import { dom } from "./utils/dom.js";

export function bindTeamOneInput() {
  dom.teamOneSearch.addEventListener(
    "input",
    debounce((e: Event) => {
      const target = e.target as HTMLInputElement;
      const cleaned = target.value.replace(/[^A-Za-zÄÖÜäöüß0-9\s]/g, "");

      if (cleaned !== target.value) {
        target.value = cleaned;
        target.setCustomValidity(
          "Nur Buchstaben, Zahlen und Leerzeichen erlaubt",
        );
        target.reportValidity();
      } else {
        target.setCustomValidity("");
      }

      model.dispatch({ type: "SET_TEAM1", payload: cleaned });

      tryRender(model.state);
    }, 500),
  );
}

export function bindTeamTwoInput() {
  dom.teamTwoSearch.addEventListener(
    "input",
    debounce((e: Event) => {
      const target = e.target as HTMLInputElement;
      const cleaned = target.value.replace(/[^A-Za-zÄÖÜäöüß0-9\s]/g, "");

      if (cleaned !== target.value) {
        target.value = cleaned;
        target.setCustomValidity(
          "Nur Buchstaben, Zahlen und Leerzeichen erlaubt",
        );
        target.reportValidity();
      } else {
        target.setCustomValidity("");
      }

      model.dispatch({ type: "SET_TEAM2", payload: cleaned });
      tryRender(model.state);
    }, 500),
  );
}

export function bindToggleDatum() {
  dom.toggleDatum.addEventListener("click", () => {
    model.dispatch({ type: "TOGGLE_DATUM" });
    tryRender(model.state);
  });
}

export function bindFilterButtons() {
  dom.alleButton.addEventListener("click", () => {
    model.dispatch({ type: "SET_FILTER", payload: "alle" });
    tryRender(model.state);
  });
  dom.heimButton.addEventListener("click", () => {
    model.dispatch({ type: "SET_FILTER", payload: "heim" });
    tryRender(model.state);
  });
  dom.auswaertsButton.addEventListener("click", () => {
    model.dispatch({ type: "SET_FILTER", payload: "auswaerts" });
    tryRender(model.state);
  });
}

export function bindSortButtons() {
  dom.neuesteButton.addEventListener("click", () => {
    model.dispatch({ type: "SET_SORT", payload: "neueste" });
    tryRender(model.state);
  });
  dom.aeltesteButton.addEventListener("click", () => {
    model.dispatch({ type: "SET_SORT", payload: "aelteste" });
    tryRender(model.state);
  });
}

export function bindGenderButtons() {
  dom.menButton.addEventListener("click", () => {
    dom.fussballerBild.src = "./assets/img/basketballer.png";
    dom.fussballerBild.alt = "basketballer";
    model.dispatch({ type: "SET_GENDER", payload: "men" });
    tryRender(model.state);
  });

  dom.womenButton.addEventListener("click", () => {
    dom.fussballerBild.src = "./assets/img/basketballerin.png";
    dom.fussballerBild.alt = "basketballerin";
    model.dispatch({ type: "SET_GENDER", payload: "women" });
    tryRender(model.state);
  });
}
