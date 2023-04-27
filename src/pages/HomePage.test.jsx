import { describe, expect, test } from "vitest"
import { screen, render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import HomePage from "./HomePage"

describe("HomePage test", () => {
  test("Should render Home Page", () => {
    render(
      <Router>
        <HomePage />
      </Router>,
    )
    expect(screen.getByText(/Show your project to the world/i)).toBeTruthy()
  })
})
