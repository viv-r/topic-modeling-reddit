"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = require("d3");

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function () {
  d3.rebind = function (target, source) {
    var i = 1,
        n = arguments.length,
        method;
    while (++i < n) {
      target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    }return target;
  };

  // Method is assumed to be a standard D3 getter-setter:
  // If passed with no arguments, gets the value.
  // If passed with arguments, sets the value and returns the target.
  function d3_rebind(target, source, method) {
    return function () {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }

  d3.fisheye = {
    scale: function scale(scaleType) {
      return d3_fisheye_scale(scaleType(), 3, 0);
    },
    circular: function circular() {
      var radius = 200,
          distortion = 2,
          k0,
          k1,
          focus = [0, 0];

      function fisheye(d) {
        var dx = d.x - focus[0],
            dy = d.y - focus[1],
            dd = Math.sqrt(dx * dx + dy * dy);
        if (!dd || dd >= radius) return { x: d.x, y: d.y, z: dd >= radius ? 1 : 10 };
        var k = k0 * (1 - Math.exp(-dd * k1)) / dd * .75 + .25;
        return { x: focus[0] + dx * k, y: focus[1] + dy * k, z: Math.min(k, 10) };
      }

      function rescale() {
        k0 = Math.exp(distortion);
        k0 = k0 / (k0 - 1) * radius;
        k1 = distortion / radius;
        return fisheye;
      }

      fisheye.radius = function (_) {
        if (!arguments.length) return radius;
        radius = +_;
        return rescale();
      };

      fisheye.distortion = function (_) {
        if (!arguments.length) return distortion;
        distortion = +_;
        return rescale();
      };

      fisheye.focus = function (_) {
        if (!arguments.length) return focus;
        focus = _;
        return fisheye;
      };

      return rescale();
    }
  };

  function d3_fisheye_scale(scale, d, a) {

    function fisheye(_) {
      var x = scale(_),
          left = x < a,
          range = d3.extent(scale.range()),
          min = range[0],
          max = range[1],
          m = left ? a - min : max - a;
      if (m == 0) m = max - min;
      return (left ? -1 : 1) * m * (d + 1) / (d + m / Math.abs(x - a)) + a;
    }

    fisheye.distortion = function (_) {
      if (!arguments.length) return d;
      d = +_;
      return fisheye;
    };

    fisheye.focus = function (_) {
      if (!arguments.length) return a;
      a = +_;
      return fisheye;
    };

    fisheye.copy = function () {
      return d3_fisheye_scale(scale.copy(), d, a);
    };

    fisheye.nice = scale.nice;
    fisheye.ticks = scale.ticks;
    fisheye.tickFormat = scale.tickFormat;
    return d3.rebind(fisheye, scale, "domain", "range");
  }
})();

exports.default = null;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzXFxGaXNoZXllLmpzIl0sIm5hbWVzIjpbImQzIiwicmViaW5kIiwidGFyZ2V0Iiwic291cmNlIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJtZXRob2QiLCJkM19yZWJpbmQiLCJ2YWx1ZSIsImFwcGx5IiwiZmlzaGV5ZSIsInNjYWxlIiwic2NhbGVUeXBlIiwiZDNfZmlzaGV5ZV9zY2FsZSIsImNpcmN1bGFyIiwicmFkaXVzIiwiZGlzdG9ydGlvbiIsImswIiwiazEiLCJmb2N1cyIsImQiLCJkeCIsIngiLCJkeSIsInkiLCJkZCIsIk1hdGgiLCJzcXJ0IiwieiIsImsiLCJleHAiLCJtaW4iLCJyZXNjYWxlIiwiXyIsImEiLCJsZWZ0IiwicmFuZ2UiLCJleHRlbnQiLCJtYXgiLCJtIiwiYWJzIiwiY29weSIsIm5pY2UiLCJ0aWNrcyIsInRpY2tGb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7OztBQUdaLENBQUMsWUFBWSxBQUNYO0tBQUEsQUFBRyxTQUFTLFVBQUEsQUFBVSxRQUFWLEFBQWtCLFFBQVEsQUFDcEM7UUFBSSxJQUFKLEFBQVE7UUFBRyxJQUFJLFVBQWYsQUFBeUI7UUFBekIsQUFBaUMsQUFDakM7V0FBTyxFQUFBLEFBQUUsSUFBVCxBQUFhLEdBQUc7YUFBTyxTQUFTLFVBQWhCLEFBQWdCLEFBQVUsTUFBTSxVQUFBLEFBQVUsUUFBVixBQUFrQixRQUFRLE9BQTFFLEFBQWdCLEFBQWdDLEFBQTBCLEFBQU87QUFDakYsWUFBQSxBQUFPLEFBQ1I7QUFKRCxBQU1BOztBQUNBO0FBQ0E7QUFDQTtXQUFBLEFBQVMsVUFBVCxBQUFtQixRQUFuQixBQUEyQixRQUEzQixBQUFtQyxRQUFRLEFBQ3pDO1dBQU8sWUFBWSxBQUNqQjtVQUFJLFFBQVEsT0FBQSxBQUFPLE1BQVAsQUFBYSxRQUF6QixBQUFZLEFBQXFCLEFBQ2pDO2FBQU8sVUFBQSxBQUFVLFNBQVYsQUFBbUIsU0FBMUIsQUFBbUMsQUFDcEM7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QUEsQUFBVSxHQUFHLEFBQ2hDO1VBQUksQ0FBQyxVQUFMLEFBQWUsUUFBUSxPQUFBLEFBQU8sQUFDOUI7VUFBSSxDQUFKLEFBQUssQUFDTDthQUFBLEFBQU8sQUFDUjtBQUpELEFBTUE7O1lBQUEsQUFBUSxRQUFRLFVBQUEsQUFBVSxHQUFHLEFBQzNCO1VBQUksQ0FBQyxVQUFMLEFBQWUsUUFBUSxPQUFBLEFBQU8sQUFDOUI7VUFBSSxDQUFKLEFBQUssQUFDTDthQUFBLEFBQU8sQUFDUjtBQUpELEFBTUE7O1lBQUEsQUFBUSxPQUFPLFlBQVksQUFDekI7YUFBTyxpQkFBaUIsTUFBakIsQUFBaUIsQUFBTSxRQUF2QixBQUErQixHQUF0QyxBQUFPLEFBQWtDLEFBQzFDO0FBRkQsQUFJQTs7WUFBQSxBQUFRLE9BQU8sTUFBZixBQUFxQixBQUNyQjtZQUFBLEFBQVEsUUFBUSxNQUFoQixBQUFzQixBQUN0QjtZQUFBLEFBQVEsYUFBYSxNQUFyQixBQUEyQixBQUMzQjtXQUFPLEdBQUEsQUFBRyxPQUFILEFBQVUsU0FBVixBQUFtQixPQUFuQixBQUEwQixVQUFqQyxBQUFPLEFBQW9DLEFBQzVDO0FBQ0Y7QUFwR0QsQUFzR0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRmlzaGV5ZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9sdWtldy9Eb2N1bWVudHMvR2l0SHViL0hDREU1NTYvSENERTU1NiJ9