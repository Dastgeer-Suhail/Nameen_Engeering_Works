import { NavLink } from 'react-router-dom'
import { FaIndustry, FaAward, FaUsers, FaCog, FaHandshake, FaCheckCircle } from 'react-icons/fa'

const team = [
  { name: 'Abraiz Naeem', role: 'Junior manufacturer' },
  { name: 'Azam Mumtaz', role: 'Senior manufacturer' },
  { name: 'Qasim Mumtaz', role: 'Accountant' },
]

const values = [
  { icon: <FaAward size={28} />, title: 'Quality First', desc: 'Every component is held to the highest international standards.' },
  { icon: <FaHandshake size={28} />, title: 'Integrity', desc: 'Transparent dealings and honest commitments to every client.' },
  { icon: <FaCog size={28} />, title: 'Innovation', desc: 'Constantly evolving our processes with cutting-edge technology.' },
  { icon: <FaUsers size={28} />, title: 'Teamwork', desc: 'A united team of engineers, managers, and specialists.' },
]

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <p className="hero-label mb-2">Who We Are</p>
          <h1>ABOUT <span style={{ color: 'var(--red)' }}>NEW</span></h1>
          <div className="red-divider" style={{ width: 80, marginTop: 16 }} />
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', marginTop: 16, lineHeight: 1.8 }}>
            25+ years of engineering expertise, delivering reliable industrial solutions for Pakistan's leading industries and global markets.
          </p>
          <nav style={{ marginTop: 24, fontFamily: 'Rajdhani, sans-serif', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>
            <NavLink to="/" style={{ color: 'var(--red)', textDecoration: 'none' }}>HOME</NavLink>
            <span style={{ margin: '0 10px' }}>›</span>
            ABOUT US
          </nav>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section-pad" style={{ background: 'var(--black-mid)' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="section-badge">Our Story</div>
              <h2 className="section-title">25 YEARS OF <span className="red">ENGINEERING</span></h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: 20 }}>
                Naeem Engineering Works (NEW) was born from a simple belief: Pakistani industry deserves world-class engineering. Since 2000, we've grown from a small workshop in Karachi into one of South Asia's most trusted industrial conglomerates.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: 28 }}>
                Today, with over 20 skilled engineers and technicians, NEW supplies precision machinery, fabricated steel, and industrial systems to clients across 15 countries.
              </p>
              {['PSQCA Registered Manufacturer', 'Over 100 Successful Project Deliveries'].map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-3 mb-2">
                  <FaCheckCircle color="var(--red)" />
                  <span style={{ color: 'var(--off-white)', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
              <NavLink to="/contact" className="btn-industrial mt-4">Work With Us</NavLink>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  { icon: <FaIndustry size={36} />, label: 'Mission', text: 'To engineer the future of industry by delivering superior quality, reliable machinery, and comprehensive industrial solutions that power economies.' },
                  { icon: <FaAward size={36} />, label: 'Vision', text: 'To be the most trusted industrial partner across Asia and the Middle East, recognized for excellence, integrity, and innovation.' },
                ].map((item, i) => (
                  <div key={i} className="col-12">
                    <div style={{
                      background: 'var(--black-soft)', border: '1px solid var(--border)',
                      padding: '28px 24px', display: 'flex', gap: 20, alignItems: 'flex-start',
                    }}>
                      <div style={{ color: 'var(--red)', flexShrink: 0, marginTop: 4 }}>{item.icon}</div>
                      <div>
                        <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.1rem', letterSpacing: '2px', color: 'var(--red)', textTransform: 'uppercase', marginBottom: 8 }}>{item.label}</div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.8, margin: 0 }}>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad" style={{ background: 'var(--black-mid)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-badge">What Drives Us</div>
            <h2 className="section-title">OUR CORE <span className="red">VALUES</span></h2>
          </div>
          <div className="row g-4">
            {values.map((v, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="industrial-card text-center" style={{ padding: '36px 24px', height: '100%' }}>
                  <div style={{ color: 'var(--red)', marginBottom: 16 }}>{v.icon}</div>
                  <h5 style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '1px', color: '#fff', marginBottom: 12 }}>{v.title}</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-badge">Leadership</div>
            <h2 className="section-title">MEET THE <span className="red">TEAM</span></h2>
          </div>
          <div className="row g-4 justify-content-center">
            {team.map((member, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="industrial-card text-center" style={{ padding: '36px 20px' }}>
                  <div style={{
                    width: 90, height: 90, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--red-dark), var(--gray-dark))',
                    border: '3px solid var(--red)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '2rem', fontWeight: 700, color: '#fff',
                  }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h5 style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '1px', color: '#fff', marginBottom: 4 }}>{member.name}</h5>
                  <div style={{ color: 'var(--red)', fontFamily: 'Rajdhani, sans-serif', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8 }}>{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
