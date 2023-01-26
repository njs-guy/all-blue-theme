// Takes templates from syntaxTemplate and editorTemplate
// and combines them into one template.

import { createEditorTemplate } from "./editorTemplate";
import { createSyntaxTemplate, Themes } from "./syntaxTemplate";

export function createFullTemplate() {
	const editor = createEditorTemplate();
	const syntax = createSyntaxTemplate(Themes.Waves);

	// Combines two JSON files into one.
	// This is mainly to keep the code a little nicer.
	const full = { ...editor, ...syntax };

	return JSON.stringify(full);
}
