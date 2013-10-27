$(function(){ 
  $(".gridster ul").gridster({
      widget_margins: [5, 5],
      widget_base_dimensions: [200, 200]
  });
  var gridster = $(".gridster ul").gridster().data('gridster');

  //animate UI
  $('.gridster').animate({
    left: 0
  }, 300);
 
  // UI basic elements 
  $( "#qs-box-activity" ).selectable();
  $( "#qs-box-profile" ).selectable();
  
});
var animateKnob = function(elmId, startVal, stopVal, color) {
  var knobEl = $(elmId).find('.dial');
  var knobIcon = $(elmId).find('.meter-icon *');
  knobIcon.css('color', color);
  knobEl.knob({
    'readOnly': true,
    'displayInput': false,
    'fgColor': color
  });

  $({ value: startVal }).animate({ value: stopVal }, {
      duration: 1000,
      easing: 'swing',
      step: function() {
        knobEl.val(Math.ceil(this.value)).trigger('change');
      }
  });
};

var updateKnob = function(elmId, newVal, newDesc, color) {
  var knobEl = $(elmId).find('.dial');
  var knobIcon = $(elmId).find('.meter-icon *');
  var knobDesc = $(elmId).find('.meter-value');

  var current_val = knobEl.val() || 0;
  knobIcon.css('color', color);
  knobEl.knob({
    'readOnly': true,
    'displayInput': false,
    'fgColor': color
  });

  $({ value: current_val }).animate({ value: newVal }, {
      duration: 100,
      easing: 'swing',
      step: function() {
        knobEl.val(Math.ceil(this.value)).trigger('change');
        knobDesc.text(newDesc).trigger('change');
      }
  });
};
