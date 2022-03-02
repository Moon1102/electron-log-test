"use strict";

import { app, BrowserWindow } from "electron";
import { Window } from "@/service/window";

//import electron-log on main process
const log = require("electron-log");
log.transports.console.level = "warn";
["info", "verbose", "debug", "silly", "log"].forEach((key) => {
  log.functions[key] = () => {};
});
Object.assign(console, log.functions);

console.warn("print on main process!")

//create window on app activate
app.on("activate", async () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    try {
      await new Window().create();
    } catch (e) {
      console.error("activate error:", e);
    }
  }
});
