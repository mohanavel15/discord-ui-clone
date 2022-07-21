import { User } from './user';

export interface Channel {
    id: string;
    type: number;
    name?: string;
    icon?: string;
    createdAt: number;
    recipients: User[];
}