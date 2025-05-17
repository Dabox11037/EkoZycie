$(document).ready(function() {

    function scatterPhotos() {
      $('.thumbnail').each(function() {
        var x = Math.random() * 500 - 250;
        var y = Math.random() * 500 - 250;
        var rotate = Math.random() * 360;
        var scale = Math.random() * 0.5 + 0.75;
        $(this).css({
          '--x': x + 'px',
          '--y': y + 'px',
          '--rotate': rotate + 'deg',
          '--scale': scale,
          'animation': 'scatter 3s forwards'
        });
      });
    }
 
    scatterPhotos();
  
        
    $('.thumbnail').on('click', function() {
      var imgSrc = $(this).attr('src');
      var dataIndex = parseInt($(this).data('index'));
  
      // Tworzymy klona klikniętej miniaturki
      var $clone = $('<img>').attr('src', imgSrc).css({
        position: 'absolute',
        width: $(this).width(),
        left: $(this).offset().left,
        top: $(this).offset().top,
        transition: 'transform 1s ease'
      });
      $('body').append($clone);
  
            
      var $preview = $('#main-image-container');
      var previewOffset = $preview.offset();
      var previewCenterX = previewOffset.left + ($preview.width() / 2);
      var previewCenterY = previewOffset.top + ($preview.height() / 2);
  
            
      var thumbOffset = $(this).offset();
      var thumbCenterX = thumbOffset.left + ($(this).width() / 2);
      var thumbCenterY = thumbOffset.top + ($(this).height() / 2);
  
      var translateX = previewCenterX - thumbCenterX;
      var translateY = previewCenterY - thumbCenterY;
  
           
      var transformValue = `translate(${translateX}px, ${translateY}px) scale(5)`;
  
            
      switch(dataIndex) {
        case 1:
          transformValue += ' rotateY(360deg)';
          break;
        case 2:
          transformValue += ' rotateX(360deg)';
          break;
        case 3:
          transformValue = `translate(${translateX}px, ${translateY}px) scale(5) skewX(20deg)`;
          break;
        case 4:
          transformValue = `translate(${translateX}px, ${translateY}px) scale(5) skewY(20deg)`;
          break;
        case 5:
          transformValue += ' rotate(360deg)';
          break;
        case 6:
          transformValue = `translate(${translateX}px, ${translateY - 30}px) scale(5) rotate(45deg)`;
          break;
        case 7:
        case 8:
          transformValue += ' rotate(360deg)';
          break;
        
    }
  
           
      setTimeout(function() {
        $clone.css('transform', transformValue);
      }, 50);
  
            
      setTimeout(function() {
        $clone.remove();
        $('#main-image').attr('src', imgSrc);
        $('#main-image-container').fadeIn();
      }, 1050);
    });
  
       
    $('#main-image-container').on('click', function() {
      $(this).fadeOut();
    });
  
    $('#gatherButton').click(function() {
        $('.thumbnail').each(function() {
                    
          $(this).css({
            'animation': 'gather 3s forwards'
          });
        });
                
        $(this).hide();
      });
  });
  