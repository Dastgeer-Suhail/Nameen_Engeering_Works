import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className="navbar-industrial"
      style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.8)' : 'none' }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* DESKTOP LINKS */}
        <div className="d-none d-lg-flex align-items-center gap-2">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nav-link-industrial ${isActive ? 'active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn-industrial ms-3" style={{ fontSize: '0.8rem', padding: '8px 24px' }}>
            Get Quote
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler-industrial d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes color="var(--red)" /> : <FaBars color="white" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--black-mid)',
            borderTop: '1px solid var(--border)',
            padding: '20px 0',
          }}
        >
          <div className="container d-flex flex-column gap-2">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `nav-link-industrial ${isActive ? 'active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn-industrial mt-2 text-center" onClick={() => setMenuOpen(false)}>
              Get Quote
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
