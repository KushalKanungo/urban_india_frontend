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

  storeFilter(key: string) {
    let parsedFilter = this.parsed();
    localStorage.setItem(key, JSON.stringify(parsedFilter));
  }
}
