

navigator.geolocation.getCurrentPosition(
  displayLocationInfo,
  handleLocationError,
  { maximumAge: 1500000, timeout: 0 }
);

function displayLocationInfo(position) {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;

  console.log(`longitude: ${lng} | latitude: ${lat}`);
}

function handleLocationError(error) {
  switch (error.code) {
    case 3:
      // timeout was hit, meaning nothing's in the cache
      // let's provide a default location:
      displayLocationInfo({ coords: { longitude: 33.631839, latitude: 27.380583 } });

      // now let's make a non-cached request to get the actual position
      navigator.geolocation.getCurrentPosition(displayLocationInfo, handleLocationError);
      break;
    case 2:
      // ...
      break;
    case 1:
    // ...
  }
}