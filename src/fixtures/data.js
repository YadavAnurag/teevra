// import moment from "moment";
// import { v4 as uuid } from "uuid";

export const batches = [
  {
    batchId: 1,
    batchName: "Text Editor Batch",
    description: "Batch for running/killing Text Editor Applications",
    programs: [
      {
        programId: 1,
        programName: "Notepad",
        // prettier-ignore
        programPath: "C:\Windows\System32\notepad.exe",
        description: "Notepad programs description",
        executionDelay: {
          before: 500,
          after: 500,
        },
        isEnabled: true,
        createdAt: 0,
      },
      {
        programId: 2,
        programName: "VSCode",
        // prettier-ignore
        programPath: "C:\Users\ay185066\AppData\Local\Programs\Microsoft VS Code\Code.exe",
        description: "VSCode programs description",
        executionDelay: {
          before: 500,
          after: 500,
        },
        isEnabled: false,
        createdAt: 0,
      },
      {
        programId: 3,
        programName: "Notepad++ Plus Plus",
        // prettier-ignore
        programPath: "C:\Program Files (x86)\Notepad++\notepad++.exe",
        description: "Notepad++ programs description",
        executionDelay: {
          before: 500,
          after: 500,
        },
        isEnabled: true,
        createdAt: 0,
      },
    ],
    createdAt: 0,
  },
  {
    batchId: 2,
    batchName: "Browser Batch",
    description: "Batch for Browser",
    batch: [
      {
        programId: 1,
        programName: "Chrome",
        // prettier-ignore
        programPath: "C:\Users\ay185066\AppData\Local\Google\Chrome\Application",
        description: "Description of chrome browser",
        executionDelay: {
          before: 500,
          after: 500,
        },
        isEnabled: true,
        createdAt: 0,
      },
      {
        programId: 2,
        programName: "Chrome",
        // prettier-ignore
        programPath: "C:\Program Files\Mozilla Firefox\firefox.exe",
        description: "Description of chrome browser",
        executionDelay: {
          before: 500,
          after: 500,
        },
        isEnabled: true,
        createdAt: 0,
      },
      {
        programId: 3,
        programName: "Chrome",
        // prettier-ignore
        programPath: "C:\Program Files\Mozilla Firefox\firefox.exe",
        description: "Description of chrome browser",
        executionDelay: {
          before: 500,
          after: 500,
        },
        isEnabled: false,
        createdAt: 0,
      },
    ],
    createdAt: 0,
  },
];
