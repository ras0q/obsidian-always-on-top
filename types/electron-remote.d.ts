type BrowserWindow = {
  setAlwaysOnTop(flag: boolean): void;
  isAlwaysOnTop(): boolean;
};

// Type definition mocking npm:@electron/remote
declare module "@electron/remote" {
  export function getCurrentWindow(): BrowserWindow;
}
