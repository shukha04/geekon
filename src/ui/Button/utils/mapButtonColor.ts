import { BlendModes, ButtonColors } from '../config/types'

export const mapButtonColor = (color?: ButtonColors): BlendModes => {
	switch (color) {
		case ButtonColors.DARK: {
			return BlendModes.DIFFERENCE
		}
		case ButtonColors.LIGHT: {
			return BlendModes.DARKEN
		}
		case ButtonColors.PRIMARY: {
			return BlendModes.LIGHTEN
		}
		default: {
			return BlendModes.DIFFERENCE
		}
	}
}
