# @sec-ant/wc-progress-bar

[![release status](https://github.com/Sec-ant/wc-progress-bar/actions/workflows/release.yml/badge.svg)](https://github.com/Sec-ant/wc-progress-bar/actions/workflows/release.yml)

A `<progress-bar>` web component powered by [Lit](https://lit.dev/).

## Install

```bash
npm i @sec-ant/wc-progress-bar
```

## Usage

This package does not bundle dependencies inside it, and is designed to be used with a build tool. For further information on this design decision, please check [this link](https://lit.dev/docs/tools/publishing/#don't-bundle-minify-or-optimize-modules).

This packages exports 3 import paths: `@sec-ant/wc-progress-bar/pure`, `@sec-ant/wc-progress-bar/side-effects` and `@sec-ant/wc-progress-bar`.

### `@sec-ant/wc-progress-bar/pure`

This subpath exports the `ProgressBarElement` class. You'll have to manually register it on the [`CustomElementRegistry`](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry) to use the web component.

In your script:

```ts
import { ProgressBarElement } from "@sec-ant/wc-progress-bar/pure";

customElements.define("progress-bar", ProgressBarElement);
```

Afterwards, in your html file:

```html
<progress-bar value="0.5"></progress-bar>
```

Before https://github.com/WICG/webcomponents/issues/716 is resolved, you'll have to handle possible tag name collisions yourself.

If you use Typescript and wants `document.createElement("progress-bar")` to infer the `ProgressBarElement` type for you, you should create a declaration file to augment the types:

```ts
declare global {
  interface HTMLElementTagNameMap {
    "progress-bar": ProgressBarElement;
  }
}
```

### `@sec-ant/wc-progress-bar/side-effects`

This subpath will automatically register `ProgressBarElement` on the `CustomElementRegistry` with the tag name `progress-bar`, only if the tag name `progress-bar` isn't already registered. `HTMLElementTagNameMap` will be automatically augmented.

In your script:

```ts
import "@sec-ant/wc-progress-bar/side-effects";
```

Afterwards, in your html file:

```html
<progress-bar value="0.5"></progress-bar>
```

### `@sec-ant/wc-progress-bar`

This works just like `side-effects` but also exports the `ProgressBarElement` class.

## Attributes

### `value`

The ratio of the progress bar from 0 ~ 1.

Default: "0"

### `hide`

Whether to hide the progress bar.

Default: unpresent.

### `animation-duration`

The animation duration in ms.

Default: "300"
