import { ReactWidget } from '@jupyterlab/apputils';

import React from 'react';

import archive from './docs/archive.json';
import browser from './docs/browser.json';
import database from './docs/database.json';
import filesystem from './docs/filesystem.json';
import ftp from './docs/ftp.json';
import http from './docs/http.json';
import images from './docs/images.json';
import Netsuite from './docs/Netsuite.json';
import Notifier from './docs/Notifier.json';
import PDF from './docs/PDF.json';
import RobotLogListener from './docs/RobotLogListener.json';
import SalesForce from './docs/SalesForce.json';
import sap from './docs/sap.json';
import slack from './docs/slack.json';
import Tables from './docs/Tables.json';
import Tasks from './docs/Tasks.json';
import Twitter from './docs/Twitter.json';

/**
 * React component for a counter.
 *
 * @returns The React component
 */
const Libraries = (): JSX.Element => {
  // const [counter, setCounter] = useState(0);
  let array = [];
  const archiveData = archive.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'archive', name: 'Archive', data: archiveData })

  const browserData = browser.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'browser', name: 'Browser', data: browserData })

  const databaseData = database.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'database', name: 'Database', data: databaseData })

  const filesystemData = filesystem.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'filesystem', name: 'File System', data: filesystemData })

  const ftpData = ftp.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'ftp', name: 'FTP', data: ftpData })

  const httpData = http.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'http', name: 'HTTP', data: httpData })

  const imagesData = images.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'images', name: 'Images', data: imagesData })

  const NetsuiteData = Netsuite.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'netsuite', name: 'Net Suite', data: NetsuiteData })

  const NotifierData = Notifier.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'notifier', name: 'Notifier', data: NotifierData })

  const PDFData = PDF.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'pdf', name: 'PDF', data: PDFData })

  const robotData = RobotLogListener.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'robot', name: 'Robot Log Listener', data: robotData })

  const salesforceData = SalesForce.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'salesforce', name: 'Sales Force', data: salesforceData })

  const sapData = sap.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'sap', name: 'SAP', data: sapData })

  const slackData = slack.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'slack', name: 'Slack', data: slackData })

  const tablesData = Tables.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'tables', name: 'Tables', data: tablesData })

  const tasksData = Tasks.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'tasks', name: 'Tasks', data: tasksData })

  const twitterData = Twitter.map(br => (
    <p className="hiddentext" style={{ fontSize: '15px', textAlign: 'left' }}>{br.keyword}</p>
  ))
  array.push({ id: 'twitter', name: 'Twitter', data: twitterData })


  const allData = array.map((arr, i) => (
    <div key={i} className="accordion">
      <label htmlFor={arr.id} className="accordionitem">{arr.name} <span className="arrow">&raquo;</span></label>
      <input type="checkbox" id={arr.id} />
      {arr.data}
    </div>
  ))

  function change() {
    alert("hello")
  }

  return (
    <div style={{ overflowY: 'scroll', maxHeight: '100%', textAlign: 'left' }}>

      <label style={{ fontSize: '16px' }}>
        Search:
    <input type="text" name="search" onChange={change}/>
      </label>

      {allData}

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
