export class Page<T> {
    content!: T[];
    totalElements!: number;
    last!: boolean;
    totalPages!: number;
    size!: number;
    number!: number;
    first!: number;
    numberOfElements!: number;
    pageable?: any;
  }
  