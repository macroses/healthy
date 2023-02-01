export interface DropdownItem {
  id: number
  value: string | number
  withIcon?: boolean
  iconName?: string
  iconSize?: string
}

export enum QueryStatus {
  loading,
  done
}