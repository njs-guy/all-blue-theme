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

export const wavesColors: SyntaxColors = {
	comment: "#006680",
	operator: "#00CCFF",
	variable: "#FFAD00",
	bool: "#FF80DD",
	type: "#FFFD37",
	function: "#079BF5",
	tag: "#FF7566",
	string: "#DBD59D",
	component: "#0BDA51",
};

export const calmColors: SyntaxColors = {
	comment: "#006680",
	operator: "#8BC6FC",
	variable: "#FFAC40",
	bool: "#FC8EAC",
	type: "#FFB7C5",
	function: "#85A1F2",
	tag: "#F9968B",
	string: "#D5C2A5",
	component: "#50C878",
};
