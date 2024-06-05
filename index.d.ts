declare module "singleton-ts" {
    export default class Singleton {
        private static instances: Map<any, any>;

        protected constructor();

        public static getInstance<T extends Singleton>(this: new () => T): T;
    }
}