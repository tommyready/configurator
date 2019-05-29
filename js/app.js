;(function(){

  var unicornSVG = SVG('svg-body').size(500,500);

  jQuery.get('unicorn.svg', function(rawSvg) {
    const svgContent = jQuery('svg', rawSvg);
    unicornSVG.svg(svgContent.html());
  }, 'xml');

  
})(jQuery);
  
  
  
  updatePathFill = function(fillColor, targetPath)
  {
    jQuery('#'+targetPath).attr('fill', '#'+fillColor);
  }