import MojsCurveEditor from 'mojs-curve-editor';
import * as MojsPlayer from 'mojs-player';
import * as mojs from 'mo-js';

export class MoAnimationController {
  public shape;
  constructor(

  ) {
    let shift = 0;
    let progress = 1;
    let speed = 1;

    // const mojsCurve = new MojsCurveEditor({
    //   // Name of the Curve you are working on. The name is used to
    //   // identify record in `localStorage` to restore the state from
    //   // when page gets reloaded, so please specify unique names if
    //   // you use more than one editor on the same page.
    //   name:         'bounce curve'
    // });

    this.shape = new mojs.Html({
      // HTMLElement to animate. {String, Object} [selector, HTMLElement]
      el: '#shapeOne',
      // ∆ :: translateX property. {String, Number, Object} [value, delta]
      x: { 200: 0, delay: 200, duration: 2000, easing: 'M0, 100 C0, 100 100, 0 100, 0' },
      y: { 0: 200, duration: 2000, easing: 'cubic.out', onComplete () { /* ... */ } },
      // easing: mojsCurve.getEasing()
    });
    const mojsPlayer = new MojsPlayer({ add: this.shape });
  }
}
MoAnimationController.$inject = [];

export default MoAnimationController;
