import * as React from "react"

const AddImageIcon = ({ color='#000' }) => (
  <svg
    width={24}
    height={24}
    fill="none"
  >
    <path
      d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5Z"
      fill={color}
    />
    <path d="m8 11-3 4h11l-4-6-3 4-1-2Z" fill={color} />
    <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3Z" fill={color} />
  </svg>
)

export default AddImageIcon