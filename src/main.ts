import { writeFile, existsSync, mkdirSync } from "fs";
import { createFullTemplate } from "./templates/fullTemplate";
import { Themes } from "./colors";

function createJson() {
	const themes: Themes[] = [Themes.AllBlue, Themes.Calm, Themes.Waves];
	const outputDir = "./themes";

	if (!existsSync(outputDir)) {
		mkdirSync(outputDir, { recursive: true });
	}

	for (let i = 0; i < themes.length; i++) {
		const output = createFullTemplate(themes[i]);
		let fileName = "";

		switch (themes[i]) {
			case Themes.AllBlue:
				fileName = "all-blue";
				break;
			case Themes.Calm:
				fileName = "all-blue-calm";
				break;
			case Themes.Waves:
				fileName = "all-blue-waves";
				break;
		}

		fileName += "-color-theme.json";

		writeFile(outputDir + "/" + fileName, output, (err) => {
			if (!err) {
				console.log(`Successfully wrote ${fileName}.`);
			} else {
				console.error(err);
			}
		});
	}
}

createJson();
