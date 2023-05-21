import { describe, expect, test } from "vitest"
import { screen, render } from "@/utils/test-utils"
import "@testing-library/jest-dom/extend-expect"
import Footer from "@/components/Footer"

describe("Footer", () => {
  test("renders correctly", () => {
    render(<Footer />)

    /* footer tag */
    const footerElem = screen.getByRole("contentinfo")
    expect(footerElem).toBeInTheDocument()

    /* div wrapper element */
    const containerDiv2ndLevelWrapperElement = screen.getByText((content, elem) => {
      return elem.tagName.toLowerCase() === "div" && elem.className.includes("max-w-screen-xl")
    })
    expect(containerDiv2ndLevelWrapperElement).toBeInTheDocument()
    expect(containerDiv2ndLevelWrapperElement.children).toHaveLength(2)

    /* built for collab elem */
    const headingElem = screen.getByRole("heading", {
      name: /built for collaboration/i,
    })
    expect(headingElem).toBeInTheDocument()

    /* paragraph elem */
    const paraElem = screen.getByText(/projectsHut is an open-source project/i)
    expect(paraElem).toBeInTheDocument()
  })

  test("contains a clickable link", () => {
    render(<Footer />)

    /* 
    if the link 
       is enabled
       has a non empty and correct href attribute
       has a '_blank' value for the target attribute
    then:
       it will open up a new tab when the user clicks it.
    */
    const linkElem = screen.getByRole("link")
    expect(linkElem).toBeInTheDocument()
    expect(linkElem.textContent).toBe("Under MIT License")
    expect(linkElem).toBeEnabled()
    expect(linkElem).toHaveAttribute("target", "_blank")
    expect(linkElem).toHaveAttribute("href", "https://github.com/priyankarpal/ProjectsHut/blob/main/LICENSE")
  })
})
