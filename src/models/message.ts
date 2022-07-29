import { User } from "./user";

export interface Message {
    id:             string;
    content:        string;
    author:         User;
    channel_id:     string;
    created_at:     number;
    edited_at:      number;
}
