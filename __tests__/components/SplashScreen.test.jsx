import { describe, expect, test } from "vitest"
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SplashScreen from "@/components/SplashScreen"

describe("SplashScreen", () => {
  test("renders correctly", () => {
    render(<SplashScreen />)

    /* component wrapper element */
    const containerElem = screen.getByText((content, elem) => {
      return elem.tagName.toLowerCase() === "div" && elem.className.includes("h-screen flex")
    })
    expect(containerElem).toBeInTheDocument()

    /* circles wrapper element */
    const circlesWrapperElem = screen.getByText((content, elem) => {
      return elem.tagName.toLowerCase() === "div" && elem.className.includes("inline-flex")
    })
    expect(circlesWrapperElem).toBeInTheDocument()

    /* circles */
    const circles = screen.getAllByText((content, elem) => {
      return elem.tagName.toLowerCase() === "div" && elem.className.includes("w-8 h-8 from-indigo-500")
    })
    expect(circles).toHaveLength(3)

    /* loading text element */
    const loadingElement = screen.getByText(/loading/i)
    expect(loadingElement).toBeInTheDocument()
  })
})
