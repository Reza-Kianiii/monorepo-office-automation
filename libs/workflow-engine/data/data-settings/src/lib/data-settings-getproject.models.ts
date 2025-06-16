export interface GetProjects {
  cat_name: null | string;
  new_uid: null | string;
  prj_category: '';
  prj_create_date: null | string;
  prj_description: '' | string;
  prj_name: string;
  prj_status: string;
  prj_type: string;
  prj_uid: string;
  prj_update_date: string;
  reports: null | string;
}

export interface GetDetailedProcessVariablesAsync {
  var_uid: string;
  prj_uid: string;
  var_name: string;
  var_field_type: string;
  var_field_size: number;
  var_label: string;
  var_dbconnection: string;
  var_dbconnection_label: string;
  var_sql: string;
  var_null: number;
  var_default: string;
  var_accepted_values: string;
  inp_doc_uid: string;
}

export interface DetailedProcessVaribles {
  inp_doc_uid: string;
  prj_uid: string;
  var_accepted_values: string;
  var_dbconnection: string;
  var_dbconnection_label: string;
  var_default: string;
  var_field_size: number;
  var_field_type: string;
  var_label: string;
  var_name: string;
  var_null: number;
  var_sql: string;
  var_uid: string;
}

export interface VaribleSelection {
  ProcessUid: string;
  ProcessName: string;
  VariableUid: string;
  VariableLable: string;
  VariableName: string;
}
export interface SaveProcessVaribleSelectionAPIPARAMS {
  ProcessUid: string;
  selections: VaribleSelection[];
}

export interface GetSaveProcessVaribleSelection {
  VariableName: string;
  VariableUid: string;
}

export interface GetSaveProcessVaribleSelectionAPIPARAMS {
  processUid: string;
}

export interface ListDictionaryWorkFlowType extends DetailedProcessVaribles {
  status: boolean;
  selectedObjectWorkFlow: GetProjects; // یا نوع دقیق‌تر اگر داری
}

export type WorkflowVariableMap = Record<string, ListDictionaryWorkFlowType>;
