// Retrieves colors from the specified theme

import { allBlueColors, calmColors, wavesColors, Themes } from "../colors";

export function checkTheme(theme: Themes) {
	switch (theme) {
		case Themes.AllBlue:
			return allBlueColors;
			break;
		case Themes.Calm:
			return calmColors;
			break;
		case Themes.Waves:
			return wavesColors;
			break;
		default:
			console.error("ERROR: Theme does not exist. Using default colors.");
			return allBlueColors;
			break;
	}
}
