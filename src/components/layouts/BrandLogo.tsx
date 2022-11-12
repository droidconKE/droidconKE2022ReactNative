import {
	Image,
	ImageStyle,
	StyleProp,
	StyleSheet,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import { isImageSVGFormat } from "../../utils/calculations";

interface LogoData {
	logoUri: string;
	imageStyles?: StyleProp<ImageStyle>;
	imageContainerStyles?: StyleProp<ViewStyle>;
}

const BrandLogo = ({
	logoUri,
	imageStyles,
	imageContainerStyles,
}: LogoData) => {

	const isImageInSvgFormat = isImageSVGFormat(logoUri)
	return (
		<View style={[styles.container, imageContainerStyles]}>
			{isImageInSvgFormat === true ?
			<>
				<SvgUri
					uri={logoUri}
					width={'80%'}
					height={'80%'}/>
			</>
			:
			<>
				<Image
					resizeMode="contain"
					source={{
						uri: logoUri,
					}}
					style={[styles.image, imageStyles]}
				/>
			</>
			}
		</View>
	);
};

export default BrandLogo;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	image: {
		width: 80,
		height: 80,
	},
});
