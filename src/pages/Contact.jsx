import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'

const contactInfo = [
  { icon: <FaMapMarkerAlt size={20} />, label: 'Address', value: 'Main Bund Road, Mozu Khokhar Village, Near Shad Bagh Underpass, Lahore, Pakistan' },
  { icon: <FaPhone size={20} />, label: 'Phone', value: '+92 300 4387427, +92 306 4929258', href: 'tel:+923004387427' },
  { icon: <FaEnvelope size={20} />, label: 'Email', value: 'info@new-industries.com', href: 'mailto:info@new-industries.com' },
  { icon: <FaClock size={20} />, label: 'Working Hours', value: 'Mon–Sat: 8:00 AM – 6:00 PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()

    // Format the message for WhatsApp
    const messageText = `*NEW — Website Contact Inquiry*
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone || 'N/A'}
*Company:* ${form.company || 'N/A'}
*Subject:* ${form.subject}

*Message:*
${form.message}`

    // Encode text and create WhatsApp URL
    const whatsappUrl = `https://wa.me/923004387427?text=${encodeURIComponent(messageText)}`

    // Open in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <p className="hero-label mb-2">Get In Touch</p>
          <h1>CONTACT <span style={{ color: 'var(--red)' }}>NEW</span></h1>
          <div className="red-divider" style={{ width: 80, marginTop: 16 }} />
          <p style={{ color: 'var(--text-muted)', maxWidth: '520px', marginTop: 16, lineHeight: 1.8 }}>
            Ready to start your next automobile project? The NEW engineering team is standing by to provide expert advice and project quotes.
          </p>
          <nav style={{ marginTop: 24, fontFamily: 'Rajdhani, sans-serif', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>
            <NavLink to="/" style={{ color: 'var(--red)', textDecoration: 'none' }}>HOME</NavLink>
            <span style={{ margin: '0 10px' }}>›</span>
            CONTACT
          </nav>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section-pad" style={{ background: 'var(--black-mid)' }}>
        <div className="container">
          <div className="row g-5">
            {/* LEFT: FORM */}
            <div className="col-lg-7">
              <div className="section-badge mb-3">Send Us a Message</div>
              <h2 className="section-title mb-4">GET A FREE <span className="red">QUOTE</span></h2>

              {submitted && (
                <div style={{
                  background: 'rgba(192,57,43,0.15)', border: '1px solid var(--red)',
                  padding: '16px 20px', marginBottom: 24,
                  display: 'flex', alignItems: 'center', gap: 12, color: '#fff',
                }}>
                  <FaCheckCircle color="var(--red)" />
                  <span>Thank you! Your message has been sent. We'll respond within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label-industrial">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      className="form-industrial" placeholder="Enter Name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-industrial">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      className="form-industrial" placeholder="Enter Email Address" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-industrial">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      className="form-industrial" placeholder="Enter Contact Number" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-industrial">Company Name</label>
                    <input name="company" value={form.company} onChange={handleChange}
                      className="form-industrial" placeholder="Enter Company Name" />
                  </div>
                  <div className="col-12">
                    <label className="form-label-industrial">Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required className="form-industrial">
                      <option value="">— Select Subject —</option>
                      <option>Request for Quotation</option>
                      <option>Product Inquiry</option>
                      <option>Technical Support</option>

                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label-industrial">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      className="form-industrial" rows={5}
                      placeholder="Enter Message..." />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-industrial" style={{ width: '100%', textAlign: 'center', border: 'none' }}>
                      Send Message →
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* RIGHT: INFO */}
            <div className="col-lg-5">
              <div className="section-badge mb-3">Our Location</div>
              <h2 className="section-title mb-4">REACH <span className="red">US</span></h2>

              <div className="d-flex flex-column gap-3 mb-4">
                {contactInfo.map((item, i) => (
                  <div key={i} style={{
                    background: 'var(--black-soft)', border: '1px solid var(--border)',
                    padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'flex-start',
                  }}>
                    <div style={{ color: 'var(--red)', marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>{item.value}</a>
                      ) : (
                        <div style={{ color: '#fff', fontSize: '0.9rem' }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/923004387427" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: '#128C7E', border: 'none', padding: '14px 20px',
                color: '#fff', textDecoration: 'none', marginBottom: 28,
                fontFamily: 'Oswald, sans-serif', letterSpacing: '2px', fontSize: '0.9rem',
                textTransform: 'uppercase',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}>
                <FaWhatsapp size={22} />
                Chat on WhatsApp
              </a>


            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section style={{ height: 300, background: 'var(--black)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(192,57,43,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,57,43,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 12,
        }}>
          <FaMapMarkerAlt size={48} color="var(--red)" />
          <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem', letterSpacing: '3px', color: '#fff', textTransform: 'uppercase' }}>
            Near Shad Bagh Underpass, Lahore, Pakistan
          </div>
          <a href="https://google.com/maps/place/Naeem+engineering+works" target="_blank" rel="noreferrer" className="btn-outline-industrial" style={{ fontSize: '0.75rem', padding: '8px 24px' }}>
            Open in Google Maps
          </a>
        </div>
      </section>
    </>
  )
}
