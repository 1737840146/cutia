import { getImageProvider } from "@/lib/ai/providers";
import { useAISettingsStore } from "@/stores/ai-settings-store";

const TURNAROUND_PROMPT_PREFIX =
	"character turnaround sheet, front view, side view, back view, full body, white background, consistent character design";

export function buildTurnaroundPrompt({
	description,
}: {
	description: string;
}): string {
	return `${TURNAROUND_PROMPT_PREFIX}, ${description}`;
}

export async function generateTurnaroundSheet({
	description,
}: {
	description: string;
}): Promise<{ url: string }> {
	const { imageProviderId, imageApiKey } = useAISettingsStore.getState();

	if (!imageProviderId || !imageApiKey) {
		throw new Error(
			"No image AI provider configured. Please set up an image provider and API key in Settings.",
		);
	}

	const provider = getImageProvider({ id: imageProviderId });
	if (!provider) {
		throw new Error(`Image provider '${imageProviderId}' not found`);
	}

	const prompt = buildTurnaroundPrompt({ description });

	const results = await provider.generateImage({
		request: { prompt, aspectRatio: "16:9" },
		apiKey: imageApiKey,
	});

	if (results.length === 0) {
		throw new Error("No images were generated");
	}

	return { url: results[0].url };
}
