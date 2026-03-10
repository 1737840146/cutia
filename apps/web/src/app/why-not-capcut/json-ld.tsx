"use client";

import { SITE_URL } from "@/constants/site-constants";
import { useComparisonFaqItems } from "./comparison-faq";

export function ComparisonJsonLd() {
	const faqItems = useComparisonFaqItems();

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "Why Not CapCut? Cutia vs CapCut — Side-by-Side Comparison",
		description:
			"Compare Cutia and CapCut side by side. Cutia is a free, open-source, privacy-first browser video editor — no uploads, no account, no watermarks.",
		url: `${SITE_URL}/why-not-capcut`,
		author: {
			"@type": "Organization",
			name: "Cutia",
			url: SITE_URL,
		},
		publisher: {
			"@type": "Organization",
			name: "Cutia",
			url: SITE_URL,
			logo: {
				"@type": "ImageObject",
				url: `${SITE_URL}/logos/cutia/svg/logo.svg`,
			},
		},
		datePublished: "2026-03-10",
		dateModified: new Date().toISOString().split("T")[0],
		mainEntityOfPage: `${SITE_URL}/why-not-capcut`,
	};

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqItems.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};

	const comparisonSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Cutia vs CapCut Comparison",
		description:
			"Side-by-side feature comparison between Cutia and CapCut video editors",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				item: {
					"@type": "SoftwareApplication",
					name: "Cutia",
					applicationCategory: "MultimediaApplication",
					operatingSystem: "Any (Browser-based)",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
					},
					description:
						"AI-native, open-source, privacy-first video editor that runs in your browser",
				},
			},
			{
				"@type": "ListItem",
				position: 2,
				item: {
					"@type": "SoftwareApplication",
					name: "CapCut",
					applicationCategory: "MultimediaApplication",
					description: "Popular video editor by ByteDance",
				},
			},
		],
	};

	return (
		<>
			<script type="application/ld+json">
				{JSON.stringify(articleSchema)}
			</script>
			<script type="application/ld+json">
				{JSON.stringify(faqSchema)}
			</script>
			<script type="application/ld+json">
				{JSON.stringify(comparisonSchema)}
			</script>
		</>
	);
}
