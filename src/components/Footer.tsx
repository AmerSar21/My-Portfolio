import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>AHS<span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Amer Hussein Sarangani. Designed & built with ❤️
        </p>
        <p className="footer-stack">React · TypeScript · Vite</p>
      </div>
    </footer>
  )
}
