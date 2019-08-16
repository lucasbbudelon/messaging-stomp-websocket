export interface Message {
  sender: string;
  text: string;
  dateTime?: Date;
}

export interface Connection {
  text: string;
  status: ConnectionStatus;
}

export enum ConnectionStatus {
  OPEN,
  CLOSED,
  FAILED
}
