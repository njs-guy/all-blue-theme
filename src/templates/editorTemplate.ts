// Template for creating the editor portion of the theme

import { editorTheme } from "../colors";

export function createEditorTemplate() {
	const output = {
		name: "All Blue",
		colors: {
			// Editor
			"editor.background": editorTheme.bgEditor,
			"editor.foreground": editorTheme.fg,
			"editor.lineHighlightBackground": editorTheme.bgLineHighlight,
			"editor.foldBackground": editorTheme.bgEditor,
			"editorCursor.foreground": editorTheme.cursor,
			"editor.selectionBackground": editorTheme.selectionBright,
			"editor.selectionHighlightBorder":
				editorTheme.selectionHighlightBorder,
			"editor.wordHighlightBackground": editorTheme.selectionHighlight,
			"editor.wordHighlightBorder": editorTheme.selectionHighlightBorder,
			"editor.wordHighlightStrongBackground":
				editorTheme.selectionHighlight,
			"editor.wordHighlightStrongBorder":
				editorTheme.selectionHighlightStrongBorder,
			"editor.findMatchBackground": editorTheme.selectionHighlight,
			"editor.findMatchBorder": editorTheme.selectionHighlightBorder,
			"editor.findMatchHighlightBackground":
				editorTheme.selectionHighlight,
			"editor.hoverHighlightBackground": editorTheme.selectionDim,
			"editorLink.activeForeground": editorTheme.linkEditor,
			"editor.rangeHighlightBackground": editorTheme.selectionHighlight,
			"editorGroup.dropBackground":
				editorTheme.selectionBright + editorTheme.selectionTransparency,
			"editorGroupHeader.tabsBackground": editorTheme.bgSideBar,
			"editorInfo.foreground": editorTheme.info,
			"editorWarning.foreground": editorTheme.warning,
			"editorError.foreground": editorTheme.error,
		},
	};

	return output;
}
