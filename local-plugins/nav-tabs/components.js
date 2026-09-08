import { h } from "preact"

const css = `
.vault-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}
.vault-menu a,
.vault-menu button {
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: var(--dark);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
}
.vault-menu a:hover,
.vault-menu button:hover {
  border-bottom: 2px solid var(--secondary);
}
.vault-menu button.active {
  border-bottom: 2px solid var(--tertiary);
}

/* While the Index panel is open, hide everything in the top nav except
   the Index button itself (which stays visible so it can be clicked
   again to close). */
.vault-top-menu.vault-nav-minimized > .search,
.vault-top-menu.vault-nav-minimized [data-vault-about-link] {
  display: none;
}
`

const script = `
(function () {
  function setup() {
    var indexBtn = document.querySelector("[data-vault-index-toggle]")
    var aboutLink = document.querySelector("[data-vault-about-link]")
    var panel = document.getElementById("vault-index-panel")
    var backdrop = document.getElementById("vault-index-backdrop")
    var topMenu = document.querySelector(".vault-top-menu")

    function closePanel() {
      if (panel) panel.classList.remove("vault-index-open")
      if (backdrop) backdrop.classList.remove("vault-index-open")
      if (indexBtn) indexBtn.classList.remove("active")
      if (topMenu) topMenu.classList.remove("vault-nav-minimized")
    }

    function togglePanel() {
      var isOpen = panel && panel.classList.contains("vault-index-open")
      if (isOpen) {
        closePanel()
      } else {
        if (panel) panel.classList.add("vault-index-open")
        if (backdrop) backdrop.classList.add("vault-index-open")
        if (indexBtn) indexBtn.classList.add("active")
        if (topMenu) topMenu.classList.add("vault-nav-minimized")
      }
    }

    if (indexBtn && panel && !indexBtn.dataset.bound) {
      indexBtn.dataset.bound = "true"
      indexBtn.addEventListener("click", function (e) {
        e.preventDefault()
        e.stopPropagation()
        togglePanel()
      })
    }

    if (backdrop && !backdrop.dataset.bound) {
      backdrop.dataset.bound = "true"
      backdrop.addEventListener("click", closePanel)
    }

    if (aboutLink && !aboutLink.dataset.bound) {
      aboutLink.dataset.bound = "true"
      aboutLink.addEventListener("click", function (e) {
        e.stopPropagation()
        var targetId = aboutLink.getAttribute("href").slice(1)
        var target = document.getElementById(targetId)
        if (target) {
          e.preventDefault()
          closePanel()
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      })
    }
  }

  document.addEventListener("nav", setup)
  setup()
})()
`

export const NavTabs = () => {
  const VaultMenu = () => {
    return h(
      "div",
      { class: "vault-menu" },
      h(
        "a",
        { href: "#what-this-is", "data-vault-about-link": "" },
        "About",
      ),
      h(
        "button",
        { type: "button", "data-vault-index-toggle": "" },
        "Index",
      ),
      h("script", { dangerouslySetInnerHTML: { __html: script } }),
    )
  }
  VaultMenu.css = css
  return VaultMenu
}

export default NavTabs
