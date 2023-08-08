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

export const allBlueGeneric = {
	blue: "#4F86F7",
	darkBlue: "#1974D2",
	lightBlue: "#a5b4fc",
	teal: "#06B6D4",
	darkTeal: "#0892D0",
	lightTeal: "#AEC6CF",
	blueGrey: "#006680",
	cyan: "#00CCFF",
	lilac: "#85A1F2",
};

export const allBlueColors: SyntaxColors = {
	comment: allBlueGeneric.blueGrey,
	operator: allBlueGeneric.cyan,
	variable: allBlueGeneric.lilac,
	bool: allBlueGeneric.darkBlue,
	type: allBlueGeneric.blue,
	function: allBlueGeneric.lightBlue,
	tag: allBlueGeneric.darkTeal,
	string: allBlueGeneric.lightTeal,
	component: allBlueGeneric.teal,
	bracket1: allBlueGeneric.cyan,
	bracket2: allBlueGeneric.blue,
	bracket3: allBlueGeneric.lilac,
	bracket4: "#63C5DA",
	bracket5: allBlueGeneric.lightBlue,
	bracket6: allBlueGeneric.darkBlue,
};

export const wavesGeneric: SyntaxColorsGeneric = {
	red: "#FF7566",
	blue: "#079BF5",
	green: "#0BDA51",
	yellow: "#FFFD37",
	orange: "#FFAD00",
	pink: "#F77FBE",
	cyan: allBlueGeneric.cyan,
	grey: allBlueGeneric.blueGrey,
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
	yellow: "#FEF08A",
	orange: "#FFAC40",
	pink: "#FC8EAC",
	cyan: "#8BC6FC",
	grey: allBlueGeneric.blueGrey,
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

export const terminalColors = {
	black: "#000000",
	brightBlack: "#2E3440",
	white: "#E5E9F0",
	brightWhite: "#FFFFFF",
	red: calmGeneric.red,
	brightRed: wavesGeneric.red,
	green: calmGeneric.green,
	brightGreen: wavesGeneric.green,
	blue: allBlueColors.type,
	brightBlue: wavesGeneric.blue,
	yellow: calmGeneric.yellow,
	brightYellow: wavesGeneric.yellow,
	cyan: allBlueColors.string,
	brightCyan: wavesGeneric.cyan,
	magenta: calmGeneric.pink,
	brightMagenta: wavesGeneric.pink,
};

const editorColorsGeneric = {
	fg: "#63C5DA",
	fgSecondary: "#eceff4",
	fgTertiary: "#D8DEE9",
	fgFourth: allBlueColors.operator,
	fgDisabled: calmColors.comment,
	bgEditor: "#002138",
	bgSideBar: "#001E33",
	bgStatusBar: "#002540",
	bgCurrentLine: "#002C4C",
	transparent: "#00000000",
	cursor: "#0094FF",
	lightbulb: calmGeneric.yellow,
	badges: "#007FFF",
	info: calmGeneric.blue,
	warning: calmGeneric.orange,
	error: wavesGeneric.red,
	added: calmGeneric.green,
	modified: calmGeneric.blue,
	deleted: wavesGeneric.red,
	staged: calmGeneric.yellow,
	ignored: calmGeneric.grey,
	addedGutter: "#2E8B57",
	modifiedGutter: "#005999",
	deletedGutter: wavesGeneric.red,
	selectionNormal: "#003459",
	selectionDim: "#002E4F",
	selectionBright: "#003A63",
	selectionVeryBright: "#00528C",
	selectionTransparency: "8e", // Hex transparency. Ex: "8e"
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
	borderInactive: editorColorsGeneric.bgCurrentLine,
	borderDim: editorColorsGeneric.selectionNormal,
	borderBright: editorColorsGeneric.cursor,
	selectionNormal: editorColorsGeneric.selectionNormal,
	selectionDim: editorColorsGeneric.selectionDim,
	selectionBright: editorColorsGeneric.selectionBright,
	selectionVeryBright: editorColorsGeneric.selectionVeryBright,
	selectionTransparency: editorColorsGeneric.selectionTransparency,
	// Selection for word highlighting and find match
	selectionHighlight:
		editorColorsGeneric.selectionVeryBright +
		editorColorsGeneric.selectionTransparency,
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
	lineNumberActiveFg: editorColorsGeneric.fg,
	inlayHintParameterFg: allBlueColors.comment,
	peekPreviewTitle: allBlueColors.comment,
	linkEditor: editorColorsGeneric.linkEditor,
	linkText: editorColorsGeneric.linkText,
	textPreformat: editorColorsGeneric.textPreformat,
};
