export interface Cause {
  id: number;
  category: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}
