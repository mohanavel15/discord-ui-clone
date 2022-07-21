import { Channel } from "./models/channel";
import { User } from "./models/user";

const users: User[] = [
    {
        id: "1",
        name: "Alex",
        discriminator: "0001",
        avatar: ""
    },
    {
        id: "2",
        name: "Bob",
        discriminator: "0002",
        avatar: ""
    },
    {
        id: "3",
        name: "Charlie",
        discriminator: "0003",
        avatar: ""
    }
]

const channels: Channel[] = [
    {
        id: "1",
        type: 1,
        recipients: [
            users[1]
        ],
        createdAt: Date.now()
    },
    {
        id: "2",
        type: 1,
        recipients: [
            users[2]
        ],
        createdAt: Date.now()
    },
    {
        id: "3",
        type: 2,
        name: "General",
        icon: "",
        createdAt: Date.now(),
        recipients: [...users],
    }
]

const currentUser: User = users[0];

export { currentUser, users, channels };