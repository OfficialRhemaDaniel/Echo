// src/api/cloudinary.ts
import axios from "axios";

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME!;
const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET!;

export const uploadToCloudinary = async (
  uri: string,
  onProgress?: (percent: number) => void,
): Promise<string> => {
  const formData = new FormData();
  formData.append("file", {
    uri,
    name: "profile.jpg",
    type: "image/jpeg",
  } as any);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", "profile-pictures");

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (e) => {
        if (onProgress && e.total) {
          onProgress(Math.round((e.loaded / e.total) * 100));
        }
      },
    },
  );

  return data.secure_url as string;
};
