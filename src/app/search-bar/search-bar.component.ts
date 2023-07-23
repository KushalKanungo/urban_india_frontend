import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BusinessServiceModal } from '../_models/business_service';
import { Filter } from '../_models/filter';
/**
 *
 * This component will take input from the user and filter option and return this data to its
 * parent component from where further process will be done for api calling
 * */

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit,OnChanges {

  visible: boolean = false;
  rangeValues: number[] = [0, 100];
  // businesses: { title: string; id: string }[] = [
  //   {
  //     title: 'ABC Corporation',
  //     id: '1',
  //   },
  //   {
  //     title: 'XYZ Industries',
  //     id: '2',
  //   },
  //   {
  //     title: 'LMN Enterprises',
  //     id: '3',
  //   },
  //   {
  //     title: 'JKL Limited',
  //     id: '4',
  //   },
  //   {
  //     title: 'UVW Inc',
  //     id: '5',
  //   },
  //   {
  //     title: 'AAA Corporation',
  //     id: '6',
  //   },
  //   {
  //     title: 'DDD Industries',
  //     id: '7',
  //   },
  //   {
  //     title: 'GGG Enterprises',
  //     id: '8',
  //   },
  //   {
  //     title: 'JJJ Limited',
  //     id: '9',
  //   },
  //   {
  //     title: 'MMM Inc',
  //     id: '10',
  //   },
  // ];
  businesses : {name: string; id:number} [] =[];
  businessesServciesType : {title: string; id:number} [] =[];

  ratings: number[] = [0, 100];
  selectedBusiness: { name: string; id: number }[] = [];
  selectedBusinessServicesType: { title: string; id: number }[] = [];

  @Input() filter!:Filter;

  @Output("filterApplied") filterAppliedModal = new EventEmitter<any>();

  searchedQuery:any = null;

  @Input() businessServiceData : BusinessServiceModal[]=[];

  ngOnChanges(changes: SimpleChanges): void {
    const uniqueBusiness = new Map();
    const uniqueBusineeServieType= new Map();

    this.businesses = [];
    this.businessesServciesType = [];

    this.businessServiceData.forEach(businessService =>{

      if(!uniqueBusiness.has(businessService.businessId)){
      uniqueBusiness.set(businessService.businessId,businessService.businessName);
      this.businesses.push({name:businessService.businessName, id : businessService.businessId});
      }

      if(!uniqueBusineeServieType.has(businessService.serviceTypeId)){
      uniqueBusineeServieType.set(businessService.serviceTypeId,businessService.serviceTypeName);
      this.businessesServciesType.push({title:businessService.serviceTypeName, id:businessService.serviceTypeId});
      }
    })
  }
  ngOnInit(): void {
  }

  
  showDialog() {
    this.visible = true;
  }

  appliedFilter(){
    console.log("filter applied");

    this.filter.listOfBusinessIds = this.selectedBusiness.map(business => business.id);

    this.filter.listOfBusinessServiceIds = this.selectedBusinessServicesType.map(serviceType => serviceType.id);

    this.filter.searchQuery = this.searchedQuery;
    this.filter.minPrice = this.rangeValues[0]*100;
    this.filter.maxPrice = this.rangeValues[1]*100;

    if(this.filter.listOfBusinessIds.length == 0){
      this.filter.listOfBusinessIds = null;
    }

    if(this.filter.listOfBusinessServiceIds.length  == 0){
      this.filter.listOfBusinessServiceIds = null;
    }

    console.log(this.filter);
    this.filterAppliedModal.emit();
  }
}
