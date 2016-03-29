var data = [{id: 1,
  hours: 0,
  minutes: 0,
  seconds: 0
}];


var StopWatchBox = React.createClass({
  getInitialState : function(){
    return { data : [{id: 1,
      hours: 0,
      minutes: 0,
      seconds: 0
    }]
  };
  },

  render: function(){
    var timer = this.props.data.map(function(time){
      return (
          <StopWatchTimer key={time.id} data={time}></StopWatchTimer>
      );
    });
    return (
      <div classID="container">
      {timer}
        <StartButton /><StopButton /> <ClearButton />
      </div>
    );
  }
});
var StartButton = React.createClass({
  render: function(){
    return (
      <input type="submit" value="Start" />
    );
  }
});


var ClearButton = React.createClass({
  render: function(){
    return (
      <input type="submit" value="Reset" />
    );
  }
});

var StopButton = React.createClass({
  render: function(){
    return (
      <input type="submit" value="Stop" />
    );
  }
});


var StopWatchTimer = React.createClass({
  render: function(){

    return (
      <span className="timer">
        {this.props.data.hours} : {this.props.data.minutes} : {this.props.data.seconds}
        </span>
    )
  }
});

ReactDOM.render(
  <StopWatchBox data = {data}/>,
  document.getElementById('stopWatch')
);
