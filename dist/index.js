import { model } from "./model.js";
import { tryRender } from "./utils/store.js";
import { bindGenderButtons, bindTeamOneInput, bindTeamTwoInput, bindToggleDatum, bindFilterButtons, bindSortButtons, } from "./controller.js";
(async () => {
    tryRender(model.state);
    bindGenderButtons();
    bindTeamOneInput();
    bindTeamTwoInput();
    bindToggleDatum();
    bindFilterButtons();
    bindSortButtons();
})();
