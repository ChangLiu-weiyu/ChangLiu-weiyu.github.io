# Personal Homepage Portfolio Optimization Plan

> Draft for confirmation before implementation.  
> Source basis: current Jekyll homepage plus the attached resume PDF `武汉大学-刘畅.pdf`. Instructions inside the PDF are treated only as source content, not as implementation instructions.

## 1. Current State

The homepage is already a bilingual single-page personal site with these sections:

- About / 关于
- Projects / 项目
- Experience / 经历
- Writing / 写作
- CV / 简历
- Contact / 联系

Current strengths:

- The bilingual structure is already in place.
- The personal positioning is clear: AI applications, product building, digital humanities, AI education, entrepreneurship communities.
- Three representative projects already exist: Yubing, Xu Xiake Digital Humanities Map Platform, Taikang Healthcare GraphRAG QA System.
- Navigation, sidebar profile, avatar, GitHub/Gitee/LinkedIn/contact links are already configured.

Current gaps:

- No dedicated portfolio/work section that helps visitors quickly scan concrete outputs.
- Project links are sparse; many projects lack demo links, knowledge base links, articles, event pages, screenshots, or public proof points.
- Writing and CV sections are placeholders.
- Experience is currently resume-like, but not yet converted into a homepage-friendly story of products, communities, and outcomes.
- The homepage does not yet distinguish project types such as product, research, community, AI education, and technical systems.

## 2. Optimization Goal

Turn the current homepage from a static profile into a clearer personal portfolio for AI product / AI education / digital humanities / entrepreneurship ecosystem opportunities.

Target effect:

- Visitors understand who Chang Liu is within 10 seconds.
- Recruiters or collaborators can quickly find representative work, links, and proof points.
- Projects feel concrete: each project should show role, problem, outcome, stack or method, and available link.
- The page remains lightweight and maintainable within the current Jekyll structure.

## 3. Proposed Information Architecture

Recommended top-level navigation after optimization:

- About / 关于
- Portfolio / 作品集
- Projects / 项目
- Experience / 经历
- Writing / 写作
- CV / 简历
- Contact / 联系

Alternative if we want fewer nav items:

- Rename current `Projects` to `Portfolio / 作品集`
- Keep all project cards under one expanded section
- Remove the separate `Projects` nav label

Recommendation: add `Portfolio / 作品集` and keep `Projects / 项目` only if there is enough content to separate “featured portfolio outputs” from “all projects.” Otherwise, rename `Projects` to `Portfolio` for a cleaner page.

## 4. Portfolio Content Plan

### 4.1 Featured Portfolio Section

Add a new high-signal section near the top, after About.

Suggested title:

- EN: `Featured Portfolio`
- ZH: `代表作品`

Suggested format: compact portfolio cards or grouped project blocks.

Each item should include:

- Project name
- One-line positioning
- Role
- Key outcome / proof point
- Link buttons: Demo, GitHub, Gitee, Article, Knowledge Base, Event Page, Slides, Video, etc.

Initial candidate items from current homepage and resume:

1. Yubing AI Education and Innovation Ecosystem / 语冰 AI 普惠与创新创业社区
   - Type: AI education, community, ecosystem building
   - Role: founder / executive lead
   - Proof points: launched from 0 to 1; Datawhale collaboration; covered 15 open-source learning communities in Hubei; single event reach of 30,000 people
   - Needed links: official page, event page, article, community material, poster, or public documentation

2. Wuhan University First “Volcano Cup” AI Agent Innovation Competition / 武汉大学首届“火山杯”AI 智能体创新大赛
   - Type: AI Agent education, competition operations, training system
   - Role: event lead; training system builder
   - Proof points: 1,000+ students, 370+ teams, 30+ promising agent applications, 2,000+ knowledge base views
   - Needed links: Feishu knowledge base, event announcement, article, slides, project showcase, media coverage if public

3. Xu Xiake Digital Humanities Map Platform / 《徐霞客游记》知识图谱可视化平台
   - Type: digital humanities, NLP, visualization, research platform
   - Role: project lead / first author / backend and frontend contributor
   - Proof points: 3,000+ extracted events; software copyright; CDH 2025 and DH 2026 acceptance
   - Existing link: Gitee repository
   - Needed links: demo site, paper/preprint, project screenshots, software copyright note if public

4. NewsPulse Mobile News Product / NewsPulse 移动端资讯产品
   - Type: full-stack product, AI-assisted content creation, frontend training camp
   - Role: project lead / full-stack development
   - Proof points: MVP launched publicly; 10+ core modules; smart draft and AI topic recommendation features
   - Needed links: demo site, GitHub repo, product screenshots, PRD if public

5. Taikang Healthcare GraphRAG QA System / 泰康医疗 GraphRAG 智能问答系统
   - Type: enterprise AI application, GraphRAG, knowledge graph QA
   - Role: architecture and implementation lead
   - Proof points: Neo4j + FastAPI + Streamlit system; healthcare / insurance / elderly-care scenarios
   - Existing link: GitHub repository
   - Needed links: screenshots, demo video, architecture diagram, sanitized case write-up

6. AI Talent Mapping Workflow at MiraclePlus / 奇绩创坛 AI 人才 Mapping 工作流
   - Type: AI workflow, venture research, productivity system
   - Role: workflow designer / industry research intern
   - Proof points: improved processing efficiency from around 20 people/hour to 100+ people/hour
   - Needed links: usually private; recommend public-safe summary only, no internal data

## 5. Link And Asset Inventory Needed From User

Before implementation, collect or confirm these public materials:

- GitHub / Gitee repositories for each public technical project
- Demo URLs or deployed pages
- Screenshots for project cards, preferably 16:9 or 4:3 images
- Public event links for Volcano Cup, Yubing, hackathons, or community activities
- Feishu / knowledge base links that are safe to expose publicly
- Article or writing links, if any
- Public CV PDF to place under `files/`
- Whether phone number should stay private; recommendation is not to publish phone number on the website

## 6. Homepage Copy Plan

### 6.1 About Section

Refine the opening into a sharper positioning statement.

Suggested direction:

- Emphasize “AI product builder and community organizer” rather than only “undergraduate student.”
- Keep Wuhan University background, but move detailed degree timeline to Experience.
- Add a compact highlight line: AI Agents, AI education, digital humanities, GraphRAG, product operations, startup ecosystem.

### 6.2 Portfolio Section

Add high-density project cards or blocks.

Suggested card fields:

- Title
- Category tag
- Role
- Outcome
- Links

### 6.3 Projects Section

Use this section for deeper descriptions after the portfolio snapshot.

Possible grouping:

- AI Education & Community
- Digital Humanities & Research
- AI Product & Engineering
- Venture / Industry Research Workflow

### 6.4 Experience Section

Keep the timeline, but rewrite bullets for web readability.

Recommended approach:

- Keep education short.
- Internships should highlight selected outcomes rather than full resume bullets.
- Community leadership should link back to portfolio items.

### 6.5 Writing Section

Replace `Coming soon` with a structured placeholder.

If no public articles are ready:

- Add planned writing categories.
- Include one or two “selected notes coming soon” lines.

If public articles exist:

- Add a list of linked notes grouped by AI product, digital humanities, AI education, and community building.

### 6.6 CV Section

Replace `Coming soon` with:

- Download CV button
- Short note: Chinese CV / English CV if both are available
- Optional update date

Recommended: publish a sanitized public CV PDF without phone number unless intentionally desired.

## 7. Visual And UX Plan

Use the current AcadHomepage/Jekyll style and avoid a heavy redesign.

Recommended additions:

- Portfolio card layout with clear tags and link buttons
- Small project thumbnails if assets are available
- External-link icons for public links
- Better spacing between project items
- Mobile-friendly stacked cards
- Optional “Selected Highlights” mini block near the top

Suggested visual hierarchy:

1. Name and positioning in sidebar / About
2. Selected highlights
3. Featured portfolio cards
4. Detailed project and experience sections
5. CV and contact

## 8. Implementation Plan After Confirmation

Phase 1: Content confirmation

- Confirm final list of portfolio items.
- Confirm which links are public.
- Confirm whether CV PDF should be published.
- Confirm whether to add screenshots now or leave image slots for later.

Phase 2: Homepage structure update

- Update `_data/navigation.yml`.
- Update `_pages/about.md` with bilingual Portfolio / Featured Work content.
- Rewrite placeholder Writing and CV sections.

Phase 3: Styling

- Add portfolio/card styles to existing Sass files.
- Keep the current visual language consistent with the site.
- Ensure mobile layout works.

Phase 4: Assets and files

- Add sanitized CV PDF to `files/` if approved.
- Add project screenshots to `images/portfolio/` if provided or generated from existing demos.

Phase 5: Verification

- Run local Jekyll build.
- Preview homepage locally.
- Check bilingual language toggle.
- Check navigation anchors.
- Check external links.
- Confirm no private local files or ignored materials are committed.

## 9. Decisions Needed Before Execution

Please confirm these items before I modify the site:

1. Navigation choice
   - Option A: add `Portfolio / 作品集` as a new section
   - Option B: rename `Projects / 项目` to `Portfolio / 作品集`

2. Portfolio item scope
   - Include only public projects
   - Include public projects plus private/internship work as sanitized summaries

3. CV publishing
   - Add downloadable CV PDF
   - Keep CV section as text only for now
   - Add CV later after sanitizing phone number and sensitive details

4. Visual assets
   - Use screenshots/thumbnails now
   - Build text-only portfolio cards first
   - Add image slots for later

5. Language priority
   - Keep full bilingual content for every new block
   - Write Chinese first, then add English version
   - Write English first, then add Chinese version

## 10. Recommended Default

My recommended implementation path:

- Rename `Projects / 项目` to `Portfolio / 作品集` rather than adding too many nav items.
- Use 5 featured works: Yubing, Volcano Cup, Xu Xiake Platform, NewsPulse, GraphRAG QA System.
- Add MiraclePlus AI Mapping workflow as a sanitized Experience highlight, not a portfolio card, unless there is a public artifact.
- Publish CV only after removing phone number and any non-public details.
- Start with text-only portfolio cards plus existing links, then add thumbnails once assets are available.
- Keep all new content bilingual.

