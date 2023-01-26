// Takes templates from syntaxTemplate and editorTemplate
// and combines them into one template.

import { createEditorTemplate } from "./editorTemplate";

export function createFullTemplate() {
	const output = createEditorTemplate();

	return output;
}
