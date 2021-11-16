export const usingContextualColor = (status: string): string => {
  return (
    {
      idea: "red.main",
      showcase: "yellow.main",
      "coming soon": "green.main",
    } as Record<string, string>
  )[status]!;
};
