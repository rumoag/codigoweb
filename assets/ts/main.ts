import Header from "./_header.js";

import HomeWebRuben from "./public/_home.js";


if (document.querySelector("#header")) {
  Header.mount("#header");
}

if (document.querySelector("#home")) {
  HomeWebRuben.mount("#homeWeb");
}

