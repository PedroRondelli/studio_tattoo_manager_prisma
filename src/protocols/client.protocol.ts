export type Client = {
  name: string;
  date: string | Date;
  description: string;
  payment: string;
};

export type ClientEntity={
  id:number;
  name: string;
  date: string | Date;
  description: string;
  payment: string;
  paid:boolean;
}

export type BillsPaid={
  bills:number;
  paid:boolean;
} 