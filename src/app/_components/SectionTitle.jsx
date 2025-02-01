import React from 'react'

const SectionTitle = ({ 
  title, 
  description, 
  center = true, 
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  underlineColor = "#AD9052"
}) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 relative inline-block ${titleClassName}`}>
        {title}
        <div 
          className="absolute bottom-0 left-1/2 w-1/2 h-1 transform -translate-x-1/2"
          style={{ backgroundColor: underlineColor }}
        />
      </h2>
      {description && (
        <p className={`text-gray-600 max-w-2xl ${center ? 'mx-auto' : ''} text-lg ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle