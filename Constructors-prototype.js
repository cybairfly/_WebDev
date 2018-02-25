function Device(make, type, year) {
  this.make = make;
  this.type = type;
  this.year = year;
  this.isOn = false;
}

Device.prototype.on = function() {
  this.isOn = true;
}
Device.prototype.off = function() {
  this.isOn = false;
}
Device.prototype.beep = function() {
  if (this.isOn) return "Beep";
}

//VS

function Device(make, type, year) {
  this.make = make;
  this.type = type;
  this.year = year;
  this.isOn = false;
  this.on = function() {
    this.isOn = true;
  }
  this.off = function() {
    this.isOn = false;
  }
  this.beep = function() {
    if (this.isOn) return "Beep";
  }
}
