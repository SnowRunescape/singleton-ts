import Store from "./stubs/Store";
import User from "./stubs/User";

describe("Singleton", () => {
    test("should return correct attributes from singleton instances", () => {
        expect(User.getInstance().username).toBe("SnowRunescape");
        expect(Store.getInstance().store).toBe("Minecart");
    });

    test("should return an instance of the correct class", () => {
        expect(User.getInstance()).toBeInstanceOf(User);
        expect(Store.getInstance()).toBeInstanceOf(Store);
    });

    test("should ensure only one instance is created for User", () => {
        const user1 = User.getInstance();
        const user2 = User.getInstance();
        expect(user1).toBe(user2);
    });
});