const image = (name) => `/assets/images/${name}`

const works = [
  {
    title: 'Stillwater Prison',
    year: '2025',
    type: 'Speculative Spatial System',
    image: image('work-stillwater-prison.webp'),
    description:
      'A speculative spatial project exploring isolation, water, depression and healing through an architectural narrative system.',
  },
  {
    title: 'The Rise of Qin State',
    year: '2024',
    type: 'Interactive Interior / Game Space',
    image: image('work-qin-state.webp'),
    description:
      'An interactive interior and game-based spatial project reimagining the Mausoleum of the First Qin Emperor through historical storytelling and level-based experience design.',
  },
  {
    title: 'Commercial Residence Study',
    year: '2023',
    type: 'Real Project / Commercial Space',
    image: image('work-commercial-space.webp'),
    description:
      'A refined commercial and residential placeholder for built projects, client communication, modelling, drawing coordination and material direction.',
  },
]

const timeline = [
  ['BA', 'Capital Normal University Kede College', 'Environmental / Interior Design'],
  ['MA', 'University of Glasgow / Glasgow School of Art', 'Interior Spatial Design'],
  ['Intern', 'Beijing Institute of Architectural Design', 'Spatial research and drawing support'],
  ['Assistant', 'Shangceng Villa Decoration Company', 'High-end residential design assistance'],
  ['Intern', 'Huitu Architectural Design Company', 'Concept, modelling and presentation support'],
  ['Designer', 'Alignment International Architectural Design Institute (Beijing)', 'Interior and architectural design practice'],
]

const skills = ['AutoCAD', 'SketchUp', 'Enscape', 'Photoshop', 'InDesign', '3DMax', 'Lumion', 'V-Ray', 'Premiere']

const gallery = [
  ['identity-travel.webp', 'Travel / Edge'],
  ['identity-snow.webp', 'Snow / Silence'],
  ['identity-atmosphere.webp', 'Night / Atmosphere'],
  ['identity-material.webp', 'Material / Detail'],
]

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">EJ</a>
        <nav aria-label="Primary navigation">
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroImage">
          <img src={image('hero-night-city.webp')} alt="Cinematic architectural night atmosphere" />
        </div>
        <div className="heroCopy">
          <p className="eyebrow">Spatial Identity / Interior Atmosphere / Narrative Environment</p>
          <h1>
            Jiang Haifeng
            <span>Eddie Jiang</span>
          </h1>
          <p className="hanzi">蒋海峰</p>
          <p className="lead">Designing spaces, stories and memorable visual atmospheres.</p>
          <div className="roles">
            <span>Spatial Designer</span>
            <span>Interior Designer</span>
            <span>Narrative Environment Designer</span>
          </div>
          <div className="actions">
            <a href="#works">View Works</a>
            <a href="/assets/documents/eddie-jiang-cv-preview.pdf" download>Download CV</a>
            <a href="mailto:hello@example.com">Contact</a>
          </div>
        </div>
      </section>

      <section className="introGrid" id="about">
        <div>
          <p className="sectionLabel">About / 关于</p>
          <h2>Spaces that are used, remembered and emotionally experienced.</h2>
        </div>
        <div className="aboutText">
          <p>
            Eddie Jiang is a spatial and interior designer focusing on narrative environments, visual atmosphere, material expression and immersive spatial experience.
          </p>
          <p>
            蒋海峰，室内与空间设计师。关注空间叙事、视觉氛围、材料表达与沉浸式体验，希望通过设计让空间不仅被使用，也被记住。
          </p>
          <div className="metaLine">
            <span>Interior Design</span>
            <span>Architectural Space</span>
            <span>Modelling & Rendering</span>
            <span>Project Communication</span>
          </div>
        </div>
      </section>

      <section className="works" id="works">
        <div className="sectionHead">
          <p className="sectionLabel">Selected Works</p>
          <h2>Architectural narratives, cinematic systems and refined commercial practice.</h2>
        </div>
        <div className="workGrid">
          {works.map((work) => (
            <article className="workCard" key={work.title}>
              <img src={work.image} alt={`${work.title} cover`} />
              <div className="workInfo">
                <div className="workMeta">
                  <span>{work.year}</span>
                  <span>{work.type}</span>
                </div>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <a href="#portfolio-pages">View Case</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolioPages" id="portfolio-pages">
        <p className="sectionLabel">Portfolio Extract</p>
        <div className="pageRail">
          {['portfolio-page-01.webp', 'portfolio-page-02.webp', 'portfolio-page-04.webp'].map((item) => (
            <img key={item} src={image(item)} alt="Portfolio page extract" />
          ))}
        </div>
      </section>

      <section className="timeline">
        <div className="sectionHead">
          <p className="sectionLabel">Experience Timeline</p>
          <h2>Education and practice across interior, architectural and narrative environments.</h2>
        </div>
        <div className="timelineList">
          {timeline.map(([tag, title, detail]) => (
            <article key={`${tag}-${title}`}>
              <span>{tag}</span>
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
          <h2>Tools for drawings, atmospheres, modelling, editorial presentation and moving image.</h2>
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

      <section className="identity">
        <div className="sectionHead">
          <p className="sectionLabel">Gallery / Identity</p>
          <h2>A quiet visual identity shaped by travel, weather, city light and material memory.</h2>
        </div>
        <div className="galleryGrid">
          {gallery.map(([src, label]) => (
            <figure key={src}>
              <img src={image(src)} alt={label} />
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
          <a href="mailto:hello@example.com">Email</a>
          <a href="/assets/documents/eddie-jiang-cv-preview.pdf" download>Download CV</a>
          <a href="/assets/documents/portfolio-sample-fog-house.pdf" download>Portfolio PDF</a>
          <a href="#top">Social Links</a>
        </div>
      </footer>
    </main>
  )
}

export default App
