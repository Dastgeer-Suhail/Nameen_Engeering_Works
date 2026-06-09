import { NavLink } from 'react-router-dom'
import { FaCheckCircle, FaCog, FaRulerCombined, FaArrowLeft, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const specs = [
  'Non Movable Screw System of Slide Motor',
  'Automatic Slide Lift Motor',
  'Variable Gear Feed / Variable Hydraulic Feed',
  'Exact Induction for Tool Cut Face',
  'Long Life Heavy Duty 2 B.S.W and 3 B.S.W Slides Screw',
  'Total Cast Iron Pillar and Body',
]

const workingCapacity = [
  { label: 'Bed Slide Feed', value: 'Hydraulic 38"' },
  { label: 'Feed Type', value: 'Variable Gear Feed' },
  { label: 'Max Distance (Chuck to Slide)', value: '24"' },
  { label: 'Maximum Width of Face', value: '15"' },
  { label: 'Max Cut per Round of Wheel', value: '0.007"' },
  { label: 'Gear Motor RPM', value: '900 & 1400 RPM' },
  { label: 'Tool Face RPM', value: '100 to 350 RPM' },
]

export default function HeadRefacerDetail() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ minHeight: '340px' }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="section-badge">Head Refacer</span>
            <span className="section-badge" style={{ background: 'var(--red)', color: '#fff' }}>Best Seller</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1 }}>
            HEAD <span style={{ color: 'var(--red)' }}>REFACER</span> MACHINE
          </h1>
          <div className="red-divider" style={{ width: 80, marginTop: 16 }} />
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', marginTop: 16, lineHeight: 1.8 }}>
            Precision head refacing machine for resurfacing cylinder heads and engine blocks.
            Engineered to international standards for optimal engine performance.
          </p>
          <nav style={{ marginTop: 24, fontFamily: 'Rajdhani, sans-serif', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>
            <NavLink to="/" style={{ color: 'var(--red)', textDecoration: 'none' }}>HOME</NavLink>
            <span style={{ margin: '0 10px' }}>›</span>
            <NavLink to="/products" style={{ color: 'var(--red)', textDecoration: 'none' }}>PRODUCTS</NavLink>
            <span style={{ margin: '0 10px' }}>›</span>
            HEAD REFACER MACHINE
          </nav>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section-pad" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="row g-5">

            {/* LEFT — IMAGE */}
            <div className="col-lg-5">
              <div style={{
                background: '#fff',
                borderRadius: 2,
                border: '1px solid var(--border)',
                overflow: 'hidden',
                position: 'sticky',
                top: 90,
              }}>
                {/* Main image */}
                <div style={{
                  height: 380,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24,
                  background: '#f8f8f8',
                }}>
                  <img
                    src="/images/surface-grinder.jpg"
                    alt="Head Refacer Machine"
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
                {/* Red accent bar */}
                <div style={{
                  background: 'linear-gradient(90deg, var(--red), var(--red-dark))',
                  padding: '12px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.75rem', letterSpacing: '2px', color: '#fff', fontWeight: 700 }}>
                    NEW CERTIFIED
                  </span>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.75rem', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)' }}>
                    ISO 9001:2015
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — DETAILS */}
            <div className="col-lg-7">

              {/* Back link */}
              <NavLink
                to="/products"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: 'var(--text-muted)', textDecoration: 'none',
                  fontFamily: 'Rajdhani, sans-serif', fontSize: '0.8rem',
                  letterSpacing: '2px', marginBottom: 32,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <FaArrowLeft style={{ fontSize: '0.7rem' }} /> BACK TO PRODUCTS
              </NavLink>

              {/* Product title */}
              <h2 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: '#fff',
                letterSpacing: '2px',
                marginBottom: 8,
              }}>
                Head Refacer Machine
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                Precision head refacing machine for resurfacing cylinder heads and engine blocks.
                Ensures perfect flatness and surface finish for optimal engine performance.
                All components manufactured to international standards.
              </p>

              <div className="red-divider" style={{ marginBottom: 40 }} />

              {/* SPECIFICATIONS */}
              <div style={{ marginBottom: 48 }}>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <FaCog style={{ color: 'var(--red)', fontSize: '1.1rem' }} />
                  <h4 style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '1.2rem',
                    letterSpacing: '3px',
                    color: '#fff',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}>
                    Specifications
                  </h4>
                </div>
                <p style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '2px',
                  color: 'var(--red)',
                  marginBottom: 20,
                  textTransform: 'uppercase',
                }}>
                  ★ All Based on International Standard
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 12,
                }}>
                  {specs.map((spec, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                      padding: '14px 18px',
                      background: 'var(--black-soft)',
                      border: '1px solid var(--border)',
                      borderLeft: '3px solid var(--red)',
                      transition: 'background 0.2s',
                    }}>
                      <FaCheckCircle style={{ color: 'var(--red)', fontSize: '0.9rem', marginTop: 2, flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        color: '#ddd',
                        lineHeight: 1.5,
                      }}>
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WORKING CAPACITY */}
              <div style={{ marginBottom: 48 }}>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <FaRulerCombined style={{ color: 'var(--red)', fontSize: '1.1rem' }} />
                  <h4 style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '1.2rem',
                    letterSpacing: '3px',
                    color: '#fff',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}>
                    Working Capacity
                  </h4>
                </div>
                <div style={{
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                }}>
                  {workingCapacity.map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      borderBottom: i < workingCapacity.length - 1 ? '1px solid var(--border)' : 'none',
                      background: i % 2 === 0 ? 'var(--black-soft)' : 'var(--black-mid)',
                    }}>
                      <div style={{
                        flex: '0 0 55%',
                        padding: '14px 20px',
                        borderRight: '1px solid var(--border)',
                        fontFamily: 'Rajdhani, sans-serif',
                        fontSize: '0.85rem',
                        letterSpacing: '1px',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        flex: 1,
                        padding: '14px 20px',
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: '0.95rem',
                        letterSpacing: '1px',
                        color: 'var(--red-light)',
                        fontWeight: 600,
                      }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="d-flex flex-wrap gap-3">
                <NavLink
                  to="/contact"
                  className="btn-industrial"
                  style={{ fontSize: '0.85rem', padding: '12px 28px' }}
                >
                  Request a Quote
                </NavLink>
                <a
                  href="https://wa.me/923004387427?text=I'm%20interested%20in%20the%20Head%20Refacer%20Machine"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#25D366',
                    color: '#fff',
                    padding: '12px 24px',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontSize: '0.85rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontWeight: 700,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <FaWhatsapp style={{ fontSize: '1.1rem' }} /> WhatsApp Us
                </a>
                <a
                  href="tel:+923004387427"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'transparent',
                    color: 'var(--text-muted)',
                    padding: '12px 24px',
                    border: '1px solid var(--border)',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontSize: '0.85rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontWeight: 700,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                >
                  <FaPhoneAlt style={{ fontSize: '0.9rem' }} /> Call Now
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section style={{
        background: 'var(--black-soft)',
        borderTop: '1px solid var(--border)',
        padding: '50px 0',
      }}>
        <div className="container text-center">
          <h3 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '1.6rem',
            letterSpacing: '2px',
            color: '#fff',
            marginBottom: 10,
          }}>
            NEED A CUSTOM CONFIGURATION?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
            Naeem Engineering Works builds machines to your exact specifications.
          </p>
          <NavLink to="/contact" className="btn-industrial">
            Contact Our Team
          </NavLink>
        </div>
      </section>
    </>
  )
}
