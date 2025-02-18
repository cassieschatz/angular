/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {DomAdapter} from '../dom/dom_adapter';



/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export abstract class GenericBrowserDomAdapter extends DomAdapter {
  constructor() { super(); }

  getDistributedNodes(el: HTMLElement): Node[] { return (<any>el).getDistributedNodes(); }
  supportsDOMEvents(): boolean { return true; }
}
