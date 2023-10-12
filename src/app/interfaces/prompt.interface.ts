import { localSchemaInterface } from './schema.interface';

export interface PromptInterface {
  id: string;
  name: string;
  createdBy: string;
  creationDate: Date;
  promptData: {
    systemMessage: string;
    humanMessage: string;
    inputVariables: string;
  };
  attachedSchema?: localSchemaInterface[];
}
