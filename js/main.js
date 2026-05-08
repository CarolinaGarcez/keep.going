import { statusList } from "./data/data-status.js";
import { frases } from "./data/data-frases.js";

import { createStatusElement } from "./components/status.js";
import { createButton } from "./components/button.js";

import { startStatusRotation } from "./effects/status-effect.js";

// STATUS
const statusEl = createStatusElement(".status-text");
startStatusRotation(statusList, statusEl);

// BUTTON
createButton("#startBtn");