function el(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`DOM-Element #${id} nicht gefunden`);
    }
    return element;
}
export const dom = {
    get menButton() {
        return el("menButton");
    },
    get womenButton() {
        return el("womenButton");
    },
    get teamOneSearch() {
        return el("teamOneSearch");
    },
    get teamTwoSearch() {
        return el("teamTwoSearch");
    },
    get ergebnisDiv() {
        return el("ergebnis");
    },
    get toggleDatum() {
        return el("toggleDatum");
    },
    get neuesteButton() {
        return el("neuesteButton");
    },
    get aeltesteButton() {
        return el("aeltesteButton");
    },
    get alleButton() {
        return el("alleButton");
    },
    get heimButton() {
        return el("heimButton");
    },
    get auswaertsButton() {
        return el("auswaertsButton");
    },
    get vsText() {
        return el("vsText");
    },
    get fussballerBild() {
        return el("fussballerimg");
    },
};
