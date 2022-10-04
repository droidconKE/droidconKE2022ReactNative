import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const LockIcon = (props: SvgProps) => (
  <Svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={14.228}
    height={13.929}
    {...props}
  >
    <G data-name="Layer 1">
      <Path
        data-name="Rectangle 646"
        fill="none"
        d="M0 .398h14.228v13.133H0z"
      />
      <Path
        data-name="Path 143"
        d="M11.612 4.619h-.081V2.27A2.273 2.273 0 0 0 9.261 0H5.27A2.273 2.273 0 0 0 3 2.27v2.349h-.086a.953.953 0 0 0-.944.953v7.408a.95.95 0 0 0 .944.95h8.7a.95.95 0 0 0 .944-.95V5.572a.953.953 0 0 0-.944-.953Zm-1.44 0H4.355V2.27a.914.914 0 0 1 .915-.913h3.995a.914.914 0 0 1 .911.914Z"
        fill="#fff"
      />
    </G>
  </Svg>
)

export default LockIcon
