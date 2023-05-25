import { describe, expect, test } from "vitest"
import { screen, render } from "@testing-library/react"
import ContributorsPage from "../../src/pages/ContributorPage"

describe("Contributors Page test", () => {
  test("Should render Contributors Page", () => {
    render(<ContributorsPage />)
    expect(screen.getByText(/Contributors/i)).toBeTruthy()
  })
})
