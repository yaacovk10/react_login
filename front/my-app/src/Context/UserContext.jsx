import { createContext, useState } from "react";

export const ColorContext = createContext(null)
export const SetColorContext = createContext(null)

const ColorProvider = ({children}) => {
  const [color, setColor] = useState("red")

  return(
    <ColorContext.Provider value={color}>
      <SetColorContext.Provider value={setColor}>
        {children}
      </SetColorContext.Provider>
    </ColorContext.Provider>
  )

}

export default ColorProvider