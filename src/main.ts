import { writeFile, existsSync, mkdirSync } from "fs";
import { allBlueColors } from "./colors";

function createJson() {
	const output = JSON.stringify(allBlueColors);
	const outputDir = "./src/output";

	if (!existsSync(outputDir)) {
		mkdirSync(outputDir, { recursive: true });
	}

	writeFile(outputDir + "/colors.json", output, (err) => {
		if (!err) {
			console.log("Successfully wrote JSON to file.");
		} else {
			console.log(err);
		}
	});
}

createJson();
