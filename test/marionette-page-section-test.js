(function (undefined, QUnit, sinon, MarionettePage) {

  var TestSection = MarionettePage.Section.extend({
    initialize: function (options) {
      // Possible override.
    }
  });

  var createTestSection = function () {
    return new TestSection();
  };

  QUnit.module("Marionette Page Section Test Suite", {
    setup: function () {
      // Do setup work here.
    },
    teardown: function () {
      // Do teardown work here.
    }
  });

  QUnit.test("constructor_callConstructor_shouldCallInitializeFunction", function () {
    // Assign
    var testSection = createTestSection();

    // Act
    sinon.spy(testSection, "initialize");
    /* Need to call constructor manually to simulate creation of the section
     * object. This is because sinon needs to know which object to spy on,
     * meaning we must create the object (and hence call the constructor) first.
     */
    testSection.constructor();

    // Assert
    ok(testSection.initialize.calledOnce);
  });

})(undefined, QUnit, sinon, MarionettePage);