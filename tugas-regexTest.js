function panggilRegexp(value) {
  var j = /Belajar/.test(value);
  var k = /html/.test(value);
  var l = /css/.test(value);
  if (j == true && k == true) {
    console.log("Belajar html");
  } else if (j == true && l == true) {
    console.log("Belajar css");
  } else {
    console.log("Belajar");
  }
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");
