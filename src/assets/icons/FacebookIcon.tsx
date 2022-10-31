import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const FacebookIcon = (props: SvgProps) => (
  <Svg
    data-name="Component 1"
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17.868}
    {...props}
  >
    <Path data-name="Rectangle 547" fill="none" d="M0 0h17v17H0z" />
    <Path
      data-name="Path 1"
      d="M10.541 17.868V9.86h2.734l.391-3.125h-3.125V4.781c0-.879.293-1.563 1.563-1.563h1.66V.389c-.391 0-1.367-.1-2.441-.1a3.77 3.77 0 0 0-4 4.1v2.346H4.584V9.86h2.734v8.008Z"
      fill="#191d1d"
      fillRule="evenodd"
    />
  </Svg>
)

export default FacebookIcon