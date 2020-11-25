import { ReactWidget } from '@jupyterlab/apputils';

import React from 'react';
import browser from './browser.json';

/**
 * React component for a counter.
 *
 * @returns The React component
 */
const Libraries = (): JSX.Element => {
  // const [counter, setCounter] = useState(0);
  console.log("here")
  let array = browser;
  const browserData = browser.map(br => (
      <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  console.log(array)
  return (
    <div style={{ overflowY: 'scroll', maxHeight: '100%', textAlign: 'left' }}>
      <label style={{ fontSize: '16px' }}>
        Search: 
    <input type="text" name="search" />
      </label>

      <div className="accordion">
        <label htmlFor="tm" className="accordionitem">Browser <span className="arrow">&raquo;</span></label>
        <input type="checkbox" id="tm"/>
        {browserData}
      </div>
     
    </div>
  );
};

/**
 * A Counter Lumino Widget that wraps a CounterComponent.
 */
export class Panel extends ReactWidget {
  /**
   * Constructs a new CounterWidget.
   */
  constructor() {
    super();
    this.addClass('jp-ReactWidget');
  }

  render(): JSX.Element {
    return <Libraries />;
  }
}
