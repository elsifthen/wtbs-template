// <name>
// Twitter: @<twitter>
// Fxhash: https://www.fxhash.xyz/u/<fxhash>

import { addLetterStyle, LetterStyle } from '../letterstyle';

// To make a new style, copy this template in a new file and import it
// at the begining of ../index.js

// random-fxhash helpers
// (see https://www.npmjs.com/package/@thi.ng/random-fxhash)
import {
  // RND,
  // pick,
  // weighted,
  probability,
} from '@thi.ng/random-fxhash';

addLetterStyle(class StyleName extends LetterStyle {

  static author = '<name>';
  static name = 'StyleName';

  setup() {
    // All randomness should be initialized here.
    // You can use either P5 this.pg.random(...), or random-fxhash
    // helpers
    this._inverted = probability(0.5);
  }

  draw() {
    // this.pg = p5.Renderer context
    // this.size = current letter size (1/2 total size)
    // this.letter = current letter char

    this.pg.strokeWeight(0);
    this.pg.fill(this._inverted ? 0 : 255);
    this.pg.rect(0, 0, this.size);
    this.pg.fill(this._inverted ? 255 : 0);
    this.drawLetter();
  }

});
