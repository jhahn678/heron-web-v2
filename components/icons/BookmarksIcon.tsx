import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
  size?: number
}

const BookmarksIcon = ({ size=24 }: Props) => (
  <Svg
    width={24}
    height={24}
    style={{ transform: [{ scale: size/24 }]}}
  >
    <Path
      d="M4 6.748a2.25 2.25 0 0 1 2.25-2.25h9a2.25 2.25 0 0 1 2.25 2.25V21.25a.751.751 0 0 1-1.127.648l-5.623-3.28-5.622 3.28A.75.75 0 0 1 4 21.25V6.748Zm2.25-.75a.75.75 0 0 0-.75.75v13.196l4.873-2.842a.75.75 0 0 1 .755 0l4.873 2.842V6.748a.75.75 0 0 0-.75-.75H6.25Zm9-3.998A4.75 4.75 0 0 1 20 6.75v11.873a.75.75 0 1 1-1.5 0V6.751a3.25 3.25 0 0 0-3.25-3.25H6.637s.113-.558.797-1.082C8 2 8.602 2 8.602 2h6.648Z"
      fill="#000"
    />
  </Svg>
)

export default BookmarksIcon
