import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  signup,
  verifyEmail as verifyEmailRequest,
  sendOtp,
} from "../api/auth";
import api from "../api/axios";

interface OnboardingData {
  userId: string | null;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  isEmailVerified: boolean;
  profilePicture: string | null;
}

interface OnboardingContextType {
  data: OnboardingData;
  setNameInfo: (firstName: string, lastName: string) => void;
  createAccount: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  resendOtp: () => Promise<void>;
  verifyEmail: (otp: string) => Promise<void>;
  setProfilePicture: (uri: string | null) => Promise<void>;
  reset: () => void;
}

const initialState: OnboardingData = {
  userId: null,
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  isEmailVerified: false,
  profilePicture: null,
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined,
);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<OnboardingData>(initialState);

  const setNameInfo = (firstName: string, lastName: string) => {
    setData((prev) => ({ ...prev, firstName, lastName }));
  };

  const createAccount = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const user = await signup({
      firstName: data.firstName,
      lastName: data.lastName,
      username,
      email,
      password,
    });

    await sendOtp(user.id);

    setData((prev) => ({
      ...prev,
      userId: user.id,
      username,
      email,
      password,
      isEmailVerified: false,
    }));
  };

  const resendOtp = async () => {
    if (!data.userId) return;
    await sendOtp(data.userId);
  };

  const verifyEmail = async (otp: string) => {
    if (!data.email) return;
    await verifyEmailRequest(data.email, otp);
    setData((prev) => ({ ...prev, isEmailVerified: true }));
  };

  const setProfilePicture = async (uri: string | null) => {
    if (!uri) {
      setData((prev) => ({ ...prev, profilePicture: null }));
      return;
    }

    const formData = new FormData();
    formData.append("profilePicture", {
      uri,
      name: "profile.jpg",
      type: "image/jpeg",
    } as any);

    await api.patch("/users/profile-picture", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setData((prev) => ({ ...prev, profilePicture: uri }));
  };

  const reset = () => setData(initialState);

  return (
    <OnboardingContext.Provider
      value={{
        data,
        setNameInfo,
        createAccount,
        resendOtp,
        verifyEmail,
        setProfilePicture,
        reset,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx)
    throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
};
