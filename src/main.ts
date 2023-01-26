import { writeFile, existsSync, mkdirSync } from "fs";

const colors: JSON = <JSON>(<unknown>{
	blue: "#0094FF",
	red: "#FF0000",
});

function createJson() {
	const output = JSON.stringify(colors);
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
