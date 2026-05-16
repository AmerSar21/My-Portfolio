import { useEffect, useRef, useState } from 'react'
import './Skills.css'

interface SkillGroup {
  category: string
  icon: string
  skills: { name: string; level: number }[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / React Native', level: 92 },
      { name: 'Vue.js / Quasar', level: 85 },
      { name: 'AngularJS', level: 78 },
      { name: 'Ionic Framework', level: 82 },
      { name: 'TypeScript', level: 88 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'NestJS', level: 85 },
      { name: 'ASP.NET (C#)', level: 75 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST API Design', level: 92 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'DynamoDB (AWS)', level: 72 },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    skills: [
      { name: 'Technical Leadership', level: 82 },
      { name: 'Team Collaboration', level: 90 },
      { name: 'Project Management', level: 80 },
      { name: 'Mentorship', level: 78 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), 200)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-label">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Abilities</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-sub">Technologies I work with daily</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.category} className="skill-group">
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <span className="skill-group-name">{group.category}</span>
              </div>
              <div className="skill-list">
                {group.skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
