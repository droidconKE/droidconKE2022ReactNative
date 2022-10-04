import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const VolumeUp = (props: SvgProps) => (
  <Svg
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    height={48} 
    width={48} 
    {...props}>
    <Path d="M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z" />
  </Svg>
)

export default VolumeUp
