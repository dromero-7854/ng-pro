export interface MenuItem {
  name: string;
  expanded?: boolean;
  disabled?: boolean;
  icon?: string;
  route?: string;
  children?: MenuItem[];
}
