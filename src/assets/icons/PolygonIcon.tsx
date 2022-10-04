import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const PolygonIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} {...props}>
    <Path
      data-name="Polygon 5"
      d="M15.221 8.371a3 3 0 0 1 0 5.257L4.446 19.554A3 3 0 0 1 0 16.926V5.074a3 3 0 0 1 4.446-2.629Z"
      fill="#fff"
    />
  </Svg>
)

export default PolygonIcon
