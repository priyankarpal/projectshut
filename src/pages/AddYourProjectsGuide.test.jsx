import { describe, expect, test } from "vitest"
import { screen, render } from "@testing-library/react"
import AddYourProjectsGuide from "./AddYourProjectsGuide"

describe("Projects Guide page test", () => {
  test("Should render Projects Guide Page", () => {
    render(<AddYourProjectsGuide />)
    expect(screen.getByText(/Follow these steps to add your projects/i)).toBeTruthy()
  })
})
