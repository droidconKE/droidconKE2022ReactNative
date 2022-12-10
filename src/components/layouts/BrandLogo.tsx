import {
	Image,
	ImageStyle,
	StyleProp,
	StyleSheet,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import { SvgCssUri } from "react-native-svg";
import * as Linking from 'expo-linking';
import { isImageSVGFormat } from "../../utils/calculations";

interface LogoData {
	logoUri: string;
	imageStyles?: StyleProp<ImageStyle>;
	imageContainerStyles?: StyleProp<ViewStyle>;
	brandUri: string;
}

const BrandLogo = ({
	logoUri,
	imageStyles,
	imageContainerStyles,
	brandUri,
}: LogoData) => {

	const isImageInSvgFormat = isImageSVGFormat(logoUri)

	const goToBrandsSite = (brandUri : string) => Linking.openURL(brandUri)

	return (
		<TouchableOpacity style={[styles.container, imageContainerStyles]} onPress={() => goToBrandsSite(brandUri)}>
			{isImageInSvgFormat === true ?
			<>
				<SvgCssUri
					uri={logoUri}
					width={80}
					height={80}/>
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
		</TouchableOpacity>
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
