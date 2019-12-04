var MakeWhiteDancer = function(top, left, timeBetweenSteps) {

	
 MakeDancer.call(this, top, left, timeBetweenSteps)
this.$node = $('<span class="white"></span>');
 this.setPosition(top, left);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  
  };

  MakeWhiteDancer.prototype = Object.create(MakeDancer.prototype);
  MakeWhiteDancer.prototype.constructor = MakeWhiteDancer;
  
  MakeWhiteDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    var that = MakeDancer.prototype.step;
    that.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();

};
