
export interface Activity {
  id: string;
  name: string;
  level: number;
  isExpanded: boolean;
  type: "milestone" | "task" | "group";
  start: string;
  end: string;
  children?: Activity[];
  color?: string;
}
