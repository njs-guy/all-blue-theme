// Template for creating the syntax highlighting portion of the theme

import {
	SyntaxColors,
	allBlueColors,
	calmColors,
	wavesColors,
} from "../colors";

export enum Themes {
	AllBlue,
	Waves,
	Calm,
}

export function createSyntaxTemplate(theme: Themes) {
	let colors: SyntaxColors;

	switch (theme) {
		case Themes.AllBlue:
			colors = allBlueColors;
			break;
		case Themes.Calm:
			colors = calmColors;
			break;
		case Themes.Waves:
			colors = wavesColors;
			break;
		default:
			console.error("ERROR: Theme does not exist. Using default colors.");
			colors = allBlueColors;
			break;
	}

	const output = {
		tokenColors: [
			// Comments
			{
				name: "Comment",
				scope: ["comment", "punctuation.definition.comment"],
				settings: {
					fontStyle: "italic",
					foreground: colors.comment,
				},
			},

			// Operator, Units
			{
				name: "Operator, Misc",
				scope: [
					"keyword.control",
					"constant.other.color",
					"meta.tag",
					"punctuation.definition.tag",
					"punctuation.separator.inheritance.php",
					"punctuation.definition.tag.html",
					"punctuation.definition.tag.begin.html",
					"punctuation.definition.tag.end.html",
					"punctuation.section.embedded",
					"keyword.other.template",
					"keyword.other.substitution",
					"keyword.other.fn.rust",
				],
				settings: {
					foreground: colors.operator,
				},
			},
			{
				name: "Keyword, Storage",
				scope: ["keyword", "storage.type", "storage.modifier"],
				settings: {
					foreground: colors.operator,
				},
			},
			{
				name: "Unit",
				scope: "keyword.other.unit",
				settings: {
					foreground: colors.operator,
				},
			},

			// Variables
			{
				name: "Variables",
				scope: ["variable", "string constant.other.placeholder"],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "Block Level Variables",
				scope: ["meta.block variable.other"],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "Function Argument, Other Variable, String Link",
				scope: [
					"variable.parameter",
					"support.other.variable",
					"string.other.link",
					"meta.attribute.python",
				],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "CSS ID's",
				scope: [
					"entity.other.attribute-name.id.css",
					"source.sass keyword.control",
				],
				settings: {
					foreground: colors.variable,
				},
			},
		],
	};

	return output;
}
