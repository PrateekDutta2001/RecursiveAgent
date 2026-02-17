// RLM + Agentic RAG System Architecture - Interactive Features
// Add custom JavaScript here for enhanced interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Initialize interactive features
  initializeNodeInteractions();
  initializeAnimations();
  console.log('Architecture visualization loaded');
});

/**
 * Initialize hover and click interactions for node cards
 */
function initializeNodeInteractions() {
  const nodes = document.querySelectorAll('.node');
  
  nodes.forEach(node => {
    node.addEventListener('mouseenter', function() {
      this.style.opacity = '1';
    });
    
    node.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
    });
  });
}

/**
 * Initialize animation triggers
 */
function initializeAnimations() {
  const layers = document.querySelectorAll('.layer');
  
  // Trigger staggered animations on page load
  layers.forEach((layer, index) => {
    layer.style.animationDelay = `${index * 0.1}s`;
  });
}

/**
 * Utility: Smooth scroll to section
 */
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Utility: Toggle node details
 */
function toggleNodeDetails(nodeElement) {
  nodeElement.classList.toggle('expanded');
}

/**
 * Export architecture diagram data
 */
function exportArchitectureData() {
  const architectureData = {
    timestamp: new Date().toISOString(),
    version: '2.0',
    layers: []
  };
  
  const layers = document.querySelectorAll('.layer');
  layers.forEach(layer => {
    const layerLabel = layer.querySelector('.layer-label')?.textContent || 'Unknown';
    const nodes = layer.querySelectorAll('.node');
    
    architectureData.layers.push({
      name: layerLabel,
      nodeCount: nodes.length
    });
  });
  
  return architectureData;
}

// Export function for external use
window.exportArchitectureData = exportArchitectureData;
