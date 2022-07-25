import { Channel } from "./models/channel";
import { User } from "./models/user";

const users: User[] = [
    {
        id: "738be0a4-9b48-43f3-aaf9-205fc3b98a20",
        name: "Alex",
        discriminator: "0001",
        avatar: ""
    },
    {
        id: "1b6c576a-3d89-46f2-9b3a-51ce91326241",
        name: "Bob",
        discriminator: "0002",
        avatar: ""
    },
    {
        id: "a814d5f4-f50e-4167-bc08-e3481efee16e",
        name: "Charlie",
        discriminator: "0003",
        avatar: ""
    }
]

const channels: Channel[] = [
    {
        id: "4db5167b-a661-4f3f-83e2-b9e85319339d",
        type: 1,
        recipients: [
            users[1]
        ],
        createdAt: Date.now()
    },
    {
        id: "8a54e4bc-5f0b-4edf-b63a-5065d61b7d60",
        type: 1,
        recipients: [
            users[2]
        ],
        createdAt: Date.now()
    },
    {
        id: "53700885-51de-40dd-8e59-7e0fd343ce53",
        type: 2,
        name: "General",
        icon: "",
        createdAt: Date.now(),
        recipients: [...users],
    }
]

const currentUser: User = users[0];

export { currentUser, users, channels };