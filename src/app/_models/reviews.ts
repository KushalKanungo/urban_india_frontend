export interface Review {
  id: number
  description: string;
  rating: number;
  user: {
    id: number;
    name: string;
  }
  businessService: {
    id: number;
    name: string;
  };
  date?: Date;
}
