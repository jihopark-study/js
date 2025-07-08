import { IncludeHTML } from "./IncludeHTML.js";
import { Notice, GetParameter } from "./Notice.js";
import { GNB } from "../main.js";

import { Select } from "./Select.js";
import { Alarm } from "./Alarm.js";
import { Dialog } from "./Dialog.js";

// header, footer import
IncludeHTML("/02Website/include/header.html", ".header").then(() => {
  GNB({
    parent: ".gnb ul",
    depthClassName: "depth2",
  });
  Alarm();
});
IncludeHTML("/02Website/include/footer.html", ".footer");

Select((value) => {
  console.log(value);
});

Dialog("popup", true);
Notice();
GetParameter();
