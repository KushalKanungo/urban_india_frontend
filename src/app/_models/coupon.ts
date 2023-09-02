export type Coupon {
  id: number,
  startTime: string,
  endTime: string,
  discountPercent: number,
  code: string,
  status?: string,
  minimumAmount: string
} 