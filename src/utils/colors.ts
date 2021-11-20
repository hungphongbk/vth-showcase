export const usingContextualColor = (status: string): string => {
  return (
    {
      IDEA: "red.main",
      SHOWCASE: "yellow.main",
      COMING: "green.main",
    } as Record<string, string>
  )[status]!;
};
