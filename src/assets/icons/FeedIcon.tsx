import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const FeedIcon = (props: SvgProps) => (
  <Svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={15.712}
    height={19.899}
    {...props}
  >
    <G data-name="Layer 1">
      <Path
        data-name="Path 66"
        d="M15.712 18.258H9.5a1.636 1.636 0 0 1-1.64 1.64 1.616 1.616 0 0 1-1.64-1.592L0 18.258l.979-1.942a6.6 6.6 0 0 0 .712-3.184l-.151-5.32a6.316 6.316 0 0 1 5.572-6.276V.74A.728.728 0 0 1 7.856 0a.7.7 0 0 1 .5.215.7.7 0 0 1 .215.513v.8A6.316 6.316 0 0 1 14.144 7.8l-.151 5.341a6.6 6.6 0 0 0 .732 3.176Z"
        fill={props.color}
      />
    </G>
  </Svg>
)

export default FeedIcon
