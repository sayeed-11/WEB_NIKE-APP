import React from 'react'

const Preferences = ({isActive}) => {
  return (
    <div>
        <svg viewBox="0 0 512 512" width={22} height={22} xmlns="http://www.w3.org/2000/svg"><path d="m139.61 35.5a12 12 0 0 0 -17 0l-63.68 63.31-22.7-22.12a12 12 0 0 0 -17 0l-15.7 15.72a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62 72.2-72.19a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0 -17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0 -17 0l-15.7 15.69a12 12 0 0 0 0 17l47.47 47.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zm-75.61 173.31c-26.49 0-48.59 21.5-48.59 48s22.12 48 48.59 48a48 48 0 0 0 0-96zm432 16h-288a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm0-320h-288a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm0 160h-288a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z" fill={isActive === "ShopPreferences" ? "#a3e635" : "#000"}/></svg>
    </div>
  )
}

export default Preferences