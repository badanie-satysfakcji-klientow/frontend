import {Item} from "./item";

interface Section {
  title: string;
  description: string;
  items: []
}

export interface Survey {
  title: string;
  description: string;
  created_at: string;
  starts_at: string;
  expires_at: string;
  paused: boolean;
  anonymous: boolean;
  creator_id: string;
  greeting: string;
  farewell: string;
  sections: Section[]
}
