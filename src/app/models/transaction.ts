export interface Transaction {
  id?:number,
  montanttransaction: number;
  nomemmeteur: string
  code?: any;
  nomdestinataire: string,
  telemetteur: number;
  teldestinataire: number;
  cniemetteur: number;
  cnidestinataire?: number;
 
}
