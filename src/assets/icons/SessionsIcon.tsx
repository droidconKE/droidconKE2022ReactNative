import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const SessionsIcon = (props: SvgProps) => (
  <Svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    {...props}
  >
    <G data-name="Layer 1">
      <Path data-name="Rectangle 558" fill="none" d="M0 0h20v20H0z" />
      <Path data-name="Path 67" d="M9.353 10.455Z" fill="none" />
      <Path
        data-name="Path 68"
        d="M16.987 2.912a9.939 9.939 0 1 0 2.915 7.032 9.947 9.947 0 0 0-2.912-7.032Zm-5.072 12.906L9.13 10.147V4.089h1.754v5.648l2.618 5.306Z"
        fill={props.color}
      />
    </G>
  </Svg>
)

export default SessionsIcon
