export default <svg width="100" height="100">
<rect x="0" y="0" width="100" height="100" fill="none"/>
<g>
  <circle cx="0" cy="0" r="5" fill="#FFFFFF" id="particle1" fill-opacity="0.5">
    <animate 
      attributeName="cy" 
      values="0;100" 
      dur="2s" 
      repeatCount="indefinite"
    />
    <animate 
      attributeName="cx" 
      values="0;100" 
      dur="2s" 
      repeatCount="indefinite"
    />
  </circle>
  <circle cx="0" cy="0" r="10" fill="#FFFFFF" id="particle2" fill-opacity="0.75">
    <animate 
      attributeName="cy" 
      values="0;100" 
      dur="2s" 
      repeatCount="indefinite"
    />
    <animate 
      attributeName="cx" 
      values="0;100" 
      dur="2s" 
      repeatCount="indefinite"
    />
  </circle>
  <circle cx="0" cy="0" r="15" fill="#FFFFFF" id="particle3" fill-opacity="1.0">
    <animate 
      attributeName="cy" 
      values="0;100" 
      dur="2s" 
      repeatCount="indefinite"
    />
    <animate 
      attributeName="cx" 
      values="0;100" 
      dur="2s" 
      repeatCount="indefinite"
    />
  </circle>
</g>
</svg>
