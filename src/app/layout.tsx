import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToDo App",
  description: "Todo App created by Khushboo Bajaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
