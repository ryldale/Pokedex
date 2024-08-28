"use client";
import { MUITheme } from "@/core/providers/ThemeProvider";
import { CssBaseline } from "@mui/material";
import "../core/styles/globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideNavbar =
    pathname === "/favorites" || pathname.startsWith("/pokemons/");

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
        <MUITheme hideNavbar={hideNavbar }>{children}</MUITheme>
      </body>
    </html>
  );
}
