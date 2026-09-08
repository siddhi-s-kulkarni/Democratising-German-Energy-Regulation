import { h } from "preact"
import { htmlToJsx } from "@quartz-community/utils/jsx"

// Renders the page's actual markdown content (e.g. the "What this is"
// section), same as the standard content page does, so heading ids and
// text are preserved for the "About" anchor scroll to target.
// NOTE: "body" must be a *constructor* — (opts) => Component — matching
// Quartz's QuartzComponentConstructor contract, not the component itself.
const VaultBody = () => {
  const Component = ({ fileData, tree }) => {
    const content = htmlToJsx(tree)
    return h(
      "article",
      { class: "popover-hint" },
      h("div", { class: "markdown-preview-view markdown-rendered" }, content),
    )
  }
  return Component
}

const vaultMatcher = ({ slug }) => slug === "index" || slug === "vault"

export default function VaultPage() {
  return {
    name: "VaultPage",
    priority: 5,
    match: vaultMatcher,
    layout: "vault",
    frame: "vault",
    body: VaultBody,
  }
}
