import api from "./axios";

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SafeUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  isEmailVerified: boolean;
  profilePicture: string | null;
}

export interface LoginResponse {
  user: SafeUser;
  accessToken: string;
}

export const signup = async (payload: SignUpPayload): Promise<SafeUser> => {
  const { data } = await api.post<SafeUser>("/users/signUp", payload);
  return data;
};

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("/users/login", payload);
  return data;
};

export const sendOtp = async (userId: string) => {
  const { data } = await api.post("/users/send-otp", { userId });
  return data;
};

export const verifyEmail = async (email: string, otp: string) => {
  const { data } = await api.post("/users/verify-email", { email, otp });
  return data;
};
