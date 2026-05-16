import './Experience.css'

interface Job {
  company: string
  role: string
  type: string
  period: string
  location: string
  current: boolean
  highlights: string[]
  tags: string[]
}

const jobs: Job[] = [
  {
    company: 'ITSMarawi (via SprintRay & GetNeer)',
    role: 'Software Engineer',
    type: 'Remote',
    period: 'May 2025 – Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Collaborated under executive leadership and VP of Technology at SprintRay as an Associate Software Engineer.',
      "Contributed to a mobile application replicating and extending SprintRay's web portal with feature parity and optimized mobile UX.",
      'Worked with cross-functional teams (backend, design, product) to align mobile features with existing web workflows.',
      "Supported GetNeer's web portal development, maintaining scalable architecture and improving usability.",
      'Enhanced system performance, API integrations, and overall platform stability.',
    ],
    tags: ['React Native', 'Ionic', 'Vue.js', 'REST APIs', 'Mobile Dev'],
  },
  {
    company: 'Seven365 Pte Ltd.',
    role: 'Web Developer',
    type: 'Remote',
    period: 'Oct 2024 – May 2025',
    location: 'Remote (Singapore)',
    current: false,
    highlights: [
      'Led design, development, and deployment of high-quality software solutions end-to-end.',
      'Provided technical leadership and mentorship to junior developers.',
      'Drove adoption of new technologies and best development practices within the team.',
      'Wrote clean, maintainable code across the full software development lifecycle.',
      'Contributed to architectural and design decisions for scalable software.',
    ],
    tags: ['React', 'Node.js', 'NestJS', 'PostgreSQL', 'Tech Lead'],
  },
  {
    company: 'WE CARE Office, MSU–IIT',
    role: 'Computer Programmer I',
    type: 'On-site',
    period: 'Sep 2022 – Oct 2024',
    location: 'Iligan City, Philippines',
    current: false,
    highlights: [
      'Created and updated the web portfolio for the WE CARE Office including the Times Higher Education (THE) Website Portfolio.',
      'Assisted in database management for the WE CARE Office.',
      'Responsible for Micro and Macro IT Services within the office.',
      'Troubleshot and maintained faulty office equipment.',
      'Served as Technical Personnel in programs, projects, and activities of the office.',
    ],
    tags: ['Web Development', 'Database Management', 'IT Services', 'THE Portfolio'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">A journey through impactful roles in tech</p>
        </div>

        <div className="timeline">
          {jobs.map((job, idx) => (
            <div key={idx} className={`timeline-item ${job.current ? 'current' : ''}`}>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                {idx < jobs.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="job-card">
                <div className="job-header">
                  <div>
                    <div className="job-company">{job.company}</div>
                    <div className="job-meta">
                      <span className="job-role">{job.role}</span>
                      <span className="meta-sep">·</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                  <div className="job-period-wrap">
                    {job.current && <span className="current-badge">Current</span>}
                    <div className="job-period">{job.period}</div>
                    <div className="job-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {job.location}
                    </div>
                  </div>
                </div>

                <ul className="job-highlights">
                  {job.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="highlight-bullet" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="job-tags">
                  {job.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
