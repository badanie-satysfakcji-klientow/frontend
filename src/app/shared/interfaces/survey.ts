import {Item} from "./item";

export interface Survey {
  id: string;
  title: string;
  description: string;
  created_at: string;
  starts_at: string;
  expires_at: string;
  paused: boolean;
  anonymous: boolean;
  items: Item[]
  greeting: string;
  farewell: string;
}
