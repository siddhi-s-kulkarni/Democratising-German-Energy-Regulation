import fs from "fs"
import path from "path"

const ROBOTS_TXT = `User-agent: *
Allow: /

# ---------------------------------------------------------
# Traditional search engines — allowed, so people can find
# and discover the site normally.
# ---------------------------------------------------------
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

# ---------------------------------------------------------
# AI retrieval / citation bots — allowed. These power
# real-time answers in tools like ChatGPT and Perplexity
# and link back to the source, which supports the goal of
# making this content easy to find and reference.
# ---------------------------------------------------------
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# ---------------------------------------------------------
# Bulk AI training crawlers — blocked. These scrape content
# wholesale to train models, with no attribution or link
# back to the source.
# ---------------------------------------------------------
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: cohere-training-data-crawler
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: Omgili
Disallow: /

User-agent: Timpibot
Disallow: /

User-agent: img2dataset
Disallow: /
`

export default function RobotsTxt() {
  return {
    name: "RobotsTxt",
    async *emit(ctx) {
      const dest = path.join(ctx.argv.output, "robots.txt")
      await fs.promises.mkdir(ctx.argv.output, { recursive: true })
      await fs.promises.writeFile(dest, ROBOTS_TXT)
      yield dest
    },
    async *partialEmit() {},
  }
}
