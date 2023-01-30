// Template for creating the editor portion of the theme

import { Themes, editorColors as eC } from "../colors";
import { checkTheme } from "./checkTheme";

export function createEditorTemplate(theme: Themes) {
	const syntax = checkTheme(theme);

	const output = {
		name: "All Blue",
		colors: {
			// Editor
			"editor.background": eC.bgEditor,
			"editor.foreground": eC.fg,
			"editor.lineHighlightBackground": eC.bgCurrentLine,
			"editor.foldBackground": eC.bgEditor,
			"editorCursor.foreground": eC.cursor,
			"editor.selectionBackground": eC.selectionBright,
			"editor.wordHighlightBackground": eC.selectionHighlight,
			"editor.wordHighlightStrongBackground": eC.selectionHighlight,
			"editor.wordHighlightStrongBorder":
				eC.selectionHighlightStrongBorder,
			"editor.findMatchBackground": eC.selectionHighlight,
			"editor.findMatchBorder": eC.selectionHighlightBorder,
			"editor.findMatchHighlightBackground": eC.selectionHighlight,
			"editor.hoverHighlightBackground": eC.selectionHighlight,
			"editorLink.activeForeground": eC.linkEditor,
			"editor.rangeHighlightBackground": eC.selectionHighlight,
			"editorGroup.dropBackground":
				eC.selectionBright + eC.selectionTransparency,
			"editorGroupHeader.tabsBackground": eC.bgSideBar,
			"editorInfo.foreground": eC.info,
			"editorWarning.foreground": eC.warning,
			"editorError.foreground": eC.error,

			// Gutter
			"editorLineNumber.activeForeground": eC.lineNumberActiveFg,
			"editorLineNumber.foreground": eC.fgDisabled,
			"editorLightBulb.foreground": eC.lightbulb,
			"editorGutter.modifiedBackground": eC.modifiedGutter,
			"editorGutter.addedBackground": eC.addedGutter,
			"editorGutter.deletedBackground": eC.deletedGutter,
			"editorGutter.commentRangeForeground": eC.ignored,

			// Indents and whitespace
			"editorIndentGuide.background": eC.selectionNormal,
			"editorIndentGuide.activeBackground": eC.fg,
			"editorWhitespace.foreground": eC.ignored,

			// Hover widget
			"editorHoverWidget.background": eC.bgStatusBar,
			"editorHoverWidget.border": eC.bgEditor,
			"editorHoverWidget.foreground": eC.fgFourth,

			// Editor widget
			"editorWidget.background": eC.bgStatusBar,
			"editorWidget.foreground": eC.fg,
			"editorWidget.resizeBorder": eC.cursor,

			// Inlay hints
			"editorInlayHint.background": eC.bgStatusBar,
			"editorInlayHint.foreground": eC.fgSecondary,
			"editorInlayHint.typeForeground": eC.fgFourth,
			"editorInlayHint.parameterForeground": eC.inlayHintParameterFg,

			// Breadcrumbs
			"breadcrumb.foreground": eC.fg,
			"breadcrumb.focusForeground": "#ffffff",
			"breadcrumb.activeSelectionForeground": "#ffffff",
			"breadcrumbPicker.background": eC.bgStatusBar,

			// Peek view
			"peekView.border": eC.bgStatusBar,
			"peekViewEditor.background": eC.bgStatusBar,
			"peekViewEditor.matchHighlightBackground": eC.selectionBright,
			"peekViewResult.background": eC.bgSideBar,
			"peekViewResult.fileForeground": eC.fg,
			"peekViewTitle.background": eC.bgEditor,
			"peekViewTitleLabel.foreground": eC.fg,
			"peekViewTitleDescription.foreground": eC.peekPreviewTitle,

			// Side bar
			"sideBarTitle.foreground": eC.fg,
			"sideBar.background": eC.bgSideBar,
			"sideBar.foreground": eC.fg,
			"sideBar.dropBackground":
				eC.selectionBright + eC.selectionTransparency,
			"sideBarSectionHeader.background": eC.bgStatusBar,
			"sash.hoverBorder": eC.cursor,
			"focusBorder": eC.selectionNormal,

			// Activity bar
			"activityBarBadge.background": eC.badges,
			"activityBarBadge.foreground": "#ffffff",
			"activityBar.background": eC.bgSideBar,
			"activityBar.foreground": eC.fg,

			// Status bar
			"statusBar.background": eC.bgStatusBar,
			"statusBar.foreground": eC.fg,
			"statusBar.focusBorder": eC.transparent,
			"statusBar.noFolderBackground": eC.bgStatusBar,
			"statusBar.noFolderForeground": eC.fg,
			"statusBar.debuggingBackground": "#004B80",
			"statusBar.debuggingForeground": eC.fgSecondary,
			"statusBarItem.remoteBackground": eC.fgDisabled,
			"statusBarItem.remoteForeground": eC.fgSecondary,
			"statusBarItem.hoverBackground": eC.selectionNormal,
			"statusBarItem.activeBackground": eC.selectionBright,
			"statusBarItem.focusBorder": eC.transparent,

			// Menu
			"menu.background": eC.bgEditor,
			"menu.foreground": eC.fg,
			"menu.selectionBackground": eC.selectionNormal,
			"menu.selectionForeground": eC.fgSecondary,
			"menu.separatorBackground": eC.fgDisabled,

			// Title bar
			"titleBar.activeBackground": eC.bgSideBar,
			"titleBar.inactiveBackground": eC.bgStatusBar,
			"titleBar.activeForeground": eC.fg,
			"titleBar.inactiveForeground": eC.fgDisabled,

			// Tabs
			"tab.inactiveBackground": eC.bgStatusBar,
			"tab.inactiveForeground": eC.fgDisabled,
			"tab.activeForeground": eC.fgSecondary,
			"tab.activeModifiedBorder": "#0086E6",
			"tab.inactiveModifiedBorder": "#0086E6",

			// Scrollbar slider
			"scrollbarSlider.background":
				eC.selectionBright + eC.selectionTransparency,
			"scrollbarSlider.hoverBackground":
				"#004b80" + eC.selectionTransparency,
			"scrollbarSlider.activeBackground":
				eC.modifiedGutter + eC.selectionTransparency,

			// Minimap
			"minimap.warningHighlight": eC.warning,
			"minimap.errorHighlight": eC.error,
			"minimapGutter.addedBackground": eC.addedGutter,
			"minimapGutter.deletedBackground": eC.deletedGutter,
			"minimapGutter.modifiedBackground": eC.modifiedGutter,

			// Lists
			"list.hoverBackground": eC.bgStatusBar,
			"list.dropBackground":
				eC.selectionBright + eC.selectionTransparency,
			"list.inactiveSelectionBackground": eC.bgEditor,
			"list.activeSelectionForeground": eC.fgSecondary,
			"list.inactiveFocusOutline": eC.bgEditor,
			"list.focusOutline": eC.bgEditor,
			"list.warningForeground": eC.warning,
			"list.errorForeground": eC.error,
			"tree.indentGuidesStroke": "#004B80",

			// Git decorations
			"gitDecoration.untrackedResourceForeground": eC.added,
			"gitDecoration.modifiedResourceForeground": eC.modified,
			"gitDecoration.renamedResourceForeground": eC.modified,
			"gitDecoration.deletedResourceForeground": eC.deleted,
			"gitDecoration.conflictingResourceForeground": eC.deleted,
			"gitDecoration.stageDeletedResourceForeground": eC.deleted,
			"gitDecoration.ignoredResourceForeground": eC.ignored,
			"gitDecoration.addedResourceForeground": eC.staged,
			"gitDecoration.stageModifiedResourceForeground": eC.staged,

			// Settings
			"settings.textInputBackground": eC.bgStatusBar,
			"settings.textInputForeground": eC.fg,
			"settings.textInputBorder": eC.bgCurrentLine,
			"settings.numberInputBackground": eC.bgStatusBar,
			"settings.numberInputForeground": eC.fg,
			"settings.numberInputBorder": eC.bgCurrentLine,
			"settings.checkboxBackground": eC.bgStatusBar,
			"settings.checkboxForeground": eC.fg,
			"settings.checkboxBorder": eC.bgCurrentLine,
			"settings.dropdownBackground": eC.bgStatusBar,
			"settings.dropdownForeground": eC.fg,
			"settings.dropdownBorder": eC.bgCurrentLine,
			"settings.dropdownListBorder": eC.bgCurrentLine,
			"settings.sashBorder": eC.ignored,
			"settings.headerBorder": eC.ignored,
			"settings.headerForeground": eC.fgSecondary,
			"settings.modifiedItemIndicator": eC.cursor,
			"settings.rowHoverBackground": eC.bgSideBar,

			// Text
			"foreground": eC.fg,
			"descriptionForeground": eC.fg,
			"icon.foreground": eC.fg,
			"textBlockQuote.background": eC.bgStatusBar,
			"textBlockQuote.border": eC.cursor,
			"textCodeBlock.background": eC.bgStatusBar,
			"textLink.foreground": eC.cursor,
			"textLink.activeForeground": eC.linkText,
			"textPreformat.foreground": eC.textPreformat,
			"textSeparator.foreground": eC.ignored,

			// Extensions
			"extensionIcon.verifiedForeground": eC.cursor,
			"extensionButton.background": eC.selectionBright,
			"extensionButton.foreground": eC.fgSecondary,
			"extensionButton.separator": eC.fg,

			// Welcome page and walkthrough
			"welcomePage.tileBackground": eC.bgStatusBar,
			"welcomePage.tileHoverBackground": eC.selectionNormal,
			"welcomePage.progress.foreground": eC.cursor,
			"walkthrough.stepTitle.foreground": eC.fg,
			"walkThrough.embeddedEditorBackground": eC.bgStatusBar,

			// Command Center
			"commandCenter.foreground": eC.fg,
			"commandCenter.background": eC.bgStatusBar,
			"commandCenter.inactiveBorder": eC.bgCurrentLine,
			"commandCenter.activeBackground": eC.selectionNormal,
			"commandCenter.activeBorder": eC.selectionNormal,
			"commandCenter.activeForeground": eC.linkText,

			// Badges
			"badge.background": eC.badges,
			"badge.foreground": "#ffffff",

			// Input
			"input.background": eC.bgStatusBar,
			"input.border": eC.bgCurrentLine,
			"input.foreground": eC.fg,
			"input.placeholderForeground": eC.ignored,
			"button.background": eC.selectionBright,
			"button.foreground": eC.fgSecondary,
			"button.separator": eC.fg,
			"dropdown.background": eC.bgStatusBar,
			"dropdown.foreground": eC.fg,
			"selection.background": eC.selectionBright,

			// Quick input
			"quickInput.background": eC.bgSideBar,
			"quickInput.foreground": eC.fg,
			"quickInputList.focusBackground": eC.selectionNormal,
			"quickInputList.focusForeground": eC.fgSecondary,
			"quickInputList.focusIconForeground": eC.fgSecondary,
			"quickInputTitle.background": eC.selectionNormal,

			// Panel
			"panel.border": eC.bgCurrentLine,
			"panelTitle.activeForeground": eC.fgSecondary,
			"panelTitle.inactiveForeground": eC.fg,
			"panelSection.dropBackground":
				eC.selectionBright + eC.selectionTransparency,
			"problemsInfoIcon.foreground": eC.info,
			"problemsWarningIcon.foreground": eC.warning,
			"problemsErrorIcon.foreground": eC.error,

			// Terminal
			"terminal.foreground": eC.fg,
			"terminalCursor.foreground": eC.cursor,
			"terminal.dropBackground":
				eC.selectionBright + eC.selectionTransparency,

			// Debug tool bar
			"debugToolBar.background": eC.selectionDim,
			"debugIcon.stopForeground": eC.error,
			"debugIcon.disconnectForeground": eC.error,
			"debugIcon.restartForeground": eC.added,
			"debugIcon.pauseForeground": eC.fgFourth,
			"debugIcon.continueForeground": eC.fgFourth,
			"debugIcon.stepBackForeground": eC.fgFourth,
			"debugIcon.stepIntoForeground": eC.fgFourth,
			"debugIcon.stepOutForeground": eC.fgFourth,
			"debugIcon.stepOverForeground": eC.fgFourth,
			"debugIcon.startForeground": eC.fgFourth,
			"debugIcon.breakpointForeground": eC.fgFourth,
			"debugIcon.breakpointCurrentStackframeForeground": eC.fgFourth,
			"debugIcon.breakpointStackframeForeground": eC.fgFourth,
			"debugIcon.breakpointUnverifiedForeground": eC.fgFourth,
			"debugIcon.breakpointDisabledForeground": eC.ignored,

			// Bracket highlight
			"editorBracketHighlight.foreground1": syntax.bracket1,
			"editorBracketHighlight.foreground2": syntax.bracket2,
			"editorBracketHighlight.foreground3": syntax.bracket3,
			"editorBracketHighlight.foreground4": syntax.bracket4,
			"editorBracketHighlight.foreground5": syntax.bracket5,
			"editorBracketHighlight.foreground6": syntax.bracket6,
			"editorBracketHighlight.unexpectedBracket.foreground": eC.error,
			"editorBracketMatch.background": eC.selectionHighlight,
			"editorBracketMatch.border": eC.transparent,
		},
	};

	return output;
}
