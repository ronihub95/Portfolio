import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { styled } from '../../stitches.config'

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContentWrapper
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            onClick={e => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} aria-label="Close modal">
              &times;
            </CloseButton>

            {/* Scrollable area for modal content */}
            <ScrollableContentArea>{children}</ScrollableContentArea>
          </ModalContentWrapper>
        </ModalOverlay>
      )}
    </AnimatePresence>
  )
}

// Overlay covers the entire screen
const ModalOverlay = styled(motion.div, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
})

// Modal content container
const ModalContentWrapper = styled(motion.div, {
  position: 'relative',
  background: '$background',
  borderRadius: '$borderRadius',
  width: '100%',
  maxWidth: '700px',
  maxHeight: '90vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
})

// Scrollable area inside modal
const ScrollableContentArea = styled('div', {
  padding: '60px 40px 40px 40px',
  overflowY: 'auto',
  overflowX: 'hidden',
  flex: 1,
  minHeight: 0,
})

// Close button
const CloseButton = styled('button', {
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: 'none',
  border: 'none',
  fontSize: '28px',
  lineHeight: 1,
  color: '$secondary',
  cursor: 'pointer',
  padding: '5px',
  transition: 'color 0.2s ease',
  zIndex: 10,
  '&:hover': {
    color: '$primary',
  },
})
