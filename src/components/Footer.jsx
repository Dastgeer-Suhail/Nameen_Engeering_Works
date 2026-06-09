import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer-industrial">
      <div className="container">
        <div className="row g-4">

          {/* BRAND */}
          <div className="col-lg-5 col-md-6">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Leading Automobile solutions provider since 2000. We deliver precision-engineered machinery and heavy equipment for the world's most demanding environments.
            </p>
            <div className="d-flex mt-4">
              {[
                { icon: <FaFacebookF />, href: '#' },
                { icon: <FaTwitter />, href: '#' },
                { icon: <FaLinkedinIn />, href: '#' },
                { icon: <FaYoutube />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="social-icon">{s.icon}</a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-3 col-md-6">
            <p className="footer-heading">Quick Links</p>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/products', label: 'Products' },
              { to: '/contact', label: 'Contact' },
            ].map(l => (
              <NavLink key={l.to} to={l.to} className="footer-link">› {l.label}</NavLink>
            ))}
          </div>

          {/* CONTACT */}
          <div className="col-lg-4 col-md-6">
            <p className="footer-heading">Contact Info</p>
            <div className="d-flex gap-3 mb-3">
              <FaMapMarkerAlt style={{ color: 'var(--red)', marginTop: 4, flexShrink: 0 }} />
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Main Bund Road, Mozu Khokhar Village, Near Shad Bagh Underpass, Lahore, Pakistan</span>
            </div>
            <div className="d-flex gap-3 mb-3">
              <FaPhone style={{ color: 'var(--red)', marginTop: 4, flexShrink: 0 }} />
              <div>
                <a href="tel:+923004387427" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', display: 'block' }}>+92 300 4387427</a>
                <a href="tel:+923064929258" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none', display: 'block' }}>+92 306 4929258</a>
              </div>
            </div>
            <div className="d-flex gap-3 mb-3">
              <FaEnvelope style={{ color: 'var(--red)', marginTop: 4, flexShrink: 0 }} />
              <a href="mailto:info@new-industries.com" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>info@new-industries.com</a>
            </div>
          </div>

        </div>{/* end row */}

        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-2">
          <span>© 2026 Naeem Engineering Works - Pvt Ltd. All rights reserved.</span>
          <span style={{ color: 'var(--red)' }}>Precision. Power. Performance.</span>
        </div>

      </div>{/* end container */}
    </footer>
  )
}
