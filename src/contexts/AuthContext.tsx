import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/axios";

interface User {
  id: string;
  username: string;
  email: string;
  profilePictureUrl: string | null;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (userData: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      const storedUser = await AsyncStorage.getItem("user");
      if (token && storedUser) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    })();
  }, []);

  const login = async (userData: User, token: string) => {
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user", JSON.stringify(userData));
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUser(userData);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    delete api.defaults.headers.common.Authorization;
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
