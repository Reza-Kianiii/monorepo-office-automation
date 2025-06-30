export interface SelectEnginsTypes {
  DbName: string;
  Id: number;
  LocalWebAddress: string;
  Name: string;
  ServerName: string;
  Status: boolean;
  WebAddress: string;
}

export type CreateSelectEngineApi = SelectEnginsTypes & {
  LocalWebAddress: string;
  DbUserName: string;
  PhisicalWebAddress: string;
  EngineType: string;
  Password: string;
  ClientId: string;
  ClientSecret: string;
};
