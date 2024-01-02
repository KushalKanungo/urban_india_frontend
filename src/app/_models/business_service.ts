export interface BusinessServiceModal {
  id: number;
  title: string;
  description: string;
  businessName: string;
  businessId: number;
  price: number;
  mode_id?: number;
  image?: string;
  rating: number;
  serviceTypeId:number;
  serviceTypeName: string;
  statusId:string;
  address?: {
    plotNo: string;
    city: string;
    state: string;
    pin : string;
    google_location_code: string;
  };
}
