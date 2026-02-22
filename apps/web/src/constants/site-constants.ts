export const SITE_URL = "https://cutia.app";

export const SITE_INFO = {
	title: "Cutia",
	description:
		"A simple but powerful video editor that gets the job done. In your browser.",
	url: SITE_URL,
	openGraphImage: "/open-graph/default.jpg",
	twitterImage: "/open-graph/default.jpg",
	favicon: "/logos/cutia/svg/logo.svg",
};

export type ExternalTool = {
	name: string;
	description: string;
	url: string;
	icon: React.ElementType;
};

export const EXTERNAL_TOOLS: ExternalTool[] = [];

export const DEFAULT_LOGO_URL = "/logos/cutia/svg/logo.svg";

export const SOCIAL_LINKS = {
	x: "https://x.com/moonrailgun",
	github: "https://github.com/msgbyte/cutia",
	discord: "",
};
