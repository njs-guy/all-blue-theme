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

			// Status bar
			"statusBar.background": editorColors.bgStatusBar,
			"statusBar.foreground": editorColors.fg,
			"statusBar.focusBorder": editorColors.transparent,
			"statusBar.noFolderBackground": editorColors.bgStatusBar,
			"statusBar.noFolderForeground": editorColors.fg,
			"statusBar.debuggingBackground": "#004B80",
			"statusBar.debuggingForeground": editorColors.fgSecondary,
			"statusBarItem.remoteBackground": editorColors.fgDisabled,
			"statusBarItem.remoteForeground": editorColors.fgSecondary,
			"statusBarItem.hoverBackground": editorColors.selectionNormal,
			"statusBarItem.activeBackground": editorColors.selectionBright,
			"statusBarItem.focusBorder": editorColors.transparent,

			// Menu
			"menu.background": editorColors.bgEditor,
			"menu.foreground": editorColors.fg,
			"menu.selectionBackground": editorColors.selectionNormal,
			"menu.selectionForeground": editorColors.fgSecondary,
			"menu.separatorBackground": editorColors.fgDisabled,

			// Title bar
			"titleBar.activeBackground": editorColors.bgSideBar,
			"titleBar.inactiveBackground": editorColors.bgStatusBar,
			"titleBar.activeForeground": editorColors.fg,
			"titleBar.inactiveForeground": editorColors.fgDisabled,

			// Tabs
			"tab.inactiveBackground": editorColors.bgStatusBar,
			"tab.inactiveForeground": editorColors.fgDisabled,
			"tab.activeForeground": editorColors.fgSecondary,
			"tab.activeModifiedBorder": "#0086E6",
			"tab.inactiveModifiedBorder": "#0086E6",

			// Scrollbar slider
			"scrollbarSlider.background":
				editorColors.selectionBright +
				editorColors.selectionTransparency,
			"scrollbarSlider.hoverBackground":
				"#004b80" + editorColors.selectionTransparency,
			"scrollbarSlider.activeBackground":
				editorColors.modifiedGutter +
				editorColors.selectionTransparency,

			// Minimap
			"minimap.warningHighlight": editorColors.warning,
			"minimap.errorHighlight": editorColors.error,
			"minimapGutter.addedBackground": editorColors.added,
			"minimapGutter.deletedBackground": editorColors.deleted,
			"minimapGutter.modifiedBackground": editorColors.modified,

			// Lists
			"list.hoverBackground": editorColors.bgStatusBar,
			"list.dropBackground":
				editorColors.selectionBright +
				editorColors.selectionTransparency,
			"list.inactiveSelectionBackground": editorColors.bgEditor,
			"list.activeSelectionForeground": editorColors.fgSecondary,
			"list.inactiveFocusOutline": editorColors.bgEditor,
			"list.focusOutline": editorColors.bgEditor,
			"list.warningForeground": editorColors.warning,
			"list.errorForeground": editorColors.error,
			"tree.indentGuidesStroke": "#004B80",

			// Git decorations
			"gitDecoration.untrackedResourceForeground": editorColors.added,
			"gitDecoration.modifiedResourceForeground": editorColors.modified,
			"gitDecoration.renamedResourceForeground": editorColors.modified,
			"gitDecoration.deletedResourceForeground": editorColors.deleted,
			"gitDecoration.conflictingResourceForeground": editorColors.deleted,
			"gitDecoration.stageDeletedResourceForeground":
				editorColors.deleted,
			"gitDecoration.ignoredResourceForeground": editorColors.ignored,
			"gitDecoration.addedResourceForeground": editorColors.staged,
			"gitDecoration.stageModifiedResourceForeground":
				editorColors.staged,

			// Settings
			"settings.textInputBackground": editorColors.bgStatusBar,
			"settings.textInputForeground": editorColors.fg,
			"settings.textInputBorder": editorColors.bgCurrentLine,
			"settings.numberInputBackground": editorColors.bgStatusBar,
			"settings.numberInputForeground": editorColors.fg,
			"settings.numberInputBorder": editorColors.bgCurrentLine,
			"settings.checkboxBackground": editorColors.bgStatusBar,
			"settings.checkboxForeground": editorColors.fg,
			"settings.checkboxBorder": editorColors.bgCurrentLine,
			"settings.dropdownBackground": editorColors.bgStatusBar,
			"settings.dropdownForeground": editorColors.fg,
			"settings.dropdownBorder": editorColors.bgCurrentLine,
			"settings.dropdownListBorder": editorColors.bgCurrentLine,
			"settings.sashBorder": editorColors.ignored,
			"settings.headerBorder": editorColors.ignored,
			"settings.headerForeground": editorColors.fgSecondary,
			"settings.modifiedItemIndicator": editorColors.cursor,
			"settings.rowHoverBackground": editorColors.bgSideBar,

			// Text
			"foreground": editorColors.fg,
			"descriptionForeground": editorColors.fg,
			"icon.foreground": editorColors.fg,
			"textBlockQuote.background": editorColors.bgStatusBar,
			"textBlockQuote.border": editorColors.cursor,
			"textCodeBlock.background": editorColors.bgStatusBar,
			"textLink.foreground": editorColors.cursor,
			"textLink.activeForeground": editorColors.linkText,
			"textPreformat.foreground": editorColors.textPreformat,
			"textSeparator.foreground": editorColors.ignored,

			// Extensions
			"extensionIcon.verifiedForeground": editorColors.cursor,
			"extensionButton.background": editorColors.selectionBright,
			"extensionButton.foreground": editorColors.fgSecondary,
			"extensionButton.separator": editorColors.fg,

			// Welcome page and walkthrough
			"welcomePage.tileBackground": editorColors.bgStatusBar,
			"welcomePage.tileHoverBackground": editorColors.selectionNormal,
			"welcomePage.progress.foreground": editorColors.cursor,
			"walkthrough.stepTitle.foreground": editorColors.fg,
			"walkThrough.embeddedEditorBackground": editorColors.bgStatusBar,

			// Command Center
			"commandCenter.foreground": editorColors.fg,
			"commandCenter.background": editorColors.bgStatusBar,
			"commandCenter.inactiveBorder": editorColors.bgCurrentLine,
			"commandCenter.activeBackground": editorColors.selectionNormal,
			"commandCenter.activeBorder": editorColors.selectionNormal,
			"commandCenter.activeForeground": editorColors.linkText,

			// Badges
			"badge.background": editorColors.badges,
			"badge.foreground": "#ffffff",

			// Input
			"input.background": editorColors.bgStatusBar,
			"input.border": editorColors.bgCurrentLine,
			"input.foreground": editorColors.fg,
			"input.placeholderForeground": editorColors.ignored,
			"button.background": editorColors.selectionBright,
			"button.foreground": editorColors.fgSecondary,
			"button.separator": editorColors.fg,
			"dropdown.background": editorColors.bgStatusBar,
			"dropdown.foreground": editorColors.fg,
			"selection.background": editorColors.selectionBright,

			// Quick input
			"quickInput.background": editorColors.bgSideBar,
			"quickInput.foreground": editorColors.fg,
			"quickInputList.focusBackground": editorColors.selectionNormal,
			"quickInputList.focusForeground": editorColors.fgSecondary,
			"quickInputList.focusIconForeground": editorColors.fgSecondary,
			"quickInputTitle.background": editorColors.selectionNormal,

			// Panel
			"panel.border": editorColors.bgCurrentLine,
			"panelTitle.activeForeground": editorColors.fgSecondary,
			"panelTitle.inactiveForeground": editorColors.fg,
			"panelSection.dropBackground":
				editorColors.selectionBright +
				editorColors.selectionTransparency,
			"problemsInfoIcon.foreground": editorColors.info,
			"problemsWarningIcon.foreground": editorColors.warning,
			"problemsErrorIcon.foreground": editorColors.error,

			// Terminal
			"terminal.foreground": editorColors.fg,
			"terminalCursor.foreground": editorColors.cursor,
			"terminal.dropBackground":
				editorColors.selectionBright +
				editorColors.selectionTransparency,

			// Debug tool bar
			"debugToolBar.background": editorColors.selectionDim,
			"debugIcon.stopForeground": editorColors.error,
			"debugIcon.disconnectForeground": editorColors.error,
			"debugIcon.restartForeground": editorColors.modified,
			"debugIcon.pauseForeground": editorColors.fgFourth,
			"debugIcon.continueForeground": editorColors.fgFourth,
			"debugIcon.stepBackForeground": editorColors.fgFourth,
			"debugIcon.stepIntoForeground": editorColors.fgFourth,
			"debugIcon.stepOutForeground": editorColors.fgFourth,
			"debugIcon.stepOverForeground": editorColors.fgFourth,
			"debugIcon.startForeground": editorColors.fgFourth,
			"debugIcon.breakpointForeground": editorColors.fgFourth,
			"debugIcon.breakpointCurrentStackframeForeground":
				editorColors.fgFourth,
			"debugIcon.breakpointStackframeForeground": editorColors.fgFourth,
			"debugIcon.breakpointUnverifiedForeground": editorColors.fgFourth,
			"debugIcon.breakpointDisabledForeground": editorColors.ignored,

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
