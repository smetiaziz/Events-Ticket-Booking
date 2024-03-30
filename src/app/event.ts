export interface Event{
    id: number;
  title: string;
  date: Date;
  location: string;
  category: string;
  teams?: string[]; 
  movieName?: string;
  ticketPrice: number;
  availableTickets: number;
}