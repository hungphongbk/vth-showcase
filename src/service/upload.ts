const generateUrl = (body: string) =>
  `${process.env.NEXT_PUBLIC_UPLOAD_API_URL}${body}?token=${process.env.NEXT_PUBLIC_UPLOAD_API_TOKEN}`;
export const upload = async (file: File): Promise<string> => {
  const form = new FormData();
  form.append("file", file);
  const response = await fetch(generateUrl("/upload"), {
      method: "POST",
      body: form,
    }),
    text = await response.text();

  return generateUrl(JSON.parse(text).path);
};
