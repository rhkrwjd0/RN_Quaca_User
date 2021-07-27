
import StyleHalo from './StyleHalo';
import StyleQuaca from './StyleQuaca';

let StyleStore;
let testTxt = "halo"

if (testTxt === "halo") {
  StyleStore = StyleHalo;
} else StyleStore = StyleQuaca;

export default StyleStore;