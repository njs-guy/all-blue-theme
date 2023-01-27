// Template for creating the editor portion of the theme

import { Themes, editorTheme } from "../colors";
import { checkTheme } from "./checkTheme";

export function createEditorTemplate(theme: Themes) {
	const syntax = checkTheme(theme);

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

			// Bracket highlight
			"editorBracketHighlight.foreground1": syntax.bracket1,
			"editorBracketHighlight.foreground2": syntax.bracket2,
			"editorBracketHighlight.foreground3": syntax.bracket3,
			"editorBracketHighlight.foreground4": syntax.bracket4,
			"editorBracketHighlight.foreground5": syntax.bracket5,
			"editorBracketHighlight.foreground6": syntax.bracket6,
			"editorBracketHighlight.unexpectedBracket.foreground":
				editorTheme.error,
			"editorBracketMatch.background": editorTheme.selectionHighlight,
			"editorBracketMatch.border": syntax.operator,
		},
	};

	return output;
}
