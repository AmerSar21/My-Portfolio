import './TechStack.css'

const techs = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'AngularJS', icon: '🔴' },
  { name: 'React Native', icon: '📱' },
  { name: 'Ionic', icon: '⚡' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'NestJS', icon: '🐈' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'ASP.NET', icon: '💜' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'DynamoDB', icon: '☁️' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'REST API', icon: '🔗' },
]

export default function TechStack() {
  const doubled = [...techs, ...techs]

  return (
    <div className="techstack">
      <div className="techstack-label">Tech Stack</div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <div key={i} className="tech-chip">
              <span className="tech-icon">{t.icon}</span>
              <span className="tech-name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
