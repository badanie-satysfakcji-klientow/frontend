export interface Survey {
  id: string;
  title: string;
  description: string;
  creator_id: string;
  created_at: string;
  starts_at: string;
  expires_at: string;
  paused: boolean;
  anonymous: boolean;
  greeting: string;
  farewell: string;
}
