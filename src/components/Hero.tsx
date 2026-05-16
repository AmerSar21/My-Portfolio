import { useEffect, useRef, useState } from 'react'
import profileImg from '../assets/profile.png'
import './Hero.css'

const roles = ['Fullstack Developer', 'Mobile App Developer', 'Web Developer', 'React & Node.js Engineer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = roles[roleIdx]
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 60)
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1))
        }, 35)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, typing, roleIdx])

  return (
    <section id="about" className="hero">
      {/* Background decorations */}
      <div className="hero-glow hero-glow--1" />
      <div className="hero-glow hero-glow--2" />
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for work
          </div>

          <h1 className="hero-name">
            Amer Hussein<br />
            <span className="hero-name--accent">Sarangani</span>
          </h1>

          <div className="hero-role">
            <span className="role-text">{displayed}</span>
            <span className="role-cursor" />
          </div>

          <p className="hero-bio">
            BS Information Technology graduate specializing in Database Systems,
            with hands-on experience building scalable mobile and web applications
            across the full stack — from React frontends to Node.js and .NET backends.
          </p>

          <div className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Marawi City, Philippines
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn btn--primary">
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#experience" className="btn btn--secondary">
              View Work
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/AmerSar21" target="_blank" rel="noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:amersarangani22@gmail.com" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
            <a href="tel:09656547798" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
              </svg>
              Call
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-ring" />
          <div className="hero-image-card">
            <img src={profileImg} alt="Amer Hussein Sarangani" className="hero-image" />
          </div>
          <div className="hero-image-badge">
            <span className="xp-number">3+</span>
            <span className="xp-label">Years of<br/>Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
