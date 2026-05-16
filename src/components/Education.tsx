import './Education.css'

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    major: 'Database Systems',
    school: 'Mindanao State University – Marawi',
    location: 'Marawi City, Lanao del Sur',
    faculty: 'College of Information Technology',
    period: '2018 – 2022',
    icon: '🎓',
  },
  {
    degree: 'Secondary & Primary Education',
    major: '',
    school: 'Ibn Siena Integrated School Foundation',
    location: 'Marawi City, Lanao del Sur',
    faculty: '',
    period: '2006 – 2014',
    icon: '📚',
  },
]

const references = [
  {
    name: 'Rosario L. Reserva',
    role: 'Director of Extension',
    org: 'WE CARE Office, MSU-IIT',
    contact: 'rosario.reserva@g.msuiit.edu.ph',
    type: 'email',
  },
  {
    name: 'Lucman Abdulrachman',
    role: 'Founder',
    org: 'ITSMarawi',
    contact: '09176342274',
    type: 'phone',
  },
]

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">Education & References</h2>
          <p className="section-sub">Academic foundations and professional endorsements</p>
        </div>

        <div className="edu-grid">
          <div>
            <h3 className="sub-heading">Academic History</h3>
            <div className="edu-list">
              {education.map((e, i) => (
                <div key={i} className="edu-card">
                  <div className="edu-icon">{e.icon}</div>
                  <div className="edu-body">
                    <div className="edu-degree">{e.degree}</div>
                    {e.major && <div className="edu-major">Major: {e.major}</div>}
                    <div className="edu-school">{e.school}</div>
                    {e.faculty && <div className="edu-faculty">{e.faculty}</div>}
                    <div className="edu-meta">
                      <span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {e.location}
                      </span>
                      <span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        {e.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="sub-heading">References</h3>
            <div className="ref-list">
              {references.map((r, i) => (
                <div key={i} className="ref-card">
                  <div className="ref-avatar">
                    {r.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                  </div>
                  <div className="ref-body">
                    <div className="ref-name">{r.name}</div>
                    <div className="ref-title">{r.role} · {r.org}</div>
                    <a
                      href={r.type === 'email' ? `mailto:${r.contact}` : `tel:${r.contact}`}
                      className="ref-contact"
                    >
                      {r.type === 'email' ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      ) : (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      )}
                      {r.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
