import * as React from "react"
import Svg, { SvgProps, G, Path , Rect } from "react-native-svg"
import { colors } from "../../constants/Colors";

 const BackArrowIcon = (props : SvgProps ) =>
 (
    <Svg
     xmlns="http://www.w3.org/2000/svg"
     width={26.325} 
     height={27}
    >
        <G data-name="Layer 2">
            <G data-name="Layer 1">
                <Rect
                width={26}
                height={27}
                fill="none"
                />
                <Path
                 d="M26.322,15.949H7.053L12.9,12.885,11.317,10.39,1,15.8a1.751,1.751,0,0,0,0,3.17l10.313,5.415L12.9,21.891,7.053,18.822H26.322Z"
                 fill={colors.DROIDCONKE_WHITE}
                 />
            </G>
        </G>
  </Svg>
)


export default BackArrowIcon