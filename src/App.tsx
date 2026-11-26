import { useState, type FormEvent } from 'react';
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  Database,
  Figma,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Music2,
  NotebookText,
  Send,
  Sparkles,
  UserRound,
  type LucideIcon,
} from 'lucide-react';
import './styles.css';

type Language = 'id' | 'en';
type Section = 'about' | 'resume' | 'works' | 'blog' | 'contact';

const profile = {
  name: 'Andhi Irawan',
  role: 'Full-Stack Developer',
  email: 'info@andhiirawan.my.id',
  location: 'Jakarta, Indonesia',
  portrait: '/profile-portrait.svg',
};

const navItems: { id: Section; label: { id: string; en: string }; icon: LucideIcon }[] = [
  { id: 'about', label: { id: 'Tentang', en: 'About' }, icon: UserRound },
  { id: 'resume', label: { id: 'Resume', en: 'Resume' }, icon: BriefcaseBusiness },
  { id: 'works', label: { id: 'Karya', en: 'Works' }, icon: Code2 },
  { id: 'blog', label: { id: 'Tulisan', en: 'Blog' }, icon: NotebookText },
  { id: 'contact', label: { id: 'Kontak', en: 'Contact' }, icon: Send },
];

const copy = {
  id: {
    availability: 'Terbuka untuk proyek',
    download: 'Unduh CV',
    contact: 'Hubungi saya',
    sectionTitles: {
      about: 'Tentang saya',
      resume: 'Resume',
      works: 'Karya pilihan',
      blog: 'Catatan & ide',
      contact: 'Mari terhubung',
    },
    sectionSubtitles: {
      about: 'Merancang pengalaman digital yang terasa sederhana, berguna, dan berkesan.',
      resume: 'Perjalanan profesional, pembelajaran, dan keahlian yang terus berkembang.',
      works: 'Beberapa produk dan pengalaman digital yang pernah saya rancang dan bangun.',
      blog: 'Pikiran singkat seputar teknologi, desain produk, dan cara kerja yang lebih baik.',
      contact: 'Punya ide menarik? Saya senang mendengar cerita di baliknya.',
    },
    greeting: 'Halo, saya Andhi.',
    intro: 'Saya membangun produk digital dengan perhatian pada detail — dari antarmuka yang jernih hingga fondasi yang siap bertumbuh. Saya suka mengubah masalah kompleks menjadi pengalaman yang terasa ringan.',
    location: 'Lokasi',
    experience: 'Pengalaman',
    focus: 'Fokus utama',
    languages: 'Bahasa',
    years: '10+ tahun',
    stack: 'React · Node.js',
    languageValue: 'ID · EN',
    services: 'Apa yang saya kerjakan',
    service1Title: 'Web development',
    service1Text: 'Aplikasi web cepat, responsif, dan dibuat dengan fondasi yang mudah dirawat.',
    service2Title: 'Produk & UI',
    service2Text: 'Antarmuka produk yang terasa intuitif, konsisten, dan dekat dengan kebutuhan pengguna.',
    service3Title: 'Full-stack delivery',
    service3Text: 'Dari ide dan API hingga deployment — satu alur kerja, tanpa kehilangan konteks.',
    stackTitle: 'Teknologi yang saya gunakan',
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'Design systems'],
    experienceTitle: 'Pengalaman',
    educationTitle: 'Pendidikan & pengembangan',
    educationText: 'Pembelajaran berkelanjutan melalui produk nyata, kolaborasi lintas disiplin, dan eksplorasi teknologi web modern.',
    present: 'Sekarang',
    timeline: [
      { date: '2022 — Sekarang', role: 'Full-Stack Developer', place: 'Produk digital · Remote', text: 'Memimpin implementasi fitur end-to-end, menyelaraskan kebutuhan produk dengan arsitektur yang tahan berkembang.' },
      { date: '2019 — 2022', role: 'React & Frontend Engineer', place: 'Studio digital · Jakarta', text: 'Membangun design system dan pengalaman web yang cepat, aksesibel, serta konsisten di berbagai perangkat.' },
      { date: '2016 — 2019', role: 'Web Developer', place: 'Proyek kolaboratif', text: 'Mengawali perjalanan di web melalui situs, dashboard, dan aplikasi interaktif untuk beragam kebutuhan.' },
    ],
    projects: [
      { number: '01', category: 'SaaS · Dashboard', title: 'Northstar Analytics', text: 'Dashboard analitik yang mengubah metrik kompleks menjadi keputusan yang lebih jelas.', tone: 'mint' },
      { number: '02', category: 'E-commerce · UI', title: 'Forma Objects', text: 'Pengalaman belanja editorial untuk brand desain rumah yang tumbuh cepat.', tone: 'sand' },
      { number: '03', category: 'Product · Web app', title: 'Orbit Workspace', text: 'Ruang kerja kolaboratif yang menjaga tim kecil tetap selaras dan fokus.', tone: 'lilac' },
      { number: '04', category: 'Brand · Portfolio', title: 'Studio Mono', text: 'Situs portofolio yang ringan dan berani untuk studio kreatif independen.', tone: 'peach' },
    ],
    articles: [
      { category: 'PRODUK & DESAIN', date: '6 menit baca', title: 'Antarmuka yang baik terasa lebih sederhana dari masalahnya', excerpt: 'Catatan tentang mengurangi beban kognitif tanpa mengorbankan kemampuan.' },
      { category: 'ENGINEERING', date: '8 menit baca', title: 'Design system kecil yang bisa berkembang bersama tim', excerpt: 'Mulai dari token, komponen, hingga kebiasaan yang membuat sistem tetap berguna.' },
      { category: 'PROSES', date: '5 menit baca', title: 'Ritual kecil untuk menjaga kualitas di setiap rilis', excerpt: 'Cara praktis membangun ritme kerja yang lebih tenang dan konsisten.' },
    ],
    nameLabel: 'Nama',
    emailLabel: 'Email',
    messageLabel: 'Pesan',
    namePlaceholder: 'Nama lengkap Anda',
    emailPlaceholder: 'nama@email.com',
    messagePlaceholder: 'Ceritakan sedikit tentang proyek atau ide Anda…',
    send: 'Kirim pesan',
    formNote: 'Formulir ini akan membuka aplikasi email Anda.',
    formSent: 'Draf email Anda sedang disiapkan.',
    emailMe: 'Kirim email',
    footer: 'Dibuat dengan rasa ingin tahu dan banyak kopi.',
    readMore: 'Baca selengkapnya',
    viewProject: 'Lihat proyek',
    resumeLabel: 'RINGKASAN KARIER',
    educationLabel: 'BELAJAR SEPANJANG HAYAT',
    projectLabel: 'PROYEK TERPILIH',
    blogLabel: 'IDE TERBARU',
    contactLabel: 'MULAI PERCAKAPAN',
  },
  en: {
    availability: 'Open to projects',
    download: 'Download CV',
    contact: 'Get in touch',
    sectionTitles: {
      about: 'About me',
      resume: 'Resume',
      works: 'Selected work',
      blog: 'Notes & ideas',
      contact: "Let's connect",
    },
    sectionSubtitles: {
      about: 'Crafting digital experiences that feel simple, useful, and memorable.',
      resume: 'A professional journey shaped by practice, curiosity, and steady growth.',
      works: 'A selection of digital products and experiences I have designed and built.',
      blog: 'Thoughts on technology, product design, and finding a better way to work.',
      contact: "Have an interesting idea? I'd love to hear the story behind it.",
    },
    greeting: "Hello, I'm Andhi.",
    intro: 'I build digital products with care for the details — from clear interfaces to foundations ready to grow. I enjoy turning complex problems into experiences that feel effortless.',
    location: 'Location',
    experience: 'Experience',
    focus: 'Core focus',
    languages: 'Languages',
    years: '10+ years',
    stack: 'React · Node.js',
    languageValue: 'ID · EN',
    services: 'What I do',
    service1Title: 'Web development',
    service1Text: 'Fast, responsive web apps built on foundations that are a pleasure to maintain.',
    service2Title: 'Product & UI',
    service2Text: 'Intuitive, consistent product interfaces shaped around real user needs.',
    service3Title: 'Full-stack delivery',
    service3Text: 'From idea and API to deployment — one connected workflow, end to end.',
    stackTitle: 'Tools of the trade',
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'Design systems'],
    experienceTitle: 'Experience',
    educationTitle: 'Education & growth',
    educationText: 'Lifelong learning through real products, cross-functional collaboration, and exploration of the modern web.',
    present: 'Present',
    timeline: [
      { date: '2022 — Present', role: 'Full-Stack Developer', place: 'Digital products · Remote', text: 'Leading end-to-end feature delivery, aligning product needs with architecture designed to scale.' },
      { date: '2019 — 2022', role: 'React & Frontend Engineer', place: 'Digital studio · Jakarta', text: 'Built design systems and web experiences that are fast, accessible, and consistent across devices.' },
      { date: '2016 — 2019', role: 'Web Developer', place: 'Collaborative projects', text: 'Started out in web through websites, dashboards, and interactive apps for different needs.' },
    ],
    projects: [
      { number: '01', category: 'SaaS · Dashboard', title: 'Northstar Analytics', text: 'An analytics dashboard turning complex metrics into clearer decisions.', tone: 'mint' },
      { number: '02', category: 'E-commerce · UI', title: 'Forma Objects', text: 'An editorial shopping experience for a fast-growing home design brand.', tone: 'sand' },
      { number: '03', category: 'Product · Web app', title: 'Orbit Workspace', text: 'A collaborative workspace helping small teams stay aligned and focused.', tone: 'lilac' },
      { number: '04', category: 'Brand · Portfolio', title: 'Studio Mono', text: 'A lightweight, confident portfolio site for an independent creative studio.', tone: 'peach' },
    ],
    articles: [
      { category: 'PRODUCT & DESIGN', date: '6 min read', title: 'Good interfaces feel simpler than the problem', excerpt: 'A note on reducing cognitive load without sacrificing capability.' },
      { category: 'ENGINEERING', date: '8 min read', title: 'A small design system that can grow with your team', excerpt: 'From tokens and components to the habits that keep a system useful.' },
      { category: 'PROCESS', date: '5 min read', title: 'Small rituals for better quality in every release', excerpt: 'Practical ways to build a calmer, more consistent working rhythm.' },
    ],
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'name@email.com',
    messagePlaceholder: 'Tell me a little about your project or idea…',
    send: 'Send a message',
    formNote: 'This form will open your email application.',
    formSent: 'Your email draft is ready to send.',
    emailMe: 'Email me',
    footer: 'Made with curiosity and a lot of coffee.',
    readMore: 'Read more',
    viewProject: 'View project',
    resumeLabel: 'CAREER SNAPSHOT',
    educationLabel: 'LIFELONG LEARNING',
    projectLabel: 'SELECTED PROJECTS',
    blogLabel: 'LATEST IDEAS',
    contactLabel: 'START A CONVERSATION',
  },
} as const;

function App() {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [language, setLanguage] = useState<Language>('id');
  const [sent, setSent] = useState(false);
  const t = copy[language];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const sender = String(form.get('email') || '');
    const message = String(form.get('message') || '');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${sender})\n\n${message}`);
    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const goTo = (section: Section) => {
    setActiveSection(section);
    setSent(false);
  };

  const renderContent = () => {
    if (activeSection === 'about') {
      return (
        <div className="section-content about-content" key="about">
          <div className="intro-copy">
            <div className="intro-mark"><Sparkles size={16} /><span>FULL-STACK · PRODUCT-MINDED</span></div>
            <h2>{t.greeting}</h2>
            <p>{t.intro}</p>
          </div>

          <div className="fact-grid">
            <Fact icon={MapPin} label={t.location} value={profile.location} />
            <Fact icon={CalendarDays} label={t.experience} value={t.years} />
            <Fact icon={Code2} label={t.focus} value={t.stack} />
            <Fact icon={Music2} label={t.languages} value={t.languageValue} />
          </div>

          <div className="content-divider" />
          <SectionLabel>{t.services}</SectionLabel>
          <div className="service-grid">
            <ServiceCard icon={Code2} title={t.service1Title} text={t.service1Text} />
            <ServiceCard icon={Figma} title={t.service2Title} text={t.service2Text} />
            <ServiceCard icon={Database} title={t.service3Title} text={t.service3Text} />
          </div>
          <div className="skills-row">
            <SectionLabel>{t.stackTitle}</SectionLabel>
            <div className="skill-tags">{t.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
          </div>
        </div>
      );
    }

    if (activeSection === 'resume') {
      return (
        <div className="section-content resume-content" key="resume">
          <div className="resume-column">
            <SectionLabel icon={BriefcaseBusiness}>{t.experienceTitle}</SectionLabel>
            <div className="timeline">
              {t.timeline.map((item, index) => (
                <article className="timeline-item" key={item.date}>
                  <div className="timeline-marker">{index === 0 ? <span className="marker-live" /> : <span />}</div>
                  <div className="timeline-copy">
                    <div className="timeline-date">{item.date}</div>
                    <h3>{item.role}</h3>
                    <p className="timeline-place">{item.place}</p>
                    <p className="timeline-description">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="learning-card">
            <div className="learning-icon"><GraduationCap size={19} /></div>
            <span className="mini-kicker">{t.educationLabel}</span>
            <h3>{t.educationTitle}</h3>
            <p>{t.educationText}</p>
            <div className="learning-note"><Check size={14} /> Curious by default</div>
          </aside>
          <div className="resume-skills">
            <SectionLabel>{t.stackTitle}</SectionLabel>
            <div className="skill-tags">{t.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
          </div>
        </div>
      );
    }

    if (activeSection === 'works') {
      return (
        <div className="section-content works-content" key="works">
          <div className="section-label-row"><SectionLabel>{t.projectLabel}</SectionLabel><span className="project-count">04 / 04</span></div>
          <div className="project-grid">
            {t.projects.map((project, index) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art art-${project.tone}`} aria-hidden="true">
                  <div className="art-window">
                    <div className="art-top"><i /><i /><i /><span>{index === 0 ? 'northstar.app' : index === 1 ? 'forma.studio' : index === 2 ? 'orbit.team' : 'studiomono.co'}</span></div>
                    <div className="art-layout">
                      <div className="art-sidebar"><b /><i /><i /><i /><i /></div>
                      <div className="art-main"><div className="art-heading" /><div className="art-subheading" /><div className="art-chart"><span /><span /><span /><span /><span /><span /><span /></div><div className="art-bottom"><i /><i /><i /></div></div>
                    </div>
                  </div>
                  <span className="art-number">{project.number}</span>
                </div>
                <div className="project-meta"><span>{project.category}</span><h3>{project.title}</h3><p>{project.text}</p><button type="button" className="text-link" onClick={() => goTo('contact')}>{t.viewProject}<ArrowUpRight size={14} /></button></div>
              </article>
            ))}
          </div>
        </div>
      );
    }

    if (activeSection === 'blog') {
      return (
        <div className="section-content blog-content" key="blog">
          <SectionLabel>{t.blogLabel}</SectionLabel>
          <div className="article-list">
            {t.articles.map((article, index) => (
              <article className="article-card" key={article.title}>
                <div className={`article-index index-${index + 1}`}><span>0{index + 1}</span><ArrowUpRight size={17} /></div>
                <div className="article-copy"><div className="article-meta"><span>{article.category}</span><i />{article.date}</div><h3>{article.title}</h3><p>{article.excerpt}</p><button type="button" className="text-link" onClick={() => goTo('contact')}>{t.readMore}<ArrowRight size={14} /></button></div>
              </article>
            ))}
          </div>
          <div className="blog-note"><Sparkles size={15} /><span>{language === 'id' ? 'Tulisan baru sedang diracik.' : 'A new note is brewing.'}</span></div>
        </div>
      );
    }

    return (
      <div className="section-content contact-content" key="contact">
        <div className="contact-aside">
          <div className="contact-icon"><Mail size={21} /></div>
          <SectionLabel>{t.contactLabel}</SectionLabel>
          <h2>{language === 'id' ? 'Ada ide di kepala?' : 'Have an idea in mind?'}</h2>
          <p>{language === 'id' ? 'Ceritakan sedikit. Kita mulai dari percakapan yang baik.' : "Tell me a little about it. We can start with a good conversation."}</p>
          <a className="email-link" href={`mailto:${profile.email}`}><span>{profile.email}</span><ArrowUpRight size={15} /></a>
          <div className="contact-location"><MapPin size={14} />{profile.location}</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>{t.nameLabel}<input name="name" type="text" placeholder={t.namePlaceholder} autoComplete="name" required /></label>
          <label>{t.emailLabel}<input name="email" type="email" placeholder={t.emailPlaceholder} autoComplete="email" required /></label>
          <label>{t.messageLabel}<textarea name="message" placeholder={t.messagePlaceholder} rows={4} required /></label>
          <div className="form-actions"><button className="button button-primary send-button" type="submit">{t.send}<ArrowUpRight size={16} /></button><span>{t.formNote}</span></div>
          {sent && <p className="form-status" role="status"><Check size={14} />{t.formSent}</p>}
        </form>
      </div>
    );
  };

  return (
    <main className="scene">
      <div className="scene-grid" aria-hidden="true" />
      <div className="scene-orb scene-orb-one" aria-hidden="true" />
      <div className="scene-orb scene-orb-two" aria-hidden="true" />
      <div className="site-stamp"><span className="stamp-mark">air</span><span>INDEPENDENT<br />PORTFOLIO</span></div>
      <div className="portfolio-layout">
        <nav className="side-nav" aria-label={language === 'id' ? 'Navigasi portofolio' : 'Portfolio navigation'}>
          <div className="nav-brand" aria-label="Andhi Irawan Portfolio">air<span>.</span></div>
          <div className="nav-links">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button key={id} className={`nav-link ${activeSection === id ? 'is-active' : ''}`} type="button" aria-current={activeSection === id ? 'page' : undefined} aria-label={label[language]} title={label[language]} onClick={() => goTo(id)}>
                <Icon size={17} strokeWidth={1.8} /><span>{label[language]}</span>
              </button>
            ))}
          </div>
          <div className="nav-footer"><span className="nav-dot" /><span>ONLINE<br />NOW</span></div>
        </nav>

        <aside className="profile-card" aria-label={language === 'id' ? 'Kartu profil' : 'Profile card'}>
          <div className="portrait-wrap">
            <img src={profile.portrait} alt={`Portrait of ${profile.name}`} />
            <div className="portrait-shade" />
            <span className="portrait-index">PROFILE — 01</span>
          </div>
          <div className="profile-info">
            <div className="profile-name-row"><div><h2>{profile.name}</h2><p>{profile.role}</p></div><span className="profile-status" title={t.availability}><i /></span></div>
            <div className="social-links" aria-label="Social links">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={15} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={15} /></a>
            </div>
            <div className="profile-actions">
              <a className="button button-light" href="/cv-andhi-irawan.txt" download>{t.download}<ArrowDownToLine size={15} /></a>
              <button className="button button-dark" type="button" onClick={() => goTo('contact')}>{t.contact}<ArrowUpRight size={15} /></button>
            </div>
          </div>
        </aside>

        <section className="content-panel" aria-live="polite">
          <header className="panel-head">
            <div className="panel-topline"><div className="crumb"><span>PORTFOLIO</span><i />{navItems.find((item) => item.id === activeSection)?.label[language].toUpperCase()}</div>
              <div className="head-controls"><span className="available-pill"><i />{t.availability}</span><div className="language-toggle" aria-label="Language selector"><button type="button" className={language === 'id' ? 'selected' : ''} aria-pressed={language === 'id'} onClick={() => setLanguage('id')}>ID</button><span>/</span><button type="button" className={language === 'en' ? 'selected' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button></div></div>
            </div>
            <h1>{t.sectionTitles[activeSection]}</h1>
            <p className="panel-subtitle">{t.sectionSubtitles[activeSection]}</p>
            <div className="header-rule"><span /></div>
          </header>
          <div className="panel-scroll" key={`${activeSection}-${language}`}>{renderContent()}</div>
          <footer className="panel-footer"><span>© 2026 {profile.name}</span><span>{t.footer}</span><a href={`mailto:${profile.email}`} aria-label={t.emailMe}><Mail size={15} /></a></footer>
        </section>
      </div>
      <div className="scene-caption"><span>DESIGNED TO FEEL</span><strong>01 / PERSONAL</strong><span className="caption-line" /></div>
    </main>
  );
}

function SectionLabel({ children, icon: Icon }: { children: React.ReactNode; icon?: LucideIcon }) {
  return <h2 className="section-label">{Icon && <Icon size={15} strokeWidth={1.8} />}{children}</h2>;
}

function Fact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return <div className="fact-card"><span className="fact-icon"><Icon size={15} /></span><div><span className="fact-label">{label}</span><strong>{value}</strong></div></div>;
}

function ServiceCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return <article className="service-card"><span className="service-icon"><Icon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="service-arrow" size={15} /></article>;
}

export default App;
