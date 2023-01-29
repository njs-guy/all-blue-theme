// Takes templates from syntaxTemplate and editorTemplate,
// combines them into one template,
// and then returns it as a JSON string.

import { Themes } from "../colors";
import { createEditorTemplate } from "./editorTemplate";
import { createSyntaxTemplate } from "./syntaxTemplate";

export function createFullTemplate(theme: Themes) {
	const editor = createEditorTemplate(theme);
	const syntax = createSyntaxTemplate(theme);

	// Combines two JSON files into one.
	// This is mainly to keep the code a little nicer.
	const full = { ...editor, ...syntax };

	return JSON.stringify(full);
}
