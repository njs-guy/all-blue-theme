export enum Themes {
	AllBlue,
	Waves,
	Calm,
}

// Declare colors for syntax highlighting
export interface SyntaxColors {
	// Comments
	comment: string;

	// Operator, modifier, units
	operator: string;

	// Variables, CSS ID's
	variable: string;

	// Numbers, booleans, null, this
	bool: string;

	// Types, attributes, classes
	type: string;

	// Functions, Pseudo-classes
	function: string;

	// HTML tags, escape chars
	tag: string;

	// Strings
	string: string;

	// JS Components, Regex
	component: string;

	// Bracket highlighting
	bracket1: string;
	bracket2: string;
	bracket3: string;
	bracket4: string;
	bracket5: string;
	bracket6: string;
}

// Generic base colors
interface SyntaxColorsGeneric {
	red: string;
	blue: string;
	cyan: string;
	green: string;
	yellow: string;
	orange: string;
	pink: string;
	grey: string;
	beige: string;
}

// TerminalColors

export const allBlueColors: SyntaxColors = {
	comment: "#006680",
	operator: "#00CCFF",
	variable: "#85A1F2",
	bool: "#1974D2",
	type: "#4F86F7",
	function: "#a5b4fc",
	tag: "#0892D0",
	string: "#AEC6CF",
	component: "#06B6D4",
	bracket1: "#00CCFF",
	bracket2: "#4F86F7",
	bracket3: "#06B6D4",
	bracket4: "#B0E0E6",
	bracket5: "#a5b4fc",
	bracket6: "#AEC6CF",
};

export const wavesGeneric: SyntaxColorsGeneric = {
	red: "#FF7566",
	blue: "#079BF5",
	green: "#0BDA51",
	yellow: "#FFFD37",
	orange: "#FFAD00",
	pink: "#FF80DD",
	cyan: "#00CCFF",
	grey: "#006680",
	beige: "#DBD59D",
};

export const wavesColors: SyntaxColors = {
	comment: wavesGeneric.grey,
	operator: wavesGeneric.cyan,
	variable: wavesGeneric.orange,
	bool: wavesGeneric.pink,
	type: wavesGeneric.yellow,
	function: wavesGeneric.blue,
	tag: wavesGeneric.red,
	string: wavesGeneric.beige,
	component: wavesGeneric.green,
	bracket1: wavesGeneric.cyan,
	bracket2: wavesGeneric.yellow,
	bracket3: "#63C5DA",
	bracket4: wavesGeneric.orange,
	bracket5: wavesGeneric.blue,
	bracket6: wavesGeneric.green,
};

export const calmGeneric: SyntaxColorsGeneric = {
	red: "#F9968B",
	blue: "#85A1F2",
	green: "#50C878",
	yellow: "#FFFC79",
	orange: "#FFAC40",
	pink: "#FC8EAC",
	cyan: "#8BC6FC",
	grey: "#006680",
	beige: "#D5C2A5",
};

export const calmColors: SyntaxColors = {
	comment: calmGeneric.grey,
	operator: calmGeneric.cyan,
	variable: calmGeneric.orange,
	bool: calmGeneric.pink,
	type: calmGeneric.yellow,
	function: calmGeneric.blue,
	tag: calmGeneric.red,
	string: calmGeneric.beige,
	component: calmGeneric.green,
	bracket1: calmGeneric.cyan,
	bracket2: calmGeneric.yellow,
	bracket3: "#63C5DA",
	bracket4: calmGeneric.orange,
	bracket5: calmGeneric.blue,
	bracket6: calmGeneric.green,
};

const editorColorsGeneric = {
	fg: "#63C5DA",
	fgSecondary: "#eceff4",
	fgTertiary: "#D8DEE9",
	fgFourth: allBlueColors.operator,
	fgDisabled: calmColors.comment,
	bgEditor: "#002540",
	bgSideBar: "#002138",
	bgStatusBar: "#001E33",
	bgCurrentLine: "#003154",
	transparent: "#00000000",
	cursor: "#0094FF",
	lightbulb: calmGeneric.yellow,
	badges: "#007FFF",
	info: calmGeneric.blue,
	warning: calmGeneric.orange,
	error: calmGeneric.red,
	added: calmGeneric.green,
	modified: calmGeneric.blue,
	deleted: calmGeneric.red,
	staged: calmGeneric.yellow,
	ignored: calmGeneric.grey,
	addedGutter: "#2E8B57",
	modifiedGutter: "#005999",
	deletedGutter: calmGeneric.red,
	selectionNormal: "#003459",
	selectionDim: "#002E4F",
	selectionBright: "#003A63",
	selectionTransparency: "8e", // Hex transparency. Ex: "8e"
	selectionHighlight: "#004170", // Selection for word highlighting and find match
	selectionHighlightBorder: allBlueColors.operator,
	selectionHighlightStrongBorder: allBlueColors.type,
	linkEditor: allBlueColors.tag,
	linkText: allBlueColors.string,
	textPreformat: calmGeneric.blue,
};

export const editorColors = {
	fg: editorColorsGeneric.fg,
	fgSecondary: editorColorsGeneric.fgSecondary,
	fgTertiary: editorColorsGeneric.fgTertiary,
	fgFourth: editorColorsGeneric.fgFourth,
	fgDisabled: editorColorsGeneric.fgDisabled,
	bgEditor: editorColorsGeneric.bgEditor,
	bgSideBar: editorColorsGeneric.bgSideBar,
	bgStatusBar: editorColorsGeneric.bgStatusBar,
	bgCurrentLine: editorColorsGeneric.bgCurrentLine,
	transparent: editorColorsGeneric.transparent,
	cursor: editorColorsGeneric.cursor,
	lightbulb: editorColorsGeneric.lightbulb,
	badges: editorColorsGeneric.badges,
	selectionNormal: editorColorsGeneric.selectionNormal,
	selectionDim: editorColorsGeneric.selectionDim,
	selectionBright: editorColorsGeneric.selectionBright,
	selectionTransparency: editorColorsGeneric.selectionTransparency,
	selectionHighlight: editorColorsGeneric.selectionHighlight,
	selectionHighlightBorder: editorColorsGeneric.selectionHighlightBorder,
	selectionHighlightStrongBorder:
		editorColorsGeneric.selectionHighlightStrongBorder,
	info: editorColorsGeneric.info,
	warning: editorColorsGeneric.warning,
	error: editorColorsGeneric.error,
	added: editorColorsGeneric.added,
	modified: editorColorsGeneric.modified,
	deleted: editorColorsGeneric.deleted,
	staged: editorColorsGeneric.staged,
	ignored: editorColorsGeneric.ignored,
	addedGutter: editorColorsGeneric.addedGutter,
	modifiedGutter: editorColorsGeneric.modifiedGutter,
	deletedGutter: editorColorsGeneric.deletedGutter,
	lineNumberActiveFg: editorColorsGeneric.fgTertiary,
	inlayHintParameterFg: allBlueColors.tag,
	peekPreviewTitle: allBlueColors.comment,
	linkEditor: editorColorsGeneric.linkEditor,
	linkText: editorColorsGeneric.linkText,
	textPreformat: editorColorsGeneric.textPreformat,
};
