import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCog, FaIndustry, FaShieldAlt, FaTruck, FaWrench, FaChartLine, FaAward, FaUsers, FaGlobe, FaArrowRight } from 'react-icons/fa'

const services = [
  { icon: <FaCog size={32} />, title: 'Heavy Machinery', desc: 'State-of-the-art industrial machines engineered for maximum output and durability.' },
  { icon: <FaWrench size={32} />, title: 'Steel Fabrication', desc: 'Precision steel fabrication with CNC-grade accuracy for structural and industrial components.' },
  { icon: <FaTruck size={32} />, title: 'Equipment Supply', desc: 'End-to-end supply chain delivering industrial equipment on time, every time.' },
  { icon: <FaShieldAlt size={32} />, title: 'Maintenance & Safety', desc: 'ISO-certified maintenance programs ensuring peak performance and safety compliance.' },
  { icon: <FaChartLine size={32} />, title: 'Engineering Consulting', desc: 'Expert advisory services helping industries optimize operations and reduce downtime.' },
  { icon: <FaIndustry size={32} />, title: 'Plant Installation', desc: 'Full-scale industrial plant setup including design, civil work, and commissioning.' },
]

const stats = [
  { number: '25+', label: 'Years Experience' },
  { number: '100+', label: 'Projects Completed' },
  { number: '20+', label: 'Expert Engineers' },
  { number: '15+', label: 'Countries Served' },
]

const marqueeText = '⚙ HEAVY MACHINERY ⚙ STEEL FABRICATION ⚙ PRECISION ENGINEERING ⚙ INDUSTRIAL SOLUTIONS ⚙ PLANT INSTALLATION ⚙ CNC EQUIPMENT ⚙ '

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0808 40%, #0a0a0a 100%)',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: '90px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(192,57,43,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,57,43,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'absolute', top: '12%', right: '8%', opacity: 0.06 }}>
          <FaCog size={220} color="var(--red)" className="gear-spin" />
        </div>
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', opacity: 0.04 }}>
          <FaCog size={160} color="var(--red)" className="gear-spin-reverse" />
        </div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="section-badge mb-3">Est. 2000 — Industrial Leader</div>
              <h1 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 700, lineHeight: 1,
                letterSpacing: '2px', textTransform: 'uppercase',
                color: '#fff', marginBottom: '24px',
              }}>
                NAEEM<br /><span style={{ color: 'var(--red)' }}>ENGINEERING</span><br />WORKS
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '520px', marginBottom: '36px' }}>
                Naeem Engineering Works (NEW) delivers precision-engineered Automobile solutions — from heavy machinery to complete plant installations. Trusted by 100+ projects across 15 countries.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <NavLink to="/products" className="btn-industrial">
                  Explore Products <FaArrowRight style={{ marginLeft: 8 }} />
                </NavLink>
                <NavLink to="/contact" className="btn-outline-industrial">Get Free Quote</NavLink>
              </div>
              <div className="d-flex flex-wrap gap-4 mt-5">
                {stats.slice(0, 3).map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: 'var(--red)', lineHeight: 1 }}>{s.number}</div>
                    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.7rem', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-end">
              <div style={{ width: '420px', height: '480px', position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, var(--black-soft), var(--gray-dark))',
                  border: '1px solid var(--border)',
                  clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem', letterSpacing: '4px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                      25 Years of<br />Engineering
                    </div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute', bottom: -20, left: -20,
                  background: 'var(--red)', padding: '16px 24px',
                  clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>ISO</div>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.7rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, var(--black), transparent)' }} />
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-content">{marqueeText.repeat(4)}</div>
      </div>

      {/* SERVICES */}
      <section className="section-pad" style={{ background: 'var(--black-mid)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-badge">What We Do</div>
            <h2 className="section-title">NEW <span className="red">CAPABILITIES</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '16px auto 0' }}>
              Comprehensive industrial services designed to keep your operations running at peak efficiency.
            </p>
          </div>
          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="industrial-card h-100" style={{ padding: '32px 28px' }}>
                  <div style={{ color: 'var(--red)', marginBottom: 16 }}>{s.icon}</div>
                  <h5 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.15rem', letterSpacing: '1px', color: '#fff', marginBottom: 10 }}>{s.title}</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.8 }}>{s.desc}</p>
                  <div style={{ marginTop: 16, color: 'var(--red)', fontSize: '0.8rem', letterSpacing: '2px', fontFamily: 'Rajdhani, sans-serif', textTransform: 'uppercase' }}>Learn More →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, var(--black) 0%, #1a0505 50%, var(--black) 100%)',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div className="row g-4 text-center">
            {stats.map((s, i) => (
              <div key={i} className="col-6 col-lg-3">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="section-badge">Why NEW</div>
              <h2 className="section-title">BUILT FOR <span className="red">RESULTS</span></h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: 28 }}>
                For over three decades, Naeem Engineering Works has been the backbone of automobile operations. Our commitment to quality is non-negotiable.
              </p>
              {[
                { icon: <FaAward />, title: 'ISO 9001:2015 Certified', desc: 'Every product meets rigorous international quality standards.' },
                { icon: <FaUsers />, title: '20+ Skilled Engineers', desc: 'Our certified professionals handle your toughest challenges.' },
                { icon: <FaGlobe />, title: 'Global Reach', desc: 'Operating across 15+ countries with local expertise.' },
              ].map((item, i) => (
                <div key={i} className="d-flex gap-3 mb-4">
                  <div style={{ width: 48, height: 48, background: 'rgba(192,57,43,0.15)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '1px', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
              <NavLink to="/about" className="btn-industrial mt-2">Learn About NEW</NavLink>
            </div>
            <div className="col-lg-6">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'On-Time Delivery', value: '100%' },
                  { label: 'Client Retention', value: '100%' },
                  { label: 'Safety Record', value: '100%' },
                  { label: 'Quality Pass Rate', value: '100%' },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'var(--black-soft)', border: '1px solid var(--border)',
                    padding: '28px 24px', textAlign: 'center',
                    clipPath: i % 2 === 0 ? 'polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)' : 'none',
                  }}>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.5rem', color: 'var(--red)', fontWeight: 700, lineHeight: 1 }}>{item.value}</div>
                    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: 8 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--red-dark) 0%, var(--red) 50%, var(--red-dark) 100%)',
        padding: '80px 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(0,0,0,0.08) 30px, rgba(0,0,0,0.08) 60px)` }} />
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>Ready to Start?</div>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '2px', color: '#fff', marginBottom: 16 }}>
            LET'S BUILD SOMETHING POWERFUL
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto 32px' }}>
            Contact our engineering team today for a free consultation and project quote.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <NavLink to="/contact" style={{
              background: '#fff', color: 'var(--red)', padding: '12px 36px',
              fontFamily: 'Oswald, sans-serif', fontSize: '1rem', letterSpacing: '2px',
              textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)', fontWeight: 600,
            }}>Get Free Quote</NavLink>
            <NavLink to="/products" style={{
              background: 'transparent', color: '#fff', padding: '10px 34px',
              fontFamily: 'Oswald, sans-serif', fontSize: '1rem', letterSpacing: '2px',
              textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block',
              border: '2px solid rgba(255,255,255,0.6)',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}>View Products</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
