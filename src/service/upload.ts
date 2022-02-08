import { UploadServiceGenerator } from "@hungphongbk/vth-sdk";

export const upload = UploadServiceGenerator({
  uploadHost: process.env.NEXT_PUBLIC_UPLOAD_API_URL as string,
  token: process.env.NEXT_PUBLIC_UPLOAD_API_TOKEN as string,
});
