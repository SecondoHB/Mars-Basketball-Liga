function el<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`DOM-Element #${id} nicht gefunden`);
  }
  return element as T;
}

export const dom = {
  get menButton() {
    return el<HTMLButtonElement>("menButton");
  },
  get womenButton() {
    return el<HTMLButtonElement>("womenButton");
  },
  get teamOneSearch() {
    return el<HTMLInputElement>("teamOneSearch");
  },
  get teamTwoSearch() {
    return el<HTMLInputElement>("teamTwoSearch");
  },
  get ergebnisDiv() {
    return el<HTMLDivElement>("ergebnis");
  },
  get toggleDatum() {
    return el<HTMLButtonElement>("toggleDatum");
  },
  get neuesteButton() {
    return el<HTMLButtonElement>("neuesteButton");
  },
  get aeltesteButton() {
    return el<HTMLButtonElement>("aeltesteButton");
  },
  get alleButton() {
    return el<HTMLButtonElement>("alleButton");
  },
  get heimButton() {
    return el<HTMLButtonElement>("heimButton");
  },
  get auswaertsButton() {
    return el<HTMLButtonElement>("auswaertsButton");
  },
  get vsText() {
    return el<HTMLSpanElement>("vsText");
  },
  get fussballerBild() {
    return el<HTMLImageElement>("fussballerimg");
  },
};
