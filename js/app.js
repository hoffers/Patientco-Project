angular.module('project', ['chart.js'])
  .controller('MainController', function($document, $log) {
    var ctrl = this;

    ctrl.data = data;

    ctrl.chartLabels = [];
    ctrl.chartData = [];

    for (var i = 0; i < ctrl.data.slices.length; i++) {
      ctrl.chartLabels.push(ctrl.data.slices[i].name);
      ctrl.chartData.push(parseFloat(ctrl.data.slices[i].value));
    }

    ctrl.chartColors = ['#3b8ec7', '#9ecae1', '#427ea7'];

    ctrl.chartOptions = {
      tooltips: {
        enabled: false
      },
      hover: {
        intersect: false
      },
      legend: {
        display: false
      },
      cutoutPercentage: 77,
      events: []
    };

    ctrl.goToView = function(viewName) {
      if (viewName) {
        alert("This view is under construction: " + viewName);
      }
    }
  });
