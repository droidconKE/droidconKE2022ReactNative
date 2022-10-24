import { Image, StyleSheet, View } from "react-native";
import React from "react";

interface LogoData {
	logoUri: string;
}

const BrandLogo = ({ logoUri }: LogoData) => {
	return (
		<View style={styles.container}>
			<Image
				resizeMode="contain"
				source={{
					uri: logoUri,
				}}
				style={styles.image}
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
