// Template for creating the editor portion of the theme

import { Themes, calmColors, allBlueColors, editorColors } from "../colors";
import { checkTheme } from "./checkTheme";

export function createEditorTemplate(theme: Themes) {
	const syntax = checkTheme(theme);

	const output = {
		name: "All Blue",
		colors: {
			// Editor
			"editor.background": editorColors.bgEditor,
			"editor.foreground": editorColors.fg,
			"editor.lineHighlightBackground": editorColors.bgCurrentLine,
			"editor.foldBackground": editorColors.bgEditor,
			"editorCursor.foreground": editorColors.cursor,
			"editor.selectionBackground": editorColors.selectionBright,
			"editor.selectionHighlightBorder":
				editorColors.selectionHighlightBorder,
			"editor.wordHighlightBackground": editorColors.selectionHighlight,
			"editor.wordHighlightBorder": editorColors.selectionHighlightBorder,
			"editor.wordHighlightStrongBackground":
				editorColors.selectionHighlight,
			"editor.wordHighlightStrongBorder":
				editorColors.selectionHighlightStrongBorder,
			"editor.findMatchBackground": editorColors.selectionHighlight,
			"editor.findMatchBorder": editorColors.selectionHighlightBorder,
			"editor.findMatchHighlightBackground":
				editorColors.selectionHighlight,
			"editor.hoverHighlightBackground": editorColors.selectionDim,
			"editorLink.activeForeground": editorColors.linkEditor,
			"editor.rangeHighlightBackground": editorColors.selectionHighlight,
			"editorGroup.dropBackground":
				editorColors.selectionBright +
				editorColors.selectionTransparency,
			"editorGroupHeader.tabsBackground": editorColors.bgSideBar,
			"editorInfo.foreground": editorColors.info,
			"editorWarning.foreground": editorColors.warning,
			"editorError.foreground": editorColors.error,

			// Gutter
			"editorLineNumber.activeForeground": "#D8DEE9",
			"editorLineNumber.foreground": editorColors.fgDisabled,
			"editorLightBulb.foreground": editorColors.lightbulb,
			"editorGutter.modifiedBackground": editorColors.modifiedGutter,
			"editorGutter.addedBackground": editorColors.modified,
			"editorGutter.deletedBackground": editorColors.deleted,
			"editorGutter.commentRangeForeground": editorColors.ignored,

			// Indents and whitespace
			"editorIndentGuide.background": editorColors.selectionNormal,
			"editorIndentGuide.activeBackground": editorColors.fg,
			"editorWhitespace.foreground": editorColors.ignored,

			// Hover widget
			"editorHoverWidget.background": editorColors.bgStatusBar,
			"editorHoverWidget.border": editorColors.bgEditor,
			"editorHoverWidget.foreground": editorColors.fgTertiary,

			// Editor widget
			"editorWidget.background": editorColors.bgStatusBar,
			"editorWidget.foreground": editorColors.fg,
			"editorWidget.resizeBorder": editorColors.cursor,

			// Inlay hints
			"editorInlayHint.background": editorColors.bgStatusBar,
			"editorInlayHint.foreground": editorColors.fgSecondary,
			"editorInlayHint.typeForeground": editorColors.fgTertiary,
			"editorInlayHint.parameterForeground": allBlueColors.tag,

			// Bracket highlight
			"editorBracketHighlight.foreground1": syntax.bracket1,
			"editorBracketHighlight.foreground2": syntax.bracket2,
			"editorBracketHighlight.foreground3": syntax.bracket3,
			"editorBracketHighlight.foreground4": syntax.bracket4,
			"editorBracketHighlight.foreground5": syntax.bracket5,
			"editorBracketHighlight.foreground6": syntax.bracket6,
			"editorBracketHighlight.unexpectedBracket.foreground":
				editorColors.error,
			"editorBracketMatch.background": editorColors.selectionHighlight,
			"editorBracketMatch.border": syntax.operator,
		},
	};

	return output;
}
