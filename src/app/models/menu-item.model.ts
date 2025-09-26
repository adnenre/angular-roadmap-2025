export interface MenuItem {
  id: string;
  name: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
}

export interface MenuData {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface NavigationHistory {
  level: number;
  item: MenuItem;
}

export interface BreadcrumbItem {
  name: string;
  route?: string;
}
