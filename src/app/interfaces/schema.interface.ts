export interface SchemaInterface {
  id: string;
  name: string;
  createdBy: string;
  creationDate: Date;
  schemaData: SchemaDataInterface[];
  documentId?: string;
}

export interface SchemaDataInterface {
  attribute: string;
  description: string;
  isUiSchema: boolean;
  uiType: string;
}

export interface localSchemaInterface {
  id: string;
  name: string;
}