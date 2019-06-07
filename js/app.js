;(function(){

  /*let unicornSVG = SVG('svg-body').size(500,500);



  jQuery.get('unicorn.svg', function(rawSvg) {
    const svgContent = jQuery('svg', rawSvg);
    unicornSVG.svg(svgContent.html());
  }, 'xml');
   */


  const canvas = new fabric.Canvas('canvas');
  fabric.loadSVGFromURL('unicorn.svg', function(objects, options) {
    const obj = fabric.util.groupSVGElements(objects, options);
    canvas.add(obj).renderAll();
  });
  
})(jQuery);




updatePathFill = function(fillColor, targetPath) {
  jQuery('#'+targetPath).attr('fill', '#'+fillColor);
}