import { Review } from "./reviews";

export interface OrderItem {
  id: number;
  completionDate: string;
  businessService: {
    id: number;
    name: string;
    price: number;
  };
  review: Review;
  status: string;
  effectivePrice: number;
}
