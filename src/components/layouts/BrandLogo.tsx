import {
	Image,
	ImageStyle,
	StyleProp,
	StyleSheet,
	View,
	ViewStyle,
} from "react-native";
import React from "react";

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
	return (
		<View style={[styles.container, imageContainerStyles]}>
			<Image
				resizeMode="contain"
				source={{
					uri: logoUri,
				}}
				style={[styles.image, imageStyles]}
			/>
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
