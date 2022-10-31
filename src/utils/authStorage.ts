import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../types/Users";

class AuthStorage {
    namespace: string;

    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getUser() {
        // Get user from storage.
        const savedUser = await AsyncStorage.getItem(`${this.namespace}:user`);
        return savedUser ? JSON.parse(savedUser): '';
    }

    async setUser(newUser: User) {
        // Add user to storage.
        await AsyncStorage.setItem(
            `${this.namespace}:user`,
            JSON.stringify(newUser),
        )
    }

   async removeUser() {
        // Remove User object from storage.
        await AsyncStorage.removeItem(`${this.namespace}:user`);
   }
}

export default AuthStorage