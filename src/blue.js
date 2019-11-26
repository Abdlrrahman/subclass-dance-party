var MakeBlinkyDancerBlue = function(top, left, timeBetweenSteps) {
 // var blinkyDancer = makeDancer(top, left, timeBetweenSteps)
 MakeDancerBlue.call(this, top, left, timeBetweenSteps)

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  
  };

  MakeBlinkyDancerBlue.prototype = Object.create(MakeDancerBlue.prototype);
  MakeBlinkyDancerBlue.prototype.constructor = MakeBlinkyDancerBlue;
  
  MakeBlinkyDancerBlue.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // var that = MakeDancerBlue.prototype.step;
    MakeDancerBlue.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();

};
