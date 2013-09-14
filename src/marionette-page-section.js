(function (Marionette, MarionettePage) {

  MarionettePage.Section = function (options) {
    MarionettePage.Section.prototype.constructor.call(this, options);
  };

  MarionettePage.Section.prototype.constructor = function (options) {
    this.initialize.call(this, options);
  };

  MarionettePage.Section.prototype.initialize = function (options) {
    // Default initialize method. Is meant to be overridden.
  };

  MarionettePage.Section.extend = Marionette.extend;


})(Backbone.Marionette, MarionettePage);