/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from './popover.scss';

/**
 * Popover.
 *
 * @element cds-popover
 */
@customElement(`${prefix}-popover-content`)
class CDSPopoverContent extends LitElement {
  /**
   * Specify the popover alignment
   */
  @property({ reflect: true, type: String })
  align = '';

  /**
   * Specify whether a caret should be rendered
   */
  @property({ type: Boolean, reflect: true })
  caret;

  /**
   * Specify whether a dropShadow should be rendered
   */
  @property({ type: Boolean, reflect: true })
  dropShadow = true;

  /**
   * Specify whether the component is currently open or closed
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  /**
   * Render the component using the tab tip variant
   */
  @property({ type: Boolean, reflect: true })
  tabTip = false;

  /**
   * The shadow slot this popover content should be in.
   */
  @property({ reflect: true })
  slot = 'content';

  render() {
    return html`
      <span class="${prefix}--popover-content">
        <slot> </slot>
      </span>
      <span class="${prefix}--popover-caret"></span>
    </span>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPopoverContent;
