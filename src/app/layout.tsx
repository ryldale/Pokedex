import { MUITheme } from "@/core/providers/ThemeProvider";
import { CssBaseline } from "@mui/material";
import '../core/styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <MUITheme>{children}</MUITheme>
      </body>
    </html>
  );
}
