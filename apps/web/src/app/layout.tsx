import { ThemeProvider } from "next-themes";
import Script from "next/script";

import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import { I18nProvider } from "../components/providers/i18n-provider";
import { baseMetaData } from "./metadata";
import { BotIdClient } from "botid/client";
import { Inter } from "next/font/google";

const siteFont = Inter({ subsets: ["latin"] });

export const metadata = baseMetaData;

const protectedRoutes = [
	{
		path: "/none",
		method: "GET",
	},
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<BotIdClient protect={protectedRoutes} />
				<Script
					src="https://app.tianji.dev/tracker.js"
					data-website-id="cmm637ekbb51pbiglgy2s7n6k"
				/>
			</head>
			<body className={`${siteFont.className} font-sans antialiased`}>
				<I18nProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						disableTransitionOnChange={true}
					>
						<TooltipProvider>
							<Toaster />
							{children}
						</TooltipProvider>
					</ThemeProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
