const portrait = (name) => `/assets/portraits/${name}`
const portfolio = (name) => `/assets/portfolio-pages/${name}`
const doc = (name) => `/assets/documents/${name}`

const works = [
  {
    title: 'Stillwater Prison',
    year: '2024',
    type: 'Speculative Spatial Narrative',
    cover: portfolio('stillwater-render.webp'),
    accent: portfolio('stillwater-board-01.webp'),
    text:
      'A spatial system around isolation, water, psychological pressure and healing. The project uses architectural drawing, atmosphere studies and narrative sequencing to turn emotion into inhabitable space.',
    cn: '围绕孤独、水、心理压力与疗愈展开的空间叙事系统。通过建筑图纸、氛围研究与连续场景，把情绪转译为空间体验。',
    boards: ['stillwater-board-01.webp', 'stillwater-board-02.webp', 'stillwater-board-03.webp', 'stillwater-board-04.webp', 'stillwater-render.webp'],
  },
  {
    title: 'The Rise of Qin State',
    year: '2024',
    type: 'Interactive Interior / Game Space',
    cover: portfolio('qin-render.webp'),
    accent: portfolio('qin-board-01.webp'),
    text:
      'An interactive interior project reimagining the Mausoleum of the First Qin Emperor through historical storytelling, level-based experience design and cinematic spatial staging.',
    cn: '以秦始皇陵为叙事原型的交互式室内空间项目，结合历史叙事、关卡体验与电影感场景组织。',
    boards: ['qin-cover.webp', 'qin-masterplan.webp', 'qin-board-01.webp', 'qin-board-02.webp', 'qin-board-03.webp', 'qin-render.webp'],
  },
  {
    title: 'Residential & Commercial Practice',
    year: '2020-2023',
    type: 'Real Project / Design Practice',
    cover: portfolio('profile-page.webp'),
    accent: portfolio('portfolio-contents.webp'),
    text:
      'Built from client communication, site measurement, layout drawing, material coordination, model making and visual presentation in high-end residential and interior design practice.',
    cn: '来自真实项目中的量房、放图、客户沟通、材料选型、模型制作与效果表达经验。',
    boards: ['profile-page.webp', 'portfolio-contents.webp', 'portfolio-cover.webp'],
  },
]

const timeline = [
  ['2019-2023', 'Capital Normal University Kede College', 'BA Environmental Design / Interior Design'],
  ['2020-2021', 'Shangceng Villa Decoration Company', 'Assistant Designer, high-end residential interiors and client presentation'],
  ['2021-2022', 'Huitu Architectural Design Company', 'Design intern, exhibition space and environmental design support'],
  ['2023', 'Beijing Institute of Architectural Design', 'Interior design assistant, early-stage layout and presentation drawings'],
  ['2024-2025', 'University of Glasgow / Glasgow School of Art', 'MA Interior Spatial Design, narrative environment and spatial research'],
  ['Practice', 'Alignment International Architectural Design Institute (Beijing)', 'Designer, interior and architectural design communication'],
]

const skills = ['AutoCAD', 'SketchUp', 'Enscape', 'Photoshop', 'InDesign', '3DMax', 'Lumion', 'V-Ray', 'Premiere']

const identity = [
  ['life-02.webp', 'London / Dusk'],
  ['life-05.webp', 'Paris / Landmark Night'],
  ['life-10.webp', 'London / River Light'],
  ['life-07.webp', 'Snow / Pressure'],
  ['life-11.webp', 'Coast / Clarity'],
  ['life-14.webp', 'Paris / Interior Night'],
  ['life-01.webp', 'Edinburgh / Street'],
  ['life-13.webp', 'Ski / Motion'],
]

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">EJ</a>
        <nav aria-label="Primary navigation">
          <a href="#works">Works</a>
          <a href="#identity">Identity</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="heroBg" src={portrait('life-14-wide.webp')} alt="Eddie Jiang in an atmospheric night setting" />
        <div className="heroShade" />
        <div className="ambientOrb orbOne" />
        <div className="ambientOrb orbTwo" />
        <div className="heroCopy">
          <div className="systemBar">
            <span>Portfolio OS</span>
            <span>UK / China</span>
            <span>2026</span>
          </div>
          <p className="eyebrow">Spatial Designer / Interior Designer / Narrative Environment Designer</p>
          <h1>Jiang Haifeng <span>Eddie Jiang</span></h1>
          <p className="hanzi">蒋海峰</p>
          <p className="lead">Designing spaces, stories and memorable visual atmospheres.</p>
          <p className="leadCn">室内与空间设计师。关注空间叙事、视觉氛围、材料表达与沉浸式体验，希望通过设计让空间不仅被使用，也被记住。</p>
          <div className="actions">
            <a href="#works">View Works</a>
            <a href={doc('eddie-jiang-cv.pdf')} download>Download CV</a>
            <a href="mailto:16624748842@163.com">Contact</a>
          </div>
        </div>
        <figure className="heroPortrait">
          <img src={portrait('life-05.webp')} alt="Eddie Jiang in Paris at night" />
          <figcaption>Spatial atmosphere, city memory and personal identity.</figcaption>
        </figure>
        <div className="floatingDock" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
        </div>
      </section>

      <section className="about" id="about">
        <div>
          <p className="sectionLabel">About / 关于</p>
          <h2>空间不是背景，而是一种能被记住的叙事方式。</h2>
        </div>
        <div className="aboutText">
          <p>
            Eddie Jiang is a spatial and interior designer focusing on narrative environments, visual atmosphere, material expression and immersive spatial experience.
          </p>
          <p>
            His practice moves between interior design, architectural spatial research, modelling, rendering and project communication, combining design thinking with a strong visual identity shaped by cities, travel and cinematic night scenes.
          </p>
          <p>
            蒋海峰的作品关注室内空间、建筑环境、场景叙事与视觉气质之间的关系，强调空间的情绪、记忆点和可传播性。
          </p>
        </div>
      </section>

      <section className="works" id="works">
        <div className="sectionHead">
          <p className="sectionLabel">Selected Works</p>
          <h2>Portfolio projects presented as architectural stories.</h2>
        </div>
        <div className="workGrid">
          {works.map((work, index) => (
            <article className="workCard" key={work.title}>
              <div className="workVisual">
                <div className="glassTop">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{work.year}</span>
                  <span>Case View</span>
                </div>
                <img className="workCover" src={work.cover} alt={`${work.title} portfolio cover`} />
              </div>
              <div className="workInfo">
                <div className="workMeta">
                  <span>{work.year}</span>
                  <span>{work.type}</span>
                </div>
                <h3>{work.title}</h3>
                <p>{work.text}</p>
                <p className="cn">{work.cn}</p>
                <a href={`#${work.title.replaceAll(' ', '-').toLowerCase()}`}>View Case</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {works.slice(0, 2).map((work) => (
        <section className="caseStudy" id={work.title.replaceAll(' ', '-').toLowerCase()} key={work.title}>
          <div className="caseIntro">
            <p className="sectionLabel">{work.year} / {work.type}</p>
            <h2>{work.title}</h2>
            <p>{work.text}</p>
          </div>
          <div className="caseHero">
            <div className="caseChrome">
              <span>{work.title}</span>
              <span>{work.type}</span>
            </div>
            <img src={work.accent} alt={`${work.title} main board`} />
          </div>
          <div className="boardRail">
            {work.boards.map((board) => (
              <img key={board} src={portfolio(board)} alt={`${work.title} portfolio board`} />
            ))}
          </div>
        </section>
      ))}

      <section className="practice">
        <div>
          <p className="sectionLabel">Experience Timeline</p>
          <h2>From residential practice to narrative spatial research.</h2>
        </div>
        <div className="timelineList">
          {timeline.map(([time, title, detail]) => (
            <article key={`${time}-${title}`}>
              <span>{time}</span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills">
        <div>
          <p className="sectionLabel">Skills</p>
          <h2>Drawing, modelling, atmosphere, editorial layout and moving image.</h2>
        </div>
        <div className="skillGrid">
          {skills.map((skill, index) => (
            <div className="skillCell" key={skill}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="identity" id="identity">
        <div className="sectionHead">
          <p className="sectionLabel">Gallery / Identity</p>
          <h2>Travel, night light, snow and personal presence as part of the design identity.</h2>
        </div>
        <div className="identityGrid">
          {identity.map(([src, label]) => (
            <figure key={src}>
              <img src={portrait(src)} alt={label} />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="sectionLabel">Contact</p>
          <h2>Jiang Haifeng / Eddie Jiang</h2>
          <p>Location: UK / China</p>
        </div>
        <div className="footerLinks">
          <a href="mailto:16624748842@163.com">Email</a>
          <a href={doc('eddie-jiang-cv.pdf')} download>Download CV</a>
          <a href={doc('eddie-jiang-portfolio.pdf')} download>Portfolio PDF</a>
          <a href="#top">Back to Top</a>
        </div>
      </footer>
    </main>
  )
}

export default App
