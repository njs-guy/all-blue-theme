// Declare colors for syntax highlighting
interface SyntaxColors {
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

// interface TerminalColors

interface EditorColors {
	fg: string;
	fgSecondary: string;
	fgDisabled: string;
	bgEditor: string;
	bgSideBar: string;
	bgStatusBar: string;
	bgLineHighlight: string;
	cursor: string;
	lightbulb: string;
	badges: string;
	selectionNormal: string;
	selectionDim: string;
	selectionBright: string;
	info: string;
	warning: string;
	error: string;
	added: string;
	modified: string;
	deleted: string;
	staged: string;
	ignored: string;
	addedGutter: string;
	modifiedGutter: string;
	deletedGutter: string;
}

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
};

export const editorTheme: EditorColors = {
	fg: "#63C5DA",
	fgSecondary: "#eceff4",
	fgDisabled: "#006680",
	bgEditor: "#002540",
	bgSideBar: "#002138",
	bgStatusBar: "#001E33",
	bgLineHighlight: "#003154",
	cursor: "#0094FF",
	lightbulb: calmGeneric.yellow,
	badges: "#007FFF",
	selectionNormal: "#003459",
	selectionDim: "#002E4F",
	selectionBright: "#003A63",
	info: calmGeneric.blue,
	warning: calmGeneric.orange,
	error: calmGeneric.red,
	added: "#2E8B57",
	modified: calmGeneric.green,
	deleted: calmGeneric.red,
	staged: calmGeneric.yellow,
	ignored: calmGeneric.grey,
	addedGutter: "#2E8B57",
	modifiedGutter: "#005999",
	deletedGutter: calmGeneric.red,
};
