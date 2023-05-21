import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "@/context/Theme"

const customRender = (ui, options) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>, options)
}

export * from "@testing-library/react"
export { customRender as render }
