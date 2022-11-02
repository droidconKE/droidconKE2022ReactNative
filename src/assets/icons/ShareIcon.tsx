import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const ShareIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={21.399} height={22} {...props}>
    <G data-name="Layer 2">
      <G data-name="Layer 1">
        <Path data-name="Rectangle 592" fill="none" d="M.11 0h21v22h-21z" />
        <Path
          data-name="Path 113"
          d="m20.996 9.022-9.685-5.886a.893.893 0 0 0-.928 0 .993.993 0 0 0-.467.845v2.623a10.674 10.674 0 0 0-1.391.491 11.5 11.5 0 0 0-2.729 1.684 13.819 13.819 0 0 0-2.069 2.164 17.822 17.822 0 0 0-1.537 2.38 22.964 22.964 0 0 0-1.151 2.479c-.33.834-.612 1.681-.856 2.529-.056.212-.116.419-.171.631a.4.4 0 0 0 .2.442.356.356 0 0 0 .451-.108l.372-.5a24.019 24.019 0 0 1 1.605-1.9 15.89 15.89 0 0 1 3.6-2.93 8.673 8.673 0 0 1 1.892-.807 5.751 5.751 0 0 1 1.788-.216v2.6a.989.989 0 0 0 .465.849.889.889 0 0 0 .931 0l9.68-5.887a.88.88 0 0 0 0-1.483Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
)

export default ShareIcon