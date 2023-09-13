import { LitElement, html, nothing } from "lit";
import { property } from "lit/decorators.js";

export class ProgressBarElement extends LitElement {
  /**
   * Closed mode shadow dom
   */
  static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    mode: "closed",
  };

  /**
   * The progress bar percentage.
   */
  @property({ type: Number })
  value = 1;

  /**
   * Whether hide the progress bar
   */
  @property({ type: Boolean })
  hide = false;

  /**
   * Animation duration in ms.
   */
  @property({ type: Number, attribute: "animation-duration" })
  animationDuration = 300;

  render() {
    return this.hide
      ? nothing
      : html`
          <style>
            div {
              position: fixed;
              display: block;
              top: 0;
              left: 0;
              width: ${this.value * 100}%;
              height: 6px;
              border-radius: 0px ${3 * (1 - this.value)}px
                ${3 * (1 - this.value)}px 0px;
              background: #31abfe;
              z-index: 2147483647;
              transition: width ${this.animationDuration}ms ease-out;
              transform: translate3d(0, 0, 0);
            }
          </style>
          <div></div>
        `;
  }
}
