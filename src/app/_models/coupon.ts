export type Coupon = {
  id?: number,
  startTime: string,
  endTime: string,
  percent: number,
  code: string,
  status?: string,
  minimumAmount: number
} 