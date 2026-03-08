import { model } from "./model.js";
import { dom } from "./utils/dom.js";


function createSpielCard(spiel: any, showDatum: boolean): HTMLDivElement {
  const card = document.createElement("div");
  card.className = "output-style";

  const matchRow = document.createElement("div");
  matchRow.className = "match-row";

  const [heimTore, auswaertsTore] = spiel.score.split(":").map(Number);

  // HOME SPAN (Grid-Kind!)
  const homeSpan = document.createElement("span");
  homeSpan.textContent = spiel.homeTeam;
  if (heimTore > auswaertsTore) homeSpan.classList.add("winner");

  const homeLink = document.createElement("a");
  homeLink.href = spiel.homeTeamURL; 
  homeLink.target = "_blank";
  homeLink.textContent = spiel.homeTeam;

  homeSpan.textContent = "";          // wichtig!
  homeSpan.appendChild(homeLink);

  // SCORE
  const scoreSpan = document.createElement("span");
  scoreSpan.className = "rendered-result";
  scoreSpan.textContent = spiel.score;

  // AWAY SPAN (Grid-Kind!)
  const awaySpan = document.createElement("span");
  awaySpan.textContent = spiel.awayTeam;
  if (auswaertsTore > heimTore) awaySpan.classList.add("winner");

  const awayLink = document.createElement("a");
  awayLink.href = spiel.awayTeamURL;
  awayLink.target = "_blank";
  awayLink.textContent = spiel.awayTeam;

  awaySpan.textContent = "";           // wichtig!
  awaySpan.appendChild(awayLink);

  // Exakt 3 Grid-Kinder → Layout bleibt korrekt
  matchRow.append(homeSpan, scoreSpan, awaySpan);
  card.appendChild(matchRow);

  if (showDatum) {
    const dateDiv = document.createElement("div");
    dateDiv.className = "match-date";
    dateDiv.textContent = `${new Date(
      spiel.theDate + "T00:00:00"
    ).toLocaleDateString("de-DE")} – ${spiel.competition}`;
    card.appendChild(dateDiv);
  }

  return card;
}


// ----------------------------
// Render-Funktionen
// ----------------------------
function renderInputs(team1: string, team2: string) {
  if (!team1) dom.teamTwoSearch.value = "";
  if (!team1 && !team2) dom.teamOneSearch.value = "";

  const beideTeams = !!team1 && !!team2;

  dom.heimButton.classList.toggle("hidden", beideTeams);
  dom.auswaertsButton.classList.toggle("hidden", beideTeams);

  dom.teamOneSearch.value = team1;
  dom.teamTwoSearch.value = team2;

  dom.teamTwoSearch.disabled = !team1;
  dom.teamTwoSearch.classList.toggle("hidden", !team1);
  dom.vsText.classList.toggle("hidden", !team1);
}

function renderButtons(
  sort: "neueste" | "aelteste",
  filter: "alle" | "heim" | "auswaerts",
  showDatum: boolean,
  gender: "men" | "women"
) {
  dom.menButton.classList.toggle("button-active", gender === "men");
  dom.menButton.classList.toggle("button-inactive", gender !== "men");

  dom.womenButton.classList.toggle("button-active", gender === "women");
  dom.womenButton.classList.toggle("button-inactive", gender !== "women");

  dom.neuesteButton.classList.toggle("button-active", sort === "neueste");
  dom.neuesteButton.classList.toggle("button-inactive", sort !== "neueste");

  dom.aeltesteButton.classList.toggle("button-active", sort === "aelteste");
  dom.aeltesteButton.classList.toggle("button-inactive", sort !== "aelteste");

  dom.toggleDatum.classList.toggle("button-active", showDatum);
  dom.toggleDatum.classList.toggle("button-inactive", !showDatum);

  dom.alleButton.classList.toggle("button-active", filter === "alle");
  dom.alleButton.classList.toggle("button-inactive", filter !== "alle");

  dom.heimButton.classList.toggle("button-active", filter === "heim");
  dom.heimButton.classList.toggle("button-inactive", filter !== "heim");

  dom.auswaertsButton.classList.toggle("button-active", filter === "auswaerts");
  dom.auswaertsButton.classList.toggle(
    "button-inactive",
    filter !== "auswaerts"
  );
}

function renderErgebnisse(team1: string, team2: string, showDatum: boolean) {
  // Leeren
  dom.ergebnisDiv.textContent = "";

  if (!team1 && !team2) return;

  const gefiltert = model.getGefilterteSpiele();

  if (gefiltert.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = "Keine Spiele gefunden";
    dom.ergebnisDiv.appendChild(noResults);
    return;
  }

  gefiltert.forEach((spiel, index) => {
    const card = createSpielCard(spiel, showDatum);

    dom.ergebnisDiv.appendChild(card);

    const delay = (index / 16) * 0.8;
    setTimeout(() => {
      card.classList.add("bounce");
      card.style.animationDelay = `${delay}s`;
    }, 100);
  });

  if (team1.length < 3) {
    dom.ergebnisDiv.textContent = "";
    dom.teamTwoSearch.classList.add("hidden");
    dom.vsText.classList.add("hidden");
  }

  dom.fussballerBild.style.opacity = "0";

}

// ----------------------------
// Haupt-Render
// ----------------------------
export function render() {
  const { team1, team2, showDatum, sort, filter, gender } = model.state;

  renderInputs(team1, team2);
  renderButtons(sort, filter, showDatum, gender);
  renderErgebnisse(team1, team2, showDatum);
}
