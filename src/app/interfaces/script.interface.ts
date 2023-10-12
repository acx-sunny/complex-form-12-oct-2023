export interface ScriptInterface {
  id: string;
  name: string;
  createdBy: string;
  creationDate: Date;
  scriptData: scriptDataInterface[];
}

export interface scriptDataInterface {
  stepName: string;
  scriptType: string;
  scriptTypeInputValue: string[];
}
