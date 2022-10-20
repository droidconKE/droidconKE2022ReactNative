import Room from "./Room";
import Speaker from "./Speaker";

export default interface Session {
  id: number;
  title: string;
  description: string;
  slug: string;
  session_format: string;
  session_level: string;
  session_image?: string | null;
  backgroundColor: string;
  borderColor: string;
  is_serviceSession: boolean;
  is_keynote: boolean;
  is_bookmarked: boolean;
  start_date_time: string;
  start_time: string;
  end_date_time: string;
  end_time: string;
  speakers: Speaker[];
  rooms: Room[];
}
