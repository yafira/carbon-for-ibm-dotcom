# `file-uploader`

## `cds-file-uploader`

##   `Misc attributes`

####     `should render with minimum attributes`

```
<p class="cds--file--label">
  <slot name="label-title">
  </slot>
</p>
<p class="cds--label-description">
  <slot name="label-description">
  </slot>
</p>
<slot name="drop-container">
</slot>
<div class="cds--file-container">
  <slot>
  </slot>
</div>

```

####     `should render with various attributes`

```
<p class="cds--file--label">
  <slot name="label-title">
  </slot>
</p>
<p class="cds--label-description">
  <slot name="label-description">
  </slot>
</p>
<slot name="drop-container">
</slot>
<div class="cds--file-container">
  <slot>
  </slot>
</div>

```

## `cds-file-uploader-item`

##   `Misc attributes`

####     `should render with minimum attributes`

```
<p class="cds--file-filename">
  <slot>
  </slot>
</p>
<span class="cds--file__state-container">
  <cds-loading
    assistive-text="Delete this file"
    type="small"
  >
  </cds-loading>
</span>
<div
  class="cds--form-requirement"
  hidden=""
>
  <div class="cds--form-requirement__title">
  </div>
  <p
    class="cds--form-requirement__supplement"
    hidden=""
  >
  </p>
</div>

```

####     `should render with various attributes`

```
<p class="cds--file-filename">
  <slot>
  </slot>
</p>
<span class="cds--file__state-container">
  <cds-loading
    assistive-text="Delete this file"
    type="small"
  >
  </cds-loading>
</span>
<div class="cds--form-requirement">
  <div class="cds--form-requirement__title">
  </div>
  <p
    class="cds--form-requirement__supplement"
    hidden=""
  >
  </p>
</div>

```

####     `should render uploaded state`

```
<p class="cds--file-filename">
  <slot>
  </slot>
</p>
<span class="cds--file__state-container">
</span>
<div
  class="cds--form-requirement"
  hidden=""
>
  <div class="cds--form-requirement__title">
  </div>
  <p
    class="cds--form-requirement__supplement"
    hidden=""
  >
  </p>
</div>

```

####     `should render editing state`

```
<p class="cds--file-filename">
  <slot>
  </slot>
</p>
<span class="cds--file__state-container">
  <button
    aria-label="Delete this file"
    class="cds--file-close"
    type="button"
  >
  </button>
</span>
<div
  class="cds--form-requirement"
  hidden=""
>
  <div class="cds--form-requirement__title">
  </div>
  <p
    class="cds--form-requirement__supplement"
    hidden=""
  >
  </p>
</div>

```

####     `should render editing state with various attributes`

```
<p class="cds--file-filename">
  <slot>
  </slot>
</p>
<span class="cds--file__state-container">
  <button
    aria-label="Delete this file"
    class="cds--file-close"
    type="button"
  >
  </button>
</span>
<div class="cds--form-requirement">
  <div class="cds--form-requirement__title">
  </div>
  <p
    class="cds--form-requirement__supplement"
    hidden=""
  >
  </p>
</div>

```

## `cds-file-drop-container`

##   `Misc attributes`

####     `should render with minimum attributes`

```
<label
  class="cds--file-browse-btn"
  for="file"
  tabindex="0"
>
  <div
    class="cds--file__drop-container"
    role="button"
  >
    <slot>
    </slot>
    <input
      class="cds--file-input"
      id="file"
      tabindex="-1"
      type="file"
    >
  </div>
</label>
```

####     `should render with various attributes`

```
<label
  class="cds--file-browse-btn cds--file-browse-btn--disabled"
  for="file"
  tabindex="0"
>
  <div
    class="cds--file__drop-container"
    role="button"
  >
    <slot>
    </slot>
    <input
      accept="image/png"
      class="cds--file-input"
      disabled=""
      id="file"
      multiple=""
      tabindex="-1"
      type="file"
    >
  </div>
</label>
```

##   `Handling events`

####     `Should handle drag-over`

```
<label
  class="cds--file-browse-btn"
  for="file"
  tabindex="0"
>
  <div
    class="cds--file__drop-container cds--file__drop-container--drag-over"
    role="button"
  >
    <slot>
    </slot>
    <input
      accept="image/png"
      class="cds--file-input"
      id="file"
      tabindex="-1"
      type="file"
    >
  </div>
</label>
```

## `cds-file-uploader-shell`

## `Misc attributes`

####   `should render with minimum attributes`

```
<strong class="cds--file--label">
  <slot name="label-text">
  </slot>
</strong>
<p class="cds--label-description">
  <slot name="helperText-text">
  </slot>
</p>
<slot name="drop-container">
</slot>
<div class="cds--file-container">
  <slot>
  </slot>
</div>
```

####   `should render with various attributes`

```
<strong class="cds--file--label">
  <slot name="label-text">
    label-text-foo
  </slot>
</strong>
<p class="cds--label-description">
  <slot name="helperText-text">
    helper-text-foo
  </slot>
</p>
<slot name="drop-container">
</slot>
<div class="cds--file-container">
  <slot>
  </slot>
</div>
```

##   `Handling events`

####   `Should handle drag-over`

```
<label
  class="bx--file-browse-btn"
  for="file"
  tabindex="0"
>
  <div
    class="bx--file__drop-container bx--file__drop-container--drag-over"
    role="button"
  >
    <slot>
    </slot>
    <input
      accept="image/png"
      class="bx--file-input"
      id="file"
      tabindex="-1"
      type="file"
    >
  </div>
</label>
```

## `bx-file-uploader-shell`

