/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('cds-tabs-extended-media (cdn)', () => {
  it('should load the default cds-tabs-extended-media example', () => {
    cy.visit('/tabs-extended-media/cdn.html');

    // Take a snapshot for visual diffing
    cy.percySnapshot('cds-tabs-extended-media | cdn | default');
  });
});
