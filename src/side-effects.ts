import { ProgressBarElement } from "./ProgressBarElement.js";

const TAG_NAME = "progress-bar";

customElements.get(TAG_NAME) ??
  customElements.define(TAG_NAME, ProgressBarElement);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: ProgressBarElement;
  }
}
