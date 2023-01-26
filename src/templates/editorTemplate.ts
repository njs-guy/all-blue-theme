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
			"editor.foldBackground": "#002540",
			"editorCursor.foreground": "#0094FF",
			"editor.selectionBackground": "#003A63",
			"editor.selectionHighlightBorder": "#00CCFF",
			"editor.wordHighlightBackground": "#004170",
			"editor.wordHighlightBorder": "#00CCFF",
			"editor.wordHighlightStrongBackground": "#004170",
			"editor.wordHighlightStrongBorder": "#4F86F7",
			"editor.findMatchBackground": "#004170",
			"editor.findMatchBorder": "#00CCFF",
			"editor.findMatchHighlightBackground": "#004170",
			"editor.hoverHighlightBackground": "#002E4F",
			"editorLink.activeForeground": "#0892D0",
			"editor.rangeHighlightBackground": "#004170",
			"editorGroup.dropBackground": "#003a638e",
			"editorGroupHeader.tabsBackground": "#002138",
			"editorInfo.foreground": "#0086E6",
			"editorWarning.foreground": "#FFAC40",
			"editorError.foreground": "#FF7566",
		},
	};

	return output;
}
