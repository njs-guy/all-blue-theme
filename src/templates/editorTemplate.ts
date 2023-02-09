// Template for creating the editor portion of the theme

import {
	Themes,
	editorColors as eC,
	terminalColors as terminal,
} from "../colors";
import { checkTheme } from "./checkTheme";

export function createEditorTemplate(theme: Themes) {
	const syntax = checkTheme(theme);

	const output = {
		name: "All Blue",
		colors: {
			// Editor
			"errorForeground": eC.error,
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
			"editorGroup.border": eC.borderDim,
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
			"editorGutter.commentRangeForeground": eC.fgDisabled,

			// Indents and whitespace
			"editorIndentGuide.background": eC.selectionNormal,
			"editorIndentGuide.activeBackground": eC.fg,
			"editorWhitespace.foreground": eC.fgDisabled,

			// Hover widget
			"editorHoverWidget.background": eC.bgSideBar,
			"editorHoverWidget.border": eC.borderDim,
			"editorHoverWidget.foreground": eC.fgFourth,
			"editorHoverWidget.statusBarBackground": eC.bgStatusBar,

			// Editor widget
			"editorWidget.background": eC.bgSideBar,
			"editorWidget.foreground": eC.fg,
			"editorWidget.resizeBorder": eC.borderBright,
			"editorSuggestWidget.foreground": eC.fg,
			"editorSuggestWidget.background": eC.bgStatusBar,
			"editorSuggestWidget.border": eC.borderDim,
			"editorSuggestWidget.selectedBackground": eC.selectionNormal,
			"editorSuggestWidget.selectedForeground": eC.fgTertiary,
			"editorSuggestWidget.highlightForeground": eC.fgFourth,
			"editorSuggestWidget.focusHighlightForeground": eC.fgFourth,
			"editorGhostText.foreground": eC.fgDisabled,

			// Inlay hints
			"editorInlayHint.background": eC.bgSideBar,
			"editorInlayHint.foreground": eC.fgSecondary,
			"editorInlayHint.typeForeground": eC.fgFourth,
			"editorInlayHint.parameterForeground": eC.inlayHintParameterFg,
			"editorCodeLens.foreground": eC.fgDisabled,

			// Breadcrumbs
			"breadcrumb.foreground": eC.fg,
			"breadcrumb.focusForeground": "#ffffff",
			"breadcrumb.activeSelectionForeground": "#ffffff",
			"breadcrumbPicker.background": eC.bgSideBar,

			// Peek view
			"peekView.border": eC.borderDim,
			"peekViewEditor.background": eC.bgSideBar,
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
			"sideBarSectionHeader.background": eC.bgEditor,
			"sash.hoverBorder": eC.borderBright,
			"focusBorder": eC.borderDim,

			// Activity bar
			"activityBarBadge.background": eC.badges,
			"activityBarBadge.foreground": "#ffffff",
			"activityBar.background": eC.bgSideBar,
			"activityBar.foreground": eC.fgFourth,

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
			"menubar.selectionBackground": eC.selectionNormal,
			"menubar.selectionForeground": eC.fgSecondary,
			"menu.background": eC.bgEditor,
			"menu.foreground": eC.fg,
			"menu.selectionBackground": eC.selectionNormal,
			"menu.selectionForeground": eC.fgSecondary,
			"menu.separatorBackground": eC.borderDim,

			// Title bar
			"titleBar.activeBackground": eC.bgSideBar,
			"titleBar.inactiveBackground": eC.bgEditor,
			"titleBar.activeForeground": eC.fg,
			"titleBar.inactiveForeground": eC.fgDisabled,

			// Tabs
			"tab.inactiveBackground": eC.bgSideBar,
			"tab.inactiveForeground": eC.fgDisabled,
			"tab.activeForeground": eC.fgSecondary,
			"tab.border": eC.transparent,
			"tab.activeBorder": eC.fgFourth,
			"tab.activeModifiedBorder": eC.borderBright,
			"tab.inactiveModifiedBorder": eC.borderBright,

			// Scrollbar
			"scrollbarSlider.background":
				eC.selectionBright + eC.selectionTransparency,
			"scrollbarSlider.hoverBackground":
				"#004b80" + eC.selectionTransparency,
			"scrollbarSlider.activeBackground":
				eC.modifiedGutter + eC.selectionTransparency,

			// Editor overview ruler
			"editorOverviewRuler.addedForeground": eC.addedGutter,
			"editorOverviewRuler.modifiedForeground": eC.modifiedGutter,
			"editorOverviewRuler.deletedForeground": eC.deletedGutter,
			"editorOverviewRuler.errorForeground": eC.error,
			"editorOverviewRuler.infoForeground": eC.info,
			"editorOverviewRuler.warningForeground": eC.warning,
			"editorOverviewRuler.bracketMatchForeground": eC.selectionHighlight,
			"editorOverviewRuler.findMatchForeground": eC.selectionHighlight,
			"editorOverviewRuler.rangeHighlightForeground":
				eC.selectionHighlight,
			"editorOverviewRuler.selectionHighlightForeground":
				eC.selectionHighlight,
			"editorOverviewRuler.wordHighlightForeground":
				eC.selectionHighlight,
			"editorOverviewRuler.wordHighlightStrongForeground":
				eC.selectionHighlightStrongBorder,
			"editorOverviewRuler.border": eC.transparent,

			// Minimap
			"minimap.warningHighlight": eC.warning,
			"minimap.errorHighlight": eC.error,
			"minimap.selectionHighlight": eC.selectionHighlight,
			"minimap.findMatchHighlight": eC.selectionHighlight,
			"minimap.selectionOccurrenceHighlight": eC.selectionHighlight,
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
			"settings.textInputBackground": eC.bgSideBar,
			"settings.textInputForeground": eC.fg,
			"settings.textInputBorder": eC.borderDim,
			"settings.numberInputBackground": eC.bgSideBar,
			"settings.numberInputForeground": eC.fg,
			"settings.numberInputBorder": eC.borderDim,
			"settings.checkboxBackground": eC.bgSideBar,
			"settings.checkboxForeground": eC.fg,
			"settings.checkboxBorder": eC.borderDim,
			"settings.dropdownBackground": eC.bgSideBar,
			"settings.dropdownForeground": eC.fg,
			"settings.dropdownBorder": eC.borderDim,
			"settings.dropdownListBorder": eC.borderDim,
			"settings.sashBorder": eC.borderDim,
			"settings.headerBorder": eC.borderDim,
			"settings.headerForeground": eC.fgSecondary,
			"settings.modifiedItemIndicator": eC.cursor,
			"settings.rowHoverBackground": eC.bgSideBar,
			"settings.focusedRowBorder": eC.borderDim,
			"settings.focusedRowBackground": eC.bgSideBar,
			"settings.settingsHeaderHoverForeground": eC.fgSecondary,

			// Text
			"foreground": eC.fg,
			"descriptionForeground": eC.fg,
			"icon.foreground": eC.fg,
			"textBlockQuote.background": eC.bgSideBar,
			"textBlockQuote.border": eC.borderBright,
			"textCodeBlock.background": eC.bgSideBar,
			"textLink.foreground": eC.cursor,
			"textLink.activeForeground": eC.linkText,
			"textPreformat.foreground": eC.textPreformat,
			"textSeparator.foreground": eC.fgDisabled,

			// Extensions
			"extensionIcon.verifiedForeground": eC.cursor,
			"extensionButton.background": eC.selectionBright,
			"extensionButton.foreground": eC.fgSecondary,
			"extensionButton.separator": eC.fgDisabled,

			// Welcome page and walkthrough
			"welcomePage.tileBackground": eC.bgSideBar,
			"welcomePage.tileHoverBackground": eC.selectionNormal,
			"welcomePage.progress.foreground": eC.cursor,
			"walkthrough.stepTitle.foreground": eC.fg,
			"walkThrough.embeddedEditorBackground": eC.bgSideBar,

			// Command Center
			"commandCenter.foreground": eC.fg,
			"commandCenter.background": eC.bgSideBar,
			"commandCenter.inactiveBorder": eC.borderInactive,
			"commandCenter.activeBackground": eC.selectionNormal,
			"commandCenter.activeBorder": eC.borderDim,
			"commandCenter.activeForeground": eC.linkText,

			// Badges
			"badge.background": eC.badges,
			"badge.foreground": "#ffffff",

			// Input
			"input.background": eC.bgSideBar,
			"input.border": eC.borderInactive,
			"input.foreground": eC.fg,
			"input.placeholderForeground": eC.fgDisabled,
			"inputValidation.errorBackground": eC.bgEditor,
			"inputValidation.errorForeground": eC.fg,
			"inputValidation.errorBorder": eC.error,
			"inputValidation.infoBackground": eC.bgEditor,
			"inputValidation.infoForeground": eC.fg,
			"inputValidation.infoBorder": eC.info,
			"inputValidation.warningBackground": eC.bgEditor,
			"inputValidation.warningForeground": eC.fg,
			"inputValidation.warningBorder": eC.warning,
			"button.background": eC.selectionBright,
			"button.foreground": eC.fgSecondary,
			"button.separator": eC.fgDisabled,
			"dropdown.background": eC.bgSideBar,
			"dropdown.foreground": eC.fg,
			"selection.background": eC.selectionBright,

			// Quick input
			"pickerGroup.border": eC.borderDim,
			"pickerGroup.foreground": syntax.operator,
			"quickInput.background": eC.bgSideBar,
			"quickInput.foreground": eC.fg,
			"quickInputList.focusBackground": eC.selectionNormal,
			"quickInputList.focusForeground": eC.fgSecondary,
			"quickInputList.focusIconForeground": eC.fgSecondary,
			"quickInputTitle.background": eC.selectionNormal,

			// Panel
			"panel.border": eC.borderDim,
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
			"terminal.selectionBackground": eC.selectionBright,
			"terminal.findMatchBackground": eC.selectionHighlight,
			"terminal.findMatchBorder": eC.selectionHighlightBorder,
			"terminal.inactiveSelectionBackground": eC.selectionDim,
			"terminalOverviewRuler.cursorForeground": eC.cursor,
			"terminalOverviewRuler.findMatchForeground": eC.selectionHighlight,
			"terminalCommandDecoration.defaultBackground": eC.fg,
			"terminalCommandDecoration.successBackground": eC.info,
			"terminalCommandDecoration.errorBackground": eC.error,

			// Terminal colors
			"terminal.ansiBlack": terminal.black,
			"terminal.ansiBrightBlack": terminal.brightBlack,
			"terminal.ansiWhite": terminal.white,
			"terminal.ansiBrightWhite": terminal.brightWhite,
			"terminal.ansiRed": terminal.red,
			"terminal.ansiBrightRed": terminal.brightRed,
			"terminal.ansiGreen": terminal.green,
			"terminal.ansiBrightGreen": terminal.brightGreen,
			"terminal.ansiBlue": terminal.blue,
			"terminal.ansiBrightBlue": terminal.brightBlue,
			"terminal.ansiYellow": terminal.yellow,
			"terminal.ansiBrightYellow": terminal.brightYellow,
			"terminal.ansiCyan": terminal.cyan,
			"terminal.ansiBrightCyan": terminal.brightCyan,
			"terminal.ansiMagenta": terminal.magenta,
			"terminal.ansiBrightMagenta": terminal.brightMagenta,

			// Keybindings
			"keybindingLabel.foreground": eC.fg,
			"keybindingLabel.background": eC.bgCurrentLine,
			"keybindingLabel.border": eC.borderDim,
			"keybindingTable.rowsBackground": eC.bgSideBar,
			"keybindingTable.headerBackground": eC.bgCurrentLine,

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
			"debugIcon.breakpointDisabledForeground": eC.fgDisabled,

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
