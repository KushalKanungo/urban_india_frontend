export class Filter {
  rows!: number;
  pageNo!: number;
  searchQuery!: string;
  sortField: string[] = [];
  minPrice!: number;
  maxPrice!: number;
  status_id: number[] = [];
  business_ids: number[] = [];
  rating!: number;

  public parsed() {
    const self: any = Object.assign({}, this);
    for (const key of self) {
      if (
        key instanceof Function ||
        JSON.stringify(self[key]) === JSON.stringify({}) ||
        JSON.stringify(self[key]) === JSON.stringify([])
      ) {
        delete self[key];
      }
    }
    return self;
  }

  appliedFilters() {
    let filters: any = {};
    const self: any = this;
    for (const key of self) {
      const isValid =
        self[key] &&
        ((self[key] instanceof Array && self[key].length > 0) ||
          (self[key] instanceof String && self[key].length > 0));

      if (isValid) {
        filters[key] = self[key];
      }
    }
  }

  storeFilter(key: string) {
    let parsedFilter = this.parsed();
    localStorage.setItem(key, JSON.stringify(parsedFilter));
  }
}
