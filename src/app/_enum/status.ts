export enum Status{
  IN_PROGRESS = 'In Progress',
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  PLACED = 'Placed'
}

export function toStatus(status: string) {
  switch (status) {
    case 'IN_PROGRESS':
      return Status['IN_PROGRESS']
    case 'INPROGRESS':
      return Status['IN_PROGRESS']
    case 'PENDING':
      return Status['PENDING']
    case 'COMPLETED':
      return Status['COMPLETED']
    case 'PLACED':
      return Status['PLACED'] 
    default:
      return Status.PLACED
  }
}