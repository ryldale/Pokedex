import { MUITheme } from "@/core/providers/ThemeProvider";
import { CssBaseline } from "@mui/material";
import "../core/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url('/img/Background.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          margin: 0,
          height: "100vh",
          padding: "40px 32px 24px 32px",
        }}
      >
        <CssBaseline />
        <MUITheme>{children}</MUITheme>
      </body>
    </html>
  );
}
