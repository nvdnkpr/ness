exports = module.exports = ness;

function ness(value) {
  if(this instanceof ness) {
    this.value = value;
  } else {
    return new ness(value);
  }
}

ness.prototype.test = function() {
  return !this.false();
};

ness.prototype.false = function() {
  return !!~[null, undefined, false].indexOf(this.value);
};
