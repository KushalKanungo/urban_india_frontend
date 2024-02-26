import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Address } from 'src/app/_models/address';
import { Order } from 'src/app/_models/order';
import { AddressService } from 'src/app/_services/address.service';
import { OrdersService } from 'src/app/_services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(
    private addressService: AddressService,
    private toasterService: MessageService,
    private readonly ordersService: OrdersService,
  ) {}

  addressess: Address[] = [];
  editMode = false;
  editAddressModel: Address | null = null;
  selectedAddress: Address | null = null;
  orders!: Order[];
  ngOnInit() {
    this.fetchAllAddresses();
    this.fetchAllOrderes();
  }
  fetchAllOrderes() {
    this.ordersService.getMyOrders().subscribe({
      next: res => {
        this.orders = res.data;
      },
    });
  }

  creteOrderTitle(order: Order) {
    return order.orderItems
      .map(item => {
        return item.businessService.name;
      })
      .join(', ');
  }

  fetchAllAddresses() {
    this.addressService.getAllAddress().subscribe({
      next: (res: any) => {
        this.addressess = res.dto;
      },
    });
  }

  deleteAddress(addressId: number) {
    this.addressService.deleteAddress(addressId).subscribe({
      next: () => {
        this.toasterService.add({
          severity: 'success',
          summary: 'Address deleted successfully.',
        });
        this.addressess = this.addressess.filter(({ id }) => id !== addressId);
      },
    });
  }

  addNewAddress() {
    this.editMode = false;
    this.editAddressModel = null;
  }

  editAddress(address: Address) {
    this.editMode = true;
    this.editAddressModel = address;
  }
}
