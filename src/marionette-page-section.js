(function (_, MarionettePage) {

  MarionettePage.Section = {

  };

  MarionettePage.Section.extend = function (subClass) {
    return _.extend(MarionettePage.Section, subClass);
  };

})(_, MarionettePage);