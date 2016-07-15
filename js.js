function Clock () {
  this.getTime = function () {
    var today = new Date();
    this.hour = ("0" + (today.getHours())).slice(-2);
    this.min = ("0" + (today.getMinutes())).slice(-2);
    this.sec = ("0" + (today.getSeconds())).slice(-2);
    return this.hour+':'+this.min+':'+this.sec;
  };
  this.render = function () {
    var timeDiv = document.getElementById('time');
    var time = this.getTime();
    var node = document.createTextNode(time);
    timeDiv.appendChild(node);
  };
  this.clear = function () {
    var timeDiv = document.getElementById('time');
    timeDiv.innerText = '';
  };
  this.update = function () {
    window.setInterval(function () {
      myClock.clear();
      myClock.render();
    }, 1000);
  };
}

var myClock = new Clock();
myClock.update();
