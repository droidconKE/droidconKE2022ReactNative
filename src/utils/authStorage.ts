import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../types/Users";

interface UserState {
    user: User | null | undefined;
    token: string | null | undefined;
}

class AuthStorage {
    namespace: string;

    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getUser() {
        // Get user from storage.
        const savedUser = await AsyncStorage.getItem(`${this.namespace}:userstate`);
        return savedUser ? JSON.parse(savedUser): { user: null, token: null };
    }

    async setUser(newUser: UserState) {
        // Add user to storage.
        await AsyncStorage.setItem(
            `${this.namespace}:userstate`,
            JSON.stringify(newUser),
        )
    }

   async removeUser() {
        // Remove User object from storage.
        await AsyncStorage.removeItem(`${this.namespace}:userstate`);
   }
}

export default AuthStorage