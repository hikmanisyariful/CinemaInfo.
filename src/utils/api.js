import _getNowPlaying from "./NowPlaying";
import _getUpcoming from "./Upcoming";

export function getDataNowplaying() {
  return _getNowPlaying().then(data => {
    return data;
  });
}

export function getDataUpcoming() {
  return _getUpcoming().then(data => {
    return data;
  });
}
