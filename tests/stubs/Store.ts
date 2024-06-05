import Singleton from "../../src/Singleton"

class Store extends Singleton {
    public store: string;

    public constructor() {
        super();
        this.store = "Minecart";
    }
}

export default Store;