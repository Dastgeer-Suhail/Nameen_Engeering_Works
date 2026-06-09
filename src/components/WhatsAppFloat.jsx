import { useState } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WHATSAPP_NUMBER = '923004387427'
const WHATSAPP_MESSAGE = 'Hello! I am interested in your products and services. Please provide more information.'

function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <>
      {/* Tooltip / Chat bubble */}
      <div className={`wa-tooltip ${showTooltip ? 'wa-tooltip--visible' : ''}`}>
        <div className="wa-tooltip-header">
          <div className="wa-avatar">
            <FaWhatsapp size={20} />
          </div>
          <div>
            <div className="wa-tooltip-name">Naeem Engineering Works</div>
            <div className="wa-tooltip-status">
              <span className="wa-online-dot" /> Online
            </div>
          </div>
          <button
            className="wa-close-btn"
            onClick={() => setShowTooltip(false)}
            aria-label="Close WhatsApp chat"
          >
            <FaTimes size={12} />
          </button>
        </div>
        <div className="wa-tooltip-body">
          <div className="wa-message-bubble">
            👋 Hi there! How can we help you today?
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-start-chat-btn"
        >
          <FaWhatsapp size={16} />
          Start Chat
        </a>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        onClick={(e) => {
          if (!showTooltip) {
            e.preventDefault()
            setShowTooltip(true)
          }
        }}
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat on WhatsApp"
        id="whatsapp-float-btn"
      >
        <FaWhatsapp className="wa-icon" />
        <span className="wa-pulse" />
      </a>
    </>
  )
}

export default WhatsAppFloat
