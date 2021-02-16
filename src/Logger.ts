export const Logger = {
  log: (...args: any[]) => {
    console.log(...args);
  },

  info: (...args: any[]) => {
    console.log(...args);
  },

  success: (...args: any[]) => {
    console.log(...args);
  },

  warn: (...args: any[]) => {
    console.warn(...args);
  },

  error: (...args: any[]) => {
    console.error(...args);
  },

  printSeparator: () => {
    Logger.info('\n---\n');
  },

  printErrorSeparator: () => {
    Logger.info('\n[ERROR]');
  },
};
