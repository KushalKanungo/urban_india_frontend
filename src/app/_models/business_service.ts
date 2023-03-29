export interface BusinessService {
  id: number;
  title: string;
  description: string;
  price: number;
  mode: number;
  image: string;
  rating: number;
  service_type: string;
  address: {
    flat_no: string;
    city: string;
    state: string;
    google_code: string;
  };
}
