import brownSloth from "../images/themes/sloth/brown-ninja.png";
import greenSloth from "../images/themes/sloth/green-ninja.png";
import redSloth from "../images/themes/sloth/red-ninja.png";

import flyingCat from "../images/themes/cat/flying-cat.jpg";
import mexicanCat from "../images/themes/cat/mexican-cat.jpg";
import scaredCat from "../images/themes/cat/scared-cat.jpg";

import cloudDuck from "../images/themes/duck/cloud-duck.jpg";
import polkaDotsDuck from "../images/themes/duck/polka-dots-duck.jpg";
import watermelonDuck from "../images/themes/duck/watermelon-duck.jpg";

import angryGeorge from "../images/themes/george/angry-george.jpg";
import happyGeorge from "../images/themes/george/happy-george.jpg";
import sillyGeorge from "../images/themes/george/silly-george.jpg";

import granny from "../images/themes/ice-age/granny.png";
import scrat from "../images/themes/ice-age/scrat.png";
import sid from "../images/themes/ice-age/sid.jpg";

import billAndTedKeanu from "../images/themes/keanu/bill-and-ted-keanu.png";
import matrixKeanu from "../images/themes/keanu/matrix-keanu.png";
import wicksKeanu from "../images/themes/keanu/wicks-keanu.jpg";

import butters from "../images/themes/south-park/butters.png";
import cartman from "../images/themes/south-park/cartman.png";
import jimmy from "../images/themes/south-park/Jimmy.png";

import Theme from "../Interfaces/Theme";

const imageCollection: Theme = {
  sloth: [brownSloth, greenSloth, redSloth],
  cat: [flyingCat, mexicanCat, scaredCat],
  duck: [cloudDuck, polkaDotsDuck, watermelonDuck],
  george: [angryGeorge, happyGeorge, sillyGeorge],
  "ice-age": [granny, scrat, sid],
  keanu: [billAndTedKeanu, matrixKeanu, wicksKeanu],
  "south-park": [butters, cartman, jimmy],
};

export default imageCollection;
