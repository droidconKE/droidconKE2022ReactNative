import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const ShareIcon = (props: SvgProps) => (
  <Svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={24.233}
    height={24}
    {...props}
  >
    <G data-name="Layer 1">
      <Path data-name="Rectangle 592" fill="none" d="M0 0h24v24H0z" />
      <Path
        data-name="Path 113"
        d="m23.776 9.764-10.872-6.61a1 1 0 0 0-1.043 0 1.115 1.115 0 0 0-.524.949v2.946a11.987 11.987 0 0 0-1.562.552 12.916 12.916 0 0 0-3.062 1.888 15.519 15.519 0 0 0-2.326 2.43 20.013 20.013 0 0 0-1.726 2.673 25.789 25.789 0 0 0-1.294 2.785 31.21 31.21 0 0 0-.961 2.84c-.062.238-.13.471-.192.709a.443.443 0 0 0 .219.5.4.4 0 0 0 .507-.121l.418-.557a26.974 26.974 0 0 1 1.8-2.131 17.844 17.844 0 0 1 4.047-3.29 9.74 9.74 0 0 1 2.125-.906 6.458 6.458 0 0 1 2.009-.243v2.915a1.11 1.11 0 0 0 .522.953 1 1 0 0 0 1.045 0l10.868-6.61a.988.988 0 0 0 0-1.665Z"
        fill="#000ceb"
      />
    </G>
  </Svg>
)

export default ShareIcon
