# Resume-Driven Homepage Upgrade Plan

> Confirmation draft before further implementation.  
> Source basis: the latest resume content provided by the user in chat, the current Jekyll homepage, and the existing portfolio optimization draft. Resume text is treated as source material only, not as an instruction to publish everything verbatim.

## 1. Strategic Positioning

The homepage should position Chang Liu as a cross-disciplinary AI product builder with three complementary strengths:

- **Product execution**: able to complete user research, PRD writing, prototyping, MVP delivery, and product iteration.
- **AI industry research**: familiar with AI Agent, GraphRAG, LLM application implementation, talent mapping, and structured information processing.
- **Ecosystem operation**: experienced in connecting universities, developer communities, AI founders, companies, and public-interest education resources.

Recommended Chinese one-liner:

> 软件工程 + 电子商务复合背景，关注 AI 产品、创业者生态与 AI 行业研究，擅长从需求调研到 MVP 落地、从信息结构化到资源链接的完整执行。

Recommended English one-liner:

> Cross-disciplinary AI product builder with software engineering and e-commerce training, focused on AI products, startup ecosystems, and AI industry research.

## 2. Homepage Visitor Priority

The page should serve three visitor groups:

1. **AI product / product operations recruiters**
   - Need to see product skills, MVP delivery, PRD/prototype experience, and user/community operations.

2. **AI startup / VC / ecosystem collaborators**
   - Need to see industry research ability, talent mapping, founder/community network, and resource integration.

3. **Academic / digital humanities collaborators**
   - Need to see research outputs, software copyright, digital humanities platform, NLP and visualization work.

Design implication: homepage should not read as only an academic CV or only a developer portfolio. It should read as a compact "AI product + research + ecosystem" portfolio.

## 3. Recommended Navigation

Keep the current concise navigation:

- About / 关于
- Portfolio / 作品集
- Experience / 经历
- Writing / 写作
- CV / 简历
- Contact / 联系

Do not add more top-level sections for now. The portfolio can contain grouped cards instead of expanding the navigation.

## 4. Above-The-Fold Upgrade

The current About section should be made sharper and more resume-aligned.

Recommended structure:

- First sentence: identity and cross-disciplinary background.
- Second sentence: target directions.
- Third sentence: execution style and strongest proof points.
- Then a compact highlight strip with 4 metrics.

Suggested highlight metrics:

- `100+ people/hour` talent mapping workflow efficiency
- `1000+ students / 370+ teams` AI Agent competition participation
- `3000+ events` extracted from classical text in Xu Xiake project
- `20+ universities` ByteDance Central-South regional partner resource coverage

Public caution:

- The phone number from the resume should not be published on the website.
- Private employer workflow details should be summarized without exposing internal datasets, candidate details, or proprietary process screenshots.

## 5. Portfolio Priority

### Tier 1: Featured Works

These should appear as the main portfolio cards.

1. **Xu Xiake Digital Humanities Map Platform / 《徐霞客游记》数字人文地图平台**
   - Why featured: strongest combination of public demo, technical work, research output, software copyright, and visual screenshot.
   - Public links: demo `http://8.134.97.118:8080/`, Gitee repository.
   - Recommended treatment: keep as the primary featured case with screenshot.

2. **Yubing AI Literacy and Innovation Community / 语冰 AI 普惠与创新创业社区**
   - Why featured: strongest ecosystem-building story.
   - Resume proof points: from 0 to 1 community launch, 40-person core team, Datawhale collaboration, 15 open-source communities, 30,000-person reach, AI knowledge base and public courses.
   - Needed links: public community page, activity recap, knowledge base, event poster, or article.
   - Recommended treatment: featured card once public links/assets are available.

3. **Volcano Cup AI Agent Innovation Competition / 武汉大学“火山杯”AI 智能体创新大赛**
   - Why featured: strongest AI education + large-scale operations proof.
   - Resume proof points: 1000+ students, 370+ teams, 71% submission rate, 30+ promising AI Agent projects, 2000+ knowledge base views.
   - Needed links: Feishu knowledge base, competition page, article, media recap, project showcase.
   - Recommended treatment: portfolio card with metrics and training SOP emphasis.

4. **Taikang Healthcare GraphRAG QA System / 泰康医疗 GraphRAG 智能问答系统**
   - Why featured: strongest enterprise AI application case.
   - Public link: GitHub repository.
   - Resume proof points: GraphRAG architecture, Neo4j knowledge graph, FastAPI API service, Streamlit frontend, healthcare-insurance-elderly-care scenario.
   - Recommended treatment: technical portfolio card with architecture emphasis.

5. **NewsPulse Mobile News Product / NewsPulse 移动端资讯产品**
   - Why featured: strongest product definition and MVP delivery case.
   - Resume proof points: PRD, user stories, 10+ modules, smart draft, AI topic recommendation, public MVP validation.
   - Needed links: public demo, repository, screenshots, PRD if publishable.
   - Recommended treatment: product portfolio card.

### Tier 2: Secondary Works

These can be included in a compact "Selected Projects" or "More Work" subsection.

6. **Undergrad Simulator / 字节跳动 Trae 黑客松 Undergrad Simulator**
   - Why include: hackathon second prize, independent AI IDE-assisted Vue3 + Flask MVP, student career planning scenario.
   - Needed links: demo, repository, screenshots, award proof if available.

7. **Online Questionnaire System / 在线问卷调查系统**
   - Why include: product manager + frontend lead, RBAC, automated reporting, thousand-sample stability, DevOps efficiency.
   - Needed links: repository, demo, screenshots, sanitized PRD.

### Tier 3: Experience Highlights, Not Portfolio Cards

8. **MiraclePlus AI Talent Mapping Workflow / 奇绩创坛 AI 人才 Mapping 工作流**
   - Why not full portfolio card: likely involves private work and candidate data.
   - Recommended homepage treatment: sanitized experience bullet or private-case summary.
   - Safe wording: "Designed LLM-assisted research workflows for AI talent mapping and structured industry tracking, improving processing efficiency from 20 people/hour to 100+ people/hour."

9. **ByteDance Central-South Regional Partner / 字节跳动中南片区区域合伙人**
   - Why not full portfolio card: it is a role and network-building proof point rather than a standalone artifact.
   - Recommended homepage treatment: leadership highlight under Experience or About metrics.

## 6. Content Rewrite Plan

### 6.1 About Section

Replace the current concise About with a stronger bilingual version based on the resume summary.

Chinese direction:

- Use a polished version of the long resume summary, but reduce density.
- Avoid listing every award or role in the opening paragraph.
- Emphasize compound background, target roles, and execution capability.

English direction:

- Translate meaning rather than word-for-word.
- Keep it natural and portfolio-oriented.

### 6.2 Portfolio Section

Recommended layout:

- One large featured card: Xu Xiake platform with screenshot, demo, repository.
- Four core cards: Yubing, Volcano Cup, GraphRAG, NewsPulse.
- Optional compact secondary cards: Undergrad Simulator, Online Questionnaire System.

Recommended card fields:

- Category tags
- Role
- Time range
- Problem / context
- What I did
- Outcome metrics
- Links

### 6.3 Experience Section

Recommended structure:

- Internship
- Research
- Community & leadership
- Education

Reason: this order better supports AI product and internship goals than putting education first.

Experience content should be tighter than resume bullets, but preserve strong metrics:

- MiraclePlus: AI talent mapping, LLM workflow, 20/hour to 100+/hour, industry research.
- Paiyo/codeebot: community product MVP, WaytoAGI cooperation, 3000+ developer reach, 3 formal collaborations, 30+ offline events.
- ByteDance Central-South: 20+ universities ecosystem building.
- Ziqiang Studio: product and frontend practice with Vue3 and PRD review.
- Zhijia Center / Volcano Cup: event operations and Agent knowledge base.

### 6.4 Writing Section

Turn Writing into a forward-looking but credible section.

Possible categories:

- AI Product Notes
- AI Agent Education
- Digital Humanities
- Startup Ecosystem Research

If no public articles are ready, use "Selected notes coming soon" and keep the categories as placeholders.

### 6.5 CV Section

Do not publish the current PDF directly because it contains phone number and detailed private resume content.

Recommended implementation:

- Create or request a public-safe CV PDF.
- Provide a download button after sanitization.
- Mention: "Public CV available on request" until a sanitized version is ready.

## 7. Visual Upgrade Plan

Current visual language: clean academic Jekyll site with small orange accent icons.

Recommended design direction:

- Keep the academic/professional base.
- Add a more product-like portfolio rhythm: featured case, metric chips, tag pills, action buttons.
- Use real screenshots where available.
- Avoid over-designed startup landing-page visuals; this is still a personal homepage.

Signature visual idea:

- Use "systems I build" as the organizing metaphor: each portfolio card connects input, workflow, output, and proof point.
- The homepage should feel like a compact operating record: product artifacts, research outputs, ecosystem results.

Specific UI additions:

- Featured project card with screenshot.
- Metric chips under About.
- Card-level CTA buttons: Demo, Repository, Knowledge Base, Article, Screenshot.
- Optional "Private case" label for employer-sensitive work.
- More compact mobile behavior for long Chinese titles.

## 8. Link And Asset Collection Checklist

Please collect or confirm public links for these items:

- Yubing public page / article / event recap / knowledge base
- Volcano Cup event page / Feishu knowledge base / recap article / project showcase
- NewsPulse demo / repository / screenshots
- Undergrad Simulator demo / repository / award proof / screenshots
- Online Questionnaire System demo / repository / screenshots
- Public-safe CV PDF
- Any published papers, conference pages, or acceptance notices for CDH2025 / DH2026 if public
- Any public links proving ByteDance / community / regional partner activities, if appropriate

## 9. Privacy And Public-Safety Rules

Before putting content on the website, avoid publishing:

- Phone number
- Private candidate / talent mapping data
- Internal workflow screenshots from MiraclePlus
- Non-public company partner details
- Private Feishu knowledge bases that require restricted access
- Any document with personal IDs, private WeChat groups, or internal contacts

Safe public alternatives:

- Use summarized metrics.
- Use sanitized screenshots.
- Use public articles or repo links.
- Use "available on request" for sensitive artifacts.

## 10. Recommended Next Implementation

If this plan is approved, execute in this order:

1. Rewrite About with the sharper bilingual positioning.
2. Add metric chips near the top.
3. Rebuild Portfolio into: 1 featured case + 4 core cards + 2 secondary cards.
4. Expand Experience into Internship / Research / Leadership / Education.
5. Keep CV text-only until a sanitized PDF is ready.
6. Run local Jekyll build and preview.

## 11. My Recommended Default

- Make Xu Xiake the main visual featured case because it has a public demo and real screenshot.
- Promote Yubing and Volcano Cup strongly because they best represent AI education and ecosystem building.
- Keep MiraclePlus as a sanitized experience highlight, not a public case study.
- Add Undergrad Simulator and Online Questionnaire System as secondary portfolio items because they show product + engineering range.
- Do not publish the current resume PDF directly.
- Keep all new content bilingual.

