declare module "singleton-ts" {
    export class Singleton {
        protected constructor();

        public static getInstance<T extends Singleton>(this: new () => T): T;
    }
}