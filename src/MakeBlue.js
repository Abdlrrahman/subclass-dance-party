// Creates and returns a new dancer object that can step
var MakeDancerBlue = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
 
  this.$node = $('<span class="blue"></span>');
  // this.styleSettings = {
  //     top: top,
  //     left: left
  //   };
 this.setPosition(top, left);
 this.step();
 this.timeBetweenSteps = timeBetweenSteps;
  };

  MakeDancerBlue.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  MakeDancerBlue.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };