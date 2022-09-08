module.exports = {
  processor: (body) => {
    if (body) {
      var arr = body.split('#');
      var summary = arr.filter(element => element.includes('Summary:'))[0];
      var removeHash = '';
      for (var char of summary) {
        if (char !== '#') {
          removeHash += char;
        }
      }
      var arr2 = removeHash.split('.');
      var solarActivity = arr2.filter(element => element.toLowerCase().includes('solar activity'))[0];
      var geomagneticStorm = arr2.filter(element => element.toLowerCase().includes('geomagnetic storm'))[0];
      var solarWindSpeed = arr2.filter(element => element.toLowerCase().includes('solar wind speed'))[0];
      var energeticElectronFlux = arr2.filter(element => element.toLowerCase().includes('energetic electron flux'))[0];
      var spaceWeatherImpact = arr2.filter(element => element.toLowerCase().includes('space weather impact'))[0];
      return [solarActivity, geomagneticStorm, solarWindSpeed, energeticElectronFlux, spaceWeatherImpact];
    }

  }
}