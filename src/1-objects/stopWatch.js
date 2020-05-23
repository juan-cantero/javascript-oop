
export default function StopWatch()  {
    let time = 0;

    this.start = function () {setInterval(function() {
        time +=1
    },1000);
}

    this.stop = function() {
        clearTimeout(time);
    }

    this.reset = function() {
        time = 0;
    }

    Object.defineProperty(this, 'time', {
        get: function() {
            return time;
        }
    })

}

