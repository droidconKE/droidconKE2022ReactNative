import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const ArrowLeftIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={26.325} height={27} {...props}>
    <G data-name="Layer 2">
      <G data-name="Layer 1">
        <Path data-name="Rectangle 597" fill="none" d="M.109 0h26v27h-26z" />
        <Path
          data-name="Path 118"
          d="M26.325 12.207H7.056l5.847-3.064-1.583-2.495-10.317 5.41a1.751 1.751 0 0 0 0 3.17l10.313 5.415 1.587-2.494-5.847-3.069h19.269Z"
          fill="#fff"
        />
      </G>
    </G>
  </Svg>
)

export default ArrowLeftIcon
