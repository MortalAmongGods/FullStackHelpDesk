
//   export interface User{
//     ticketId: number;
//     priority: number;
//     assignedTo: string;
//     solution: string;
//     status: string;
//     resolvedTime: number;

// }

export interface User {
  id: number
  userName: string
  isFavorite: boolean
  ticketID: number
  tickets: any
}

export type PutTicket = Omit<User, "ticketId">;