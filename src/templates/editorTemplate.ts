// Template for creating the editor portion of the theme

import { Themes, editorColors } from "../colors";
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
			"editorLineNumber.activeForeground":
				editorColors.lineNumberActiveFg,
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
			"editorHoverWidget.foreground": editorColors.fgFourth,

			// Editor widget
			"editorWidget.background": editorColors.bgStatusBar,
			"editorWidget.foreground": editorColors.fg,
			"editorWidget.resizeBorder": editorColors.cursor,

			// Inlay hints
			"editorInlayHint.background": editorColors.bgStatusBar,
			"editorInlayHint.foreground": editorColors.fgSecondary,
			"editorInlayHint.typeForeground": editorColors.fgFourth,
			"editorInlayHint.parameterForeground":
				editorColors.inlayHintParameterFg,

			// Breadcrumbs
			"breadcrumb.foreground": editorColors.fg,
			"breadcrumb.activeSelectionForeground": editorColors.fgSecondary,
			"breadcrumb.focusForeground": editorColors.fgTertiary,
			"breadcrumbPicker.background": editorColors.bgStatusBar,

			// Peek view
			"peekView.border": editorColors.bgStatusBar,
			"peekViewEditor.background": editorColors.bgStatusBar,
			"peekViewEditor.matchHighlightBackground":
				editorColors.selectionBright,
			"peekViewResult.background": editorColors.bgSideBar,
			"peekViewResult.fileForeground": editorColors.fg,
			"peekViewTitle.background": editorColors.bgEditor,
			"peekViewTitleLabel.foreground": editorColors.fg,
			"peekViewTitleDescription.foreground":
				editorColors.peekPreviewTitle,

			// Side bar
			"sideBarTitle.foreground": editorColors.fg,
			"sideBar.background": editorColors.bgSideBar,
			"sideBar.foreground": editorColors.fg,
			"sideBar.dropBackground":
				editorColors.selectionBright +
				editorColors.selectionTransparency,
			"sideBarSectionHeader.background": editorColors.bgStatusBar,
			"sash.hoverBorder": editorColors.cursor,
			"focusBorder": editorColors.selectionNormal,

			// Activity bar
			"activityBarBadge.background": editorColors.badges,
			"activityBarBadge.foreground": "#ffffff",
			"activityBar.background": editorColors.bgSideBar,
			"activityBar.foreground": editorColors.fg,

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
