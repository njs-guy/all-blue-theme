// Template for creating the syntax highlighting portion of the theme

import { editorColors as eC, Themes } from "../colors";

import { checkTheme } from "./checkTheme";

export function createSyntaxTemplate(theme: Themes) {
	const colors = checkTheme(theme);

	const output = {
		// Syntax highlighting
		tokenColors: [
			// Comments
			{
				name: "Comment",
				scope: ["comment", "punctuation.definition.comment"],
				settings: {
					fontStyle: "italic",
					foreground: colors.comment,
				},
			},

			// Operator, Units
			{
				name: "Operator, Misc",
				scope: [
					"keyword.control",
					"constant.other.color",
					"meta.tag",
					"punctuation.definition.tag",
					"punctuation.separator.inheritance.php",
					"punctuation.definition.tag.html",
					"punctuation.definition.tag.begin.html",
					"punctuation.definition.tag.end.html",
					"punctuation.section.embedded",
					"keyword.other.template",
					"keyword.other.substitution",
					"keyword.other.fn.rust",
				],
				settings: {
					foreground: colors.operator,
				},
			},
			{
				name: "Keyword, Storage",
				scope: ["keyword", "storage.type", "storage.modifier"],
				settings: {
					foreground: colors.operator,
				},
			},
			{
				name: "Unit",
				scope: "keyword.other.unit",
				settings: {
					foreground: colors.operator,
				},
			},

			// Variables
			{
				name: "Variables",
				scope: ["variable", "string constant.other.placeholder"],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "Block Level Variables",
				scope: ["meta.block variable.other"],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "Function Argument, Other Variable, String Link",
				scope: [
					"variable.parameter",
					"support.other.variable",
					"string.other.link",
					"meta.attribute.python",
				],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "CSS ID's",
				scope: [
					"entity.other.attribute-name.id.css",
					"source.sass keyword.control",
				],
				settings: {
					foreground: colors.variable,
				},
			},

			// Booleans, numbers, null, this
			{
				name: "Number, Constant, Tag Attribute, Embedded",
				scope: [
					"constant.numeric",
					"constant.language",
					"support.constant",
					"constant.character",
					"constant.escape",
					"keyword.other",
				],
				settings: {
					foreground: colors.bool,
				},
			},
			{
				name: "Colors",
				scope: ["constant.other.color"],
				settings: {
					foreground: colors.bool,
				},
			},
			{
				name: "Language methods",
				scope: ["variable.language"],
				settings: {
					fontStyle: "italic",
					foreground: colors.bool,
				},
			},
			{
				name: "ES7 Bind Operator",
				scope: [
					"source.js constant.other.object.key.js string.unquoted.label.js",
				],
				settings: {
					fontStyle: "italic",
					foreground: colors.bool,
				},
			},

			// Types, attributes, classes
			{
				name: "Entity Types",
				scope: [
					"support.type",
					"entity.name.type.numeric.rust",
					"entity.name.type.primitive",
				],
				settings: {
					foreground: colors.type,
				},
			},
			{
				name: "Attributes",
				scope: ["entity.other.attribute-name"],
				settings: {
					fontStyle: "italic",
					foreground: colors.type,
				},
			},
			{
				name: "HTML Attributes",
				scope: [
					"text.html.basic entity.other.attribute-name.html",
					"text.html.basic entity.other.attribute-name",
				],
				settings: {
					fontStyle: "italic",
					foreground: colors.type,
				},
			},
			{
				name: "Class, Support",
				scope: [
					"entity.name",
					"support.type",
					"support.class",
					"support.other.namespace.use.php",
					"meta.use.php",
					"support.other.namespace.php",
					"markup.changed.git_gutter",
					"support.type.sys-types",
				],
				settings: {
					foreground: colors.type,
				},
			},
			{
				name: "CSS Classes",
				scope: ["entity.other.attribute-name.class"],
				settings: {
					foreground: colors.type,
				},
			},

			// Functions, pseudo-classes
			{
				name: "Function, Special Method",
				scope: [
					"entity.name.function",
					"meta.function-call",
					"variable.function",
					"support.function",
					"keyword.other.special-method",
				],
				settings: {
					foreground: colors.function,
				},
			},
			{
				name: "Sub-methods",
				scope: [
					"entity.name.module.js",
					"variable.import.parameter.js",
					"variable.other.class.js",
				],
				settings: {
					foreground: colors.function,
				},
			},
			{
				name: "entity.name.method.js",
				scope: ["entity.name.method.js"],
				settings: {
					fontStyle: "italic",
					foreground: colors.function,
				},
			},
			{
				name: "meta.method.js",
				scope: [
					"meta.class-method.js entity.name.function.js",
					"variable.function.constructor",
				],
				settings: {
					foreground: colors.function,
				},
			},
			{
				name: "Decorators",
				scope: [
					"tag.decorator.js entity.name.tag.js",
					"tag.decorator.js punctuation.definition.tag.js",
					"meta.decorator.js",
					"meta.decorator.ts",
				],
				settings: {
					fontStyle: "italic",
					foreground: colors.function,
				},
			},
			{
				name: "CSS Pseudo-class",
				scope: [
					"entity.other.attribute-name.pseudo-class.css",
					"meta.selector.css",
				],
				settings: {
					foreground: colors.function,
				},
			},

			// HTML Tags
			{
				name: "Tag",
				scope: [
					"entity.name.tag",
					"meta.tag.sgml",
					"markup.deleted.git_gutter",
				],
				settings: {
					foreground: colors.tag,
				},
			},
			{
				name: "CSS Class and Support",
				scope: [
					"source.css support.type.property-name",
					"source.sass support.type.property-name",
					"source.scss support.type.property-name",
					"source.less support.type.property-name",
					"source.stylus support.type.property-name",
					"source.postcss support.type.property-name",
				],
				settings: {
					foreground: eC.fg,
				},
			},
			{
				name: "Component",
				scope: ["support.class.component"],
				settings: {
					foreground: colors.component,
				},
			},

			// Strings
			{
				name: "String, Symbols, Inherited Class, Markup Heading",
				scope: [
					"string",
					"constant.other.symbol",
					"constant.other.key",
					"entity.other.inherited-class",
					"markup.heading",
					"markup.inserted.git_gutter",
					"meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
				],
				settings: {
					foreground: colors.string,
				},
			},

			// Misc
			{
				name: "Invalid",
				scope: ["invalid", "invalid.illegal"],
				settings: {
					foreground: eC.error,
				},
			},
			{
				name: "Inserted",
				scope: ["markup.inserted"],
				settings: {
					foreground: eC.staged,
				},
			},
			{
				name: "Deleted",
				scope: ["markup.deleted"],
				settings: {
					foreground: eC.deleted,
				},
			},
			{
				name: "Changed",
				scope: ["markup.changed"],
				settings: {
					foreground: eC.modified,
				},
			},
			{
				name: "Regular Expressions",
				scope: ["string.regexp"],
				settings: {
					foreground: colors.component,
				},
			},
			{
				name: "Escape Characters",
				scope: ["constant.character.escape"],
				settings: {
					foreground: colors.function,
				},
			},
			{
				name: "URL",
				scope: ["*url*", "*link*", "*uri*"],
				settings: {
					fontStyle: "underline",
				},
			},

			// JSON
			{
				name: "JSON Key - Level 0",
				scope: [
					"source.json meta.structure.dictionary.json support.type.property-name.json",
				],
				settings: {
					foreground: colors.operator,
				},
			},

			// Markdown
			{
				name: "Markdown - Plain",
				scope: [
					"text.html.markdown",
					"punctuation.definition.list_item.markdown",
				],
				settings: {
					foreground: eC.fg,
				},
			},
			{
				name: "Markdown - Markup Raw Inline",
				scope: ["text.html.markdown markup.inline.raw.markdown"],
				settings: {
					foreground: colors.operator,
				},
			},
			{
				name: "Markdown - Markup Raw Inline Punctuation",
				scope: [
					"text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
				],
				settings: {
					foreground: colors.component,
				},
			},
			{
				name: "Markdown - Heading",
				scope: [
					"markdown.heading",
					"entity.name.section.markdown",
					"markup.heading | markup.heading entity.name",
					"markup.heading.markdown punctuation.definition.heading.markdown",
				],
				settings: {
					foreground: colors.function,
				},
			},
			{
				name: "Markdown - Blockquote",
				scope: [
					"markup.quote punctuation.definition.blockquote.markdown",
				],
				settings: {
					foreground: "#001E33",
				},
			},
			{
				name: "Markdown - Link",
				scope: ["string.other.link.title.markdown"],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "Markdown - Link Description",
				scope: ["string.other.link.description.title.markdown"],
				settings: {
					foreground: colors.string,
				},
			},
			{
				name: "Markdown - Link Anchor",
				scope: ["constant.other.reference.link.markdown"],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "Markdown - Raw Block Fenced",
				scope: ["markup.raw.block.fenced.markdown"],
				settings: {
					foreground: "#000000",
				},
			},
			{
				name: "Markdown - Fenced Bode Block",
				scope: ["punctuation.definition.fenced.markdown"],
				settings: {
					foreground: "#00000050",
				},
			},
			{
				name: "Markdown - Fenced Bode Block Variable",
				scope: [
					"markup.raw.block.fenced.markdown",
					"variable.language.fenced.markdown",
					"punctuation.section.class.end",
				],
				settings: {
					foreground: colors.variable,
				},
			},
			{
				name: "Markdown - Fenced Language",
				scope: ["variable.language.fenced.markdown"],
				settings: {
					foreground: colors.component,
				},
			},
			{
				name: "Markdown - Separator",
				scope: ["meta.separator"],
				settings: {
					fontStyle: "bold",
					foreground: eC.fgSecondary,
				},
			},

			// Markup
			{
				name: "Markup - Italic",
				scope: ["markup.italic"],
				settings: {
					fontStyle: "italic",
					foreground: colors.function,
				},
			},
			{
				name: "Markup - Bold",
				scope: ["markup.bold", "markup.bold string"],
				settings: {
					fontStyle: "bold",
					foreground: colors.function,
				},
			},
			{
				name: "Markup - Bold-Italic",
				scope: [
					"markup.bold markup.italic",
					"markup.italic markup.bold",
					"markup.quote markup.bold",
					"markup.bold markup.italic string",
					"markup.italic markup.bold string",
					"markup.quote markup.bold string",
				],
				settings: {
					fontStyle: "italic bold",
					foreground: colors.function,
				},
			},
			{
				name: "Markup - Underline",
				scope: ["markup.underline"],
				settings: {
					fontStyle: "underline",
					foreground: colors.function,
				},
			},
			{
				name: "Markup - Raw Block",
				scope: ["markup.raw.block"],
				settings: {
					foreground: colors.function,
				},
			},
			{
				name: "Markup - Quote",
				scope: ["markup.quote"],
				settings: {
					fontStyle: "italic",
				},
			},
			{
				name: "Markup - Table",
				scope: ["markup.table"],
				settings: {
					foreground: eC.fg,
				},
			},
		],
	};

	return output;
}
