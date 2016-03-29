var data = [{ id: 1,
  hours: 0,
  minutes: 0,
  seconds: 0
}];

var StopWatchBox = React.createClass({
  displayName: "StopWatchBox",

  getInitialState: function () {
    return { data: [{ id: 1,
        hours: 0,
        minutes: 0,
        seconds: 0
      }]
    };
  },

  render: function () {
    var timer = this.props.data.map(function (time) {
      return React.createElement(StopWatchTimer, { key: time.id, data: time });
    });
    return React.createElement(
      "div",
      { classID: "container" },
      timer,
      React.createElement(StartButton, null),
      React.createElement(StopButton, null),
      " ",
      React.createElement(ClearButton, null)
    );
  }
});
var StartButton = React.createClass({
  displayName: "StartButton",

  render: function () {
    return React.createElement("input", { type: "submit", value: "Start" });
  }
});

var ClearButton = React.createClass({
  displayName: "ClearButton",

  render: function () {
    return React.createElement("input", { type: "submit", value: "Reset" });
  }
});

var StopButton = React.createClass({
  displayName: "StopButton",

  render: function () {
    return React.createElement("input", { type: "submit", value: "Stop" });
  }
});

var StopWatchTimer = React.createClass({
  displayName: "StopWatchTimer",

  render: function () {

    return React.createElement(
      "span",
      { className: "timer" },
      this.props.data.hours,
      " : ",
      this.props.data.minutes,
      " : ",
      this.props.data.seconds
    );
  }
});

ReactDOM.render(React.createElement(StopWatchBox, { data: data }), document.getElementById('stopWatch'));