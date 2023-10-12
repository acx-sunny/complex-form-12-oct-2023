import { localSchemaInterface } from "./schema.interface";

export interface DocumentInterface {
  id: string;
  name: string;
  createdBy: string;
  creationDate: Date;
  phraseMatcher: string;
  description: string;
  documentType: {
    isText: boolean;
    isForm: boolean;
    isTable: boolean;
  };
  attachedPrompts ?: localSchemaInterface[]
}
