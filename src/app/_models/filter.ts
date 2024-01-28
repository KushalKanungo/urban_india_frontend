export class Filter {
  per!: number;
  page!: number;
  searchQuery!: string;
  sortField: string[] = [];
  // minPrice!: number;
  // maxPrice!: number;
  priceRange: number[] = [0, 100];
  listOfStatusIds: any = [];
  listOfBusinessIds: any = [];
  listOfBusinessServiceIds: any = [];
  rating!: number;

  public parsed() {
    const self: any = Object.assign({}, this);
    self.priceRange = this.setRange(this.priceRange)
    for (const key in self) {
      if (
        self[key] instanceof Function ||
        JSON.stringify(self[key]) === JSON.stringify({}) ||
        JSON.stringify(self[key]) === JSON.stringify([])
      ) {
        delete self[key];
      }
    }
    return self;
  }

  private setRange(range: number[]){
    return range?.map(val => val * 100)
  }

  // public get priceRange(){
  //   return this._priceRange
  // }

  // public set priceRange(range: number[]) {
  //   console.log('range', range);
    
  //   this._priceRange = [range[0]*100, range[1]*100];
  // }
  
  storeFilter(key: string) {
    let parsedFilter = this.parsed();
    localStorage.setItem(key, JSON.stringify(parsedFilter));
  }
}
