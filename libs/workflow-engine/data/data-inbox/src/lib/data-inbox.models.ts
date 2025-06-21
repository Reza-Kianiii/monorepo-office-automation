export interface IncomingDocumentsTypes {
  app_doc_create_date: string;
  app_doc_create_user: string;
  app_doc_filename: string;
  app_doc_index: string;
  app_doc_link: string;
  app_doc_type: string;
  app_doc_uid: string;
  app_doc_version: string;
  doc_uid: string;
}

export type OutPutDocumentTypes = IncomingDocumentsTypes;

export interface CaseNoteTypes {
  app_uid: string;
  id: string;
  note_content: string;
  note_date: string;
  username: string;
  usr_firstname: null | string;
  usr_lastname: null | string;
  usr_uid: string;
}
