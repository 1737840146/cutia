import { useCharacterStore } from "@/stores/character-store";
import type { AgentTool } from "./types";

export const listCharactersTool: AgentTool = {
	name: "list_characters",
	description:
		"List all AI characters in the character library. Returns each character's id, name, description, and number of reference images. Use characterId in generate_image or generate_video to use a character's reference image for consistent visuals.",
	parameters: {
		type: "object",
		properties: {},
		required: [],
	},
	async execute() {
		const characters = useCharacterStore.getState().characters;

		if (characters.length === 0) {
			return {
				success: true,
				message: "No characters in the library yet.",
				data: { characters: [] },
			};
		}

		const characterList = characters.map((character) => ({
			id: character.id,
			name: character.name,
			description: character.description,
			imageCount: character.images.length,
			generationCount: character.generations.length,
		}));

		return {
			success: true,
			message: `Found ${characters.length} character(s) in the library.`,
			data: { characters: characterList },
		};
	},
};

export const characterTools: AgentTool[] = [listCharactersTool];
