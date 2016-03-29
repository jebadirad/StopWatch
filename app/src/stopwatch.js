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
    var timer = this.state.data.map(function(time){
      return (
          <StopWatchTimer key={time.id} data={time}></StopWatchTimer>
      );
    });
    return (
      <div classID="container">
      {timer}
      </div>
    );
  }
});
var StopWatchTimer = React.createClass({
  startCounter: function(data){
    //e.preventDefault();
    if(!this.props.data.running){
      this.incrementFunction = setInterval(this.increment, 1000);
    }
  },
  increment: function(){
    this.props.data.running = true;
    this.props.data.seconds += 1;
    this.formatSeconds();
    this.setState({data : this.props.data});
  },
  clearStopWatch : function(data){

      this.props.data.seconds = 0;
      this.props.data.minuters = 0;
      this.props.data.hours = 0;
      this.setState({data : this.props.data});

  },
  stopCounter : function(data){
    if(this.props.data.running){
      this.props.data.running = false;
      clearInterval(this.incrementFunction);
    }
  },
  formatSeconds : function(){
    if(this.props.data.seconds > 59){
      this.props.data.seconds = 0;
      this.props.data.minutes += 1;
    }
    if(this.props.data.minutes >59){
      this.props.data.minutes = 0;
      this.props.data.hours += 1;
    }
  },
  render: function(){
    return (
      <div className="timer">
        {this.props.data.hours} : {this.props.data.minutes} : {this.props.data.seconds}
        <input type="submit" value="Start" onClick={this.startCounter.bind(this, this.props.data)} />
        <input type="submit" value="Stop" onClick={this.stopCounter. bind(this, this.props.data)}/>
        <input type="submit" value="Reset" onClick={this.clearStopWatch.bind(this, this.props.data)}  />
        </div>
    )
  }
});

ReactDOM.render(
  <StopWatchBox data = {data}/>,
  document.getElementById('stopWatch')
);
