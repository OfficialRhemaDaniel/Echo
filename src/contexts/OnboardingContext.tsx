// OnboardingContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import api from "../api/axios"; // your configured axios instance

interface OnboardingData {
  username: string;
  email: string;
  password: string;
  emailVerified: boolean;
  profilePicture: string | null; // local uri before upload
}

interface OnboardingContextType {
  data: OnboardingData;
  setSignupInfo: (username: string, email: string, password: string) => void;
  sendVerificationEmail: (email: string) => Promise<void>;
  markEmailVerified: () => void;
  setProfilePicture: (uri: string | null) => void;
  submitOnboarding: () => Promise<any>; // returns backend user response
  reset: () => void;
}

const initialState: OnboardingData = {
  username: "",
  email: "",
  password: "",
  emailVerified: false,
  profilePicture: null,
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined,
);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<OnboardingData>(initialState);

  const setSignupInfo = (username: string, email: string, password: string) => {
    setData((prev) => ({ ...prev, username, email, password }));
  };

  const sendVerificationEmail = async (email: string) => {
    await api.post("/auth/send-verification", { email });
    setData((prev) => ({ ...prev, email }));
  };

  const markEmailVerified = () => {
    setData((prev) => ({ ...prev, emailVerified: true }));
  };

  const setProfilePicture = (uri: string | null) => {
    setData((prev) => ({ ...prev, profilePicture: uri }));
  };

  const submitOnboarding = async () => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (data.profilePicture) {
      formData.append("profilePicture", {
        uri: data.profilePicture,
        name: "profile.jpg",
        type: "image/jpeg",
      } as any);
    }

    const res = await api.post("/auth/complete-signup", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data; // pass this into AuthContext.login()
  };

  const reset = () => setData(initialState);

  return (
    <OnboardingContext.Provider
      value={{
        data,
        setSignupInfo,
        sendVerificationEmail,
        markEmailVerified,
        setProfilePicture,
        submitOnboarding,
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
