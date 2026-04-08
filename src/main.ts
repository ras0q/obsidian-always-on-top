import { getCurrentWindow } from "@electron/remote";
import { Plugin } from "obsidian";

export default class AlwaysOnTopPlugin extends Plugin {
  override onload() {
    this.addCommand({
      id: "toggle-always-on-top",
      name: "Toggle always on top",
      callback: () => {
        const currentWindow = getCurrentWindow();
        const isAlwaysOnTop = currentWindow.isAlwaysOnTop();
        currentWindow.setAlwaysOnTop(!isAlwaysOnTop);
      },
    });
  }

  override onunload() {
    const currentWindow = getCurrentWindow();
    currentWindow.setAlwaysOnTop(false);
  }
}
