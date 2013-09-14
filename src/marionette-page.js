(function (_) {

  var MarionettePage = {
    // Application code here
  };

  MarionettePage.extend = function (subClass) {
    return _.extend(MarionettePage, subClass);
  };

  // Expose MarionettePage
  
  if ((typeof module) === "undefined") {
    this.MarionettePage = MarionettePage;
  } else {
    module.exports = MarionettePage;
  }

})(_);