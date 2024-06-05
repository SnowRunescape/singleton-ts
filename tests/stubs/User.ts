import Singleton from "../../src/Singleton"

class User extends Singleton {
    public username: string;

    public constructor() {
        super();
        this.username = "SnowRunescape";
    }
}

export default User;