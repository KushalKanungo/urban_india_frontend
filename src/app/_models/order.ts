import { Address } from "./address";
import { Coupon } from "./coupon";
import { OrderItem } from "./order-item";

export interface Order {
  id: number,
  address: Address,
  coupon: Coupon,
  status: String
  business: {
    id: number,
    name: string
  }, 
  orderItems: OrderItem[]
}