class Singleton {
    private static instances: Map<any, any> = new Map();

    protected constructor() { }

    public static getInstance<T extends Singleton>(this: new () => T): T {
        if (!Singleton.instances.has(this)) {
            Singleton.instances.set(this, new this());
        }

        return Singleton.instances.get(this);
    }
}

export default Singleton;