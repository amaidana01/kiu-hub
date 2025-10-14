import "../styles/globals.css";

export const metadata = {
  title: "KIU Hub",
  description: "Interactive KIU Hub profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
