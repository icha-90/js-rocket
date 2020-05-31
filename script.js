var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;
     //changing class name
    if(currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else {
        document.getElementById('cool').className = 'cool';
    }

    }
    
    var sayMyName = function (name) {
    alert('My name is:  '+name);
    }

var car = {
    make: 'VW',
    type: 'polo',
    color: 'Black',
    isTurnOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1',
        'seat 2', 
        'seat 3', 
        'seat 4'
    ],
    turnOn: function() {
        this.isTurnOn = true;
    },
    fly: function () {
        alert('fly');
    },
    switchCar: function (isOn) {
        console.log('turn car ' +isOn);
        if (isOn == true) {
            this.isTurnOn = true;
        } else {
            this.isTurnOn = false;
        }
    }
 };
console.log("Hello there friends");
