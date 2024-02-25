export interface OrderItem{

  id: number,
  completionDate: string,
  businessService: {
    id: number,
    name: string,
    price: number
  },
  status: string
  effectivePrice: number

}