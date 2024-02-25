import { Status } from "../_enum/status";
import { Address } from "./address";
import { Coupon } from "./coupon";
import { OrderItem } from "./order-item";

export interface Order {
  id: number,
  address: Address,
  coupon: Coupon,
  status: Status
  price: number
  effectivePrice: number
  business: {
    id: number,
    name: string
  }, 
  orderItems: OrderItem[]
}