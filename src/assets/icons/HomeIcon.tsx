import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

const HomeIcon = (props: SvgProps) => (
  <Svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={19.056}
    height={19.899}
    {...props}
  >
    <G data-name="Layer 1">
      <Path
        data-name="Path 65"
        d="M16.938 8.751 9.629 3.132v-.875.294a.3.3 0 0 0 .207-.318L9.62.083a.084.084 0 0 0-.167 0l-.233 2.15a.3.3 0 0 0 .207.318v.584L2.138 8.751a5.035 5.035 0 0 0-2.13 4.4.4.4 0 0 0 .286.4.6.6 0 0 0 .644-.215l.183-.238a1.232 1.232 0 0 1 .755-.517.183.183 0 0 1 .227.183v6.78a.338.338 0 0 0 .338.334h5.6a.4.4 0 0 0 .378-.4v-3.53a.374.374 0 0 1 .374-.374h1.49a.4.4 0 0 1 .378.374v3.553a.374.374 0 0 0 .374.4h5.608a.338.338 0 0 0 .338-.338v-6.758a.187.187 0 0 1 .223-.187 1.24 1.24 0 0 1 .751.5l.167.25a.513.513 0 0 0 .942-.294 5.429 5.429 0 0 0-2.126-4.323Z"
        fill={props.color}
      />
    </G>
  </Svg>
)

export default HomeIcon;
