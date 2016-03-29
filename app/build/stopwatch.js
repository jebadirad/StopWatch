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
    var timer = this.state.data.map(function (time) {
      return React.createElement(StopWatchTimer, { key: time.id, data: time });
    });
    return React.createElement(
      "div",
      { classID: "container" },
      timer
    );
  }
});
var StopWatchTimer = React.createClass({
  displayName: "StopWatchTimer",

  startCounter: function (data) {
    //e.preventDefault();

    if (!this.props.data.running) {
      setInterval(this.increment, 1000);
    }
  },
  increment: function () {
    this.props.data.running = true;
    this.props.data.seconds += 1;
    this.setState({ data: this.props.data });
  },

  clearStopWatch: function (e) {
    //e.preventDefault();
    console.error("clear");
    //somehow tell parent to set initial state.
  },

  stopCounter: function (e) {
    //  e.preventDefault();
    console.error("stop");
    //stop the interval
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "timer" },
      this.props.data.hours,
      " : ",
      this.props.data.minutes,
      " : ",
      this.props.data.seconds,
      React.createElement("input", { type: "submit", value: "Start", onClick: this.startCounter.bind(this, this.props.data) }),
      React.createElement("input", { type: "submit", value: "Stop", onClick: this.stopCounter }),
      React.createElement("input", { type: "submit", value: "Reset", onClick: this.clearStopWatch })
    );
  }
});

ReactDOM.render(React.createElement(StopWatchBox, { data: data }), document.getElementById('stopWatch'));