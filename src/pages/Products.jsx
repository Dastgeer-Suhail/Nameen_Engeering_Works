import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const categories = ['All', 'Head Refacer', 'Honing', 'Hydraulic', 'Rod Boring', 'Crankshaft']

const products = [
  {
    id: 1,
    name: 'Head Refacer Machine',
    category: 'Head Refacer',
    tag: 'Best Seller',
    image: '/images/surface-grinder.jpg',
    desc: 'Precision head refacing machine for resurfacing cylinder heads and engine blocks. Ensures perfect flatness and surface finish for optimal engine performance.',
    specs: ['Magnetic Chuck', 'Hydraulic Table Feed', 'Digital Control Panel', 'Auto Lubrication'],
    detailPath: '/products/head-refacer',
  },
  {
    id: 2,
    name: 'Hydraulic Honing Machine',
    category: 'Honing',
    tag: 'Popular',
    image: '/images/cylinder-boring-machine.jpg',
    desc: 'Vertical hydraulic honing machine for precision honing of engine cylinders and bores. Achieves superior surface finish and perfect roundness with digital readout.',
    specs: ['Hydraulic Feed', 'Digital Readout', 'Adjustable Honing Head', 'Variable Speed'],
    detailPath: '/products/hydraulic-honing',
  },
  {
    id: 3,
    name: 'Hydraulic Press',
    category: 'Hydraulic',
    tag: 'New',
    image: '/images/hydraulic-press.png',
    desc: 'Heavy-duty H-frame hydraulic press for metal forming, bearing pressing, and straightening operations. Fitted with precision pressure gauge and adjustable ram.',
    specs: ['H-Frame Structure', 'Pressure Gauge', 'Adjustable Ram', 'High Capacity'],
    detailPath: '/products/hydraulic-press',
  },
  {
    id: 4,
    name: 'Rod Boring Machine',
    category: 'Rod Boring',
    tag: 'Heavy Duty',
    image: '/images/valve-refacing-machine.jpg',
    desc: 'Precision rod boring machine for reboring connecting rods to exact tolerances. Essential for engine reconditioning workshops and automotive repair centers.',
    specs: ['Dual Spindle', 'Variable Speed', 'Coolant System', 'Precision Chuck'],
    detailPath: '/products/rod-boring',
  },
  {
    id: 5,
    name: 'Crankshaft Grinding Machine',
    category: 'Crankshaft',
    tag: 'Flagship',
    image: '/images/crankshaft-grinding-machine.png',
    desc: 'Heavy-duty crankshaft grinding machine (NEW branded) for precise grinding of crankshaft journals, pins, and bearing surfaces in automotive engines.',
    specs: ['Wide Bed Design', 'Dual Wheel Heads', 'PLC Control Panel', 'NEW Certified'],
    detailPath: '/products/crankshaft-grinding',
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <p className="hero-label mb-2">What We Offer</p>
          <h1>OUR <span style={{ color: 'var(--red)' }}>PRODUCTS</span></h1>
          <div className="red-divider" style={{ width: 80, marginTop: 16 }} />
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', marginTop: 16, lineHeight: 1.8 }}>
            Precision-engineered automobile machines by Naeem Engineering Works — built to perform in the world's most demanding environments.
          </p>
          <nav style={{ marginTop: 24, fontFamily: 'Rajdhani, sans-serif', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>
            <NavLink to="/" style={{ color: 'var(--red)', textDecoration: 'none' }}>HOME</NavLink>
            <span style={{ margin: '0 10px' }}>›</span>
            PRODUCTS
          </nav>
        </div>
      </section>

      {/* FILTER BAR */}
      <section style={{
        background: 'var(--black-mid)', borderBottom: '1px solid var(--border)',
        padding: '28px 0', position: 'sticky', top: 70, zIndex: 100,
      }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? 'var(--red)' : 'transparent',
                    color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                    border: `1px solid ${activeCategory === cat ? 'var(--red)' : 'var(--border)'}`,
                    padding: '6px 18px',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontSize: '0.8rem', letterSpacing: '2px',
                    textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                    clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                  }}
                >{cat}</button>
              ))}
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="form-industrial"
                style={{ paddingLeft: 40, width: 240 }}
              />
              <FaSearch style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.8rem' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section-pad" style={{ background: 'var(--black)' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-5">
              <p style={{ color: 'var(--text-muted)', marginTop: 20, fontSize: '1.1rem' }}>No products found. Try a different search.</p>
            </div>
          ) : (
            <>
              {/* Row 1: 3 cards */}
              <div className="row g-4 mb-4">
                {filtered.slice(0, 3).map(p => (
                  <div key={p.id} className="col-lg-4 col-md-6">
                    <ProductCard p={p} />
                  </div>
                ))}
              </div>
              {/* Row 2: remaining cards centered */}
              {filtered.length > 3 && (
                <div className="row g-4 justify-content-center">
                  {filtered.slice(3).map(p => (
                    <div key={p.id} className="col-lg-4 col-md-6">
                      <ProductCard p={p} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          <div style={{ marginTop: 36, color: 'var(--text-muted)', fontFamily: 'Rajdhani, sans-serif', fontSize: '0.85rem', letterSpacing: '1px' }}>
            Showing <span style={{ color: 'var(--red)' }}>{filtered.length}</span> of{' '}
            <span style={{ color: 'var(--red)' }}>{products.length}</span> products
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: 'var(--black-soft)', borderTop: '1px solid var(--border)', padding: '60px 0' }}>
        <div className="container text-center">
          <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.8rem', letterSpacing: '2px', color: '#fff', marginBottom: 12 }}>
            CAN'T FIND WHAT YOU NEED?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
            NEW offers custom-built automobile machines tailored to your exact specifications.
          </p>
          <NavLink to="/contact" className="btn-industrial">Request Custom Product</NavLink>
        </div>
      </section>
    </>
  )
}

function ProductCard({ p }) {
  return (
    <div className="product-card h-100" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* IMAGE */}
      <div style={{
        height: 240,
        background: '#fff',
        overflow: 'hidden',
        position: 'relative',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={p.image}
          alt={p.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            padding: '12px',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Dark overlay at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 40,
          background: 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)',
        }} />
      </div>

      {/* BADGE */}
      {p.tag && (
        <div className="product-badge" style={{
          background: p.tag === 'Flagship' ? 'linear-gradient(135deg, #8B0000, var(--red))' : 'var(--red)',
        }}>
          {p.tag}
        </div>
      )}

      {/* BODY */}
      <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="tag">{p.category}</div>
        <h5>{p.name}</h5>
        <p style={{ flex: 1 }}>{p.desc}</p>
        <div className="red-divider" />
        <div className="row g-1 mt-1">
          {p.specs.map((spec, si) => (
            <div key={si} className="col-6">
              <div style={{
                fontSize: '0.72rem', color: 'var(--text-muted)',
                fontFamily: 'Rajdhani, sans-serif', letterSpacing: '1px',
                padding: '3px 0', display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ color: 'var(--red)', fontSize: '0.6rem' }}>◆</span>{spec}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex gap-2 mt-3">
          <NavLink
            to="/contact"
            className="btn-industrial"
            style={{ fontSize: '0.75rem', padding: '8px 18px', flex: 1, textAlign: 'center' }}
          >
            Request Quote
          </NavLink>
          {p.detailPath ? (
            <NavLink
              to={p.detailPath}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'transparent', border: '1px solid var(--border)',
                color: 'var(--text-muted)', padding: '8px 14px',
                transition: 'all 0.2s', fontSize: '0.8rem', textDecoration: 'none',
                fontFamily: 'Rajdhani, sans-serif', letterSpacing: '1px',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >Details</NavLink>
          ) : (
            <button
              style={{
                background: 'transparent', border: '1px solid var(--border)',
                color: 'var(--text-muted)', padding: '8px 14px', cursor: 'pointer',
                transition: 'all 0.2s', fontSize: '0.8rem',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--red)'; e.target.style.color = 'var(--red)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-muted)' }}
            >Details</button>
          )}
        </div>
      </div>
    </div>
  )
}
