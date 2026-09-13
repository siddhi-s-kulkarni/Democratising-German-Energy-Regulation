import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

/**
 * The Vault frame — full-width, no permanent sidebars. The graph is the
 * first thing visible, big and centered, sitting in the normal page flow
 * (not a fixed overlay) — so scrolling past it naturally reveals the
 * page's own text content ("What this is") below. Reuses Quartz's
 * "global graph" (normally a popup modal) but re-styled here to render
 * in-place instead, since its rendering logic already sizes correctly;
 * the small "local graph" preview is hidden entirely. A MutationObserver
 * keeps it permanently open, since Quartz's own script would otherwise
 * treat any outside click as "close the modal" — behavior that no longer
 * makes sense once it's not a modal. The Explorer (list of notes) renders
 * as a right-side overlay panel, off-screen until "Index" is clicked.
 */
export const VaultFrame: PageFrame = {
  name: "vault",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer: Footer,
  }: PageFrameProps) {
    return (
      <>
        <div class="vault-top-left" id="vault-top-left"></div>
        <div class="center vault-center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="vault-top-menu">
              {left.slice(0, 1).map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
              {afterBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <h1 class="vault-page-title">Democratising German Energy Regulation</h1>
          <div class="vault-graph-stage">
            {right.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
          <div class="vault-text-content">
            <Content {...componentData} />
          </div>
        </div>
        <div class="vault-index-overlay" id="vault-index-panel">
          <div class="vault-index-overlay-inner">
            {left.slice(1).map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="vault-index-backdrop" id="vault-index-backdrop"></div>
        <Footer {...componentData} />
      </>
    )
  },
  css: `
html, body {
  overflow-x: hidden;
}
.vault-center {
  max-width: 100%;
  min-width: 100%;
  min-height: calc(100vh - 4rem);
  box-sizing: border-box;
  padding: 0 2rem;
}
.page[data-frame="vault"] > #quartz-body > footer {
  padding: 0 2rem;
  box-sizing: border-box;
}
.vault-top-menu {
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 300;
  width: auto;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.vault-top-left {
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  z-index: 300;
}
.vault-graph-stage {
  width: 100%;
  scroll-margin-top: 2rem;
  margin-bottom: 2rem;
}
.vault-page-title {
  font-size: 2.2rem;
  margin: 1rem 0 1.5rem 0;
  text-align: center;
  color: var(--dark);
}

/* Hide Quartz's own "Graph View" label — we show our own title instead. */
.vault-graph-stage .graph > h3 {
  display: none !important;
}

/* Hide the tiny local-graph preview entirely — only the big graph shows. */
.vault-graph-stage .graph-outer {
  display: none !important;
}

/* Re-style Quartz's "global graph" (normally a fixed full-screen modal)
   to render in-place instead, as a normal big block in the page flow. */
.vault-graph-stage .global-graph-outer {
  position: static !important;
  display: block !important;
  width: 100%;
  height: auto;
  z-index: auto !important;
  backdrop-filter: none !important;
  background: none !important;
}
.vault-graph-stage .global-graph-container {
  position: static !important;
  top: auto !important;
  left: auto !important;
  transform: none !important;
  width: 100% !important;
  height: 75vh !important;
  margin: 0 auto;
}

.vault-text-content {
  scroll-margin-top: 2rem;
  max-width: 45rem;
  margin: 3rem auto 0 auto;
}

.vault-index-overlay {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: fit-content;
  min-width: 220px;
  max-width: min(300px, 85vw);
  background: var(--light);
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.25);
  z-index: 200;
  transform: translateX(100%);
  transition: transform 0.25s ease;
  overflow-y: auto;
  padding: 4.5rem 1.5rem 2rem 1.5rem;
  box-sizing: border-box;
}
.vault-index-overlay.vault-index-open {
  transform: translateX(0);
}
.vault-index-overlay-inner .explorer {
  height: auto;
  position: static;
  padding: 0;
}
.vault-index-overlay-inner .explorer button.explorer-toggle {
  display: none !important;
}
.vault-index-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 150;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.vault-index-backdrop.vault-index-open {
  opacity: 1;
  pointer-events: auto;
}

html {
  scroll-behavior: smooth;
}
`,
}
