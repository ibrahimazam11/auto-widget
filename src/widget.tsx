import _ from "lodash";
import { ReactWidget } from '@jupyterlab/apputils';
import $ from 'jquery';
import 'jqueryui';
import "bootstrap";

import React, { useState, useRef, useEffect } from 'react';

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

import aws from './docs/cloud/aws.json';
import azure from './docs/cloud/azure.json';
import google from './docs/cloud/google.json';

import decorator from './docs/core/decorator.json';
import helpers from './docs/core/helpers.json';
import locators from './docs/core/locators.json';
import notebook from './docs/core/notebook.json';
import types from './docs/core/types.json';
import webdriver from './docs/core/webdriver.json';

import clipboard from './docs/desktop/clipboard.json';
import operatingsystem from './docs/desktop/operatingsystem.json';
import windows from './docs/desktop/windows.json';

import exchange from './docs/email/Exchange.json';
import imapsmtp from './docs/email/imapsmtp.json';

import excelapp from './docs/excel/application.json';
import files from './docs/excel/files.json';

import outlookapp from './docs/outlook/application.json';

import items from './docs/robocloud/items.json';
import secrets from './docs/robocloud/secrets.json';

import wordapp from './docs/word/application.json';


/**
 * React component for a counter.
 *
 * @returns The React component
 */
const Libraries = (): JSX.Element => {

  const [description, setDescription] = useState("")
  const [params, setParams] = useState("")

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed.");
        searchListener()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  function clickHandler(data: any) {
    console.log(data);
    setDescription(data.description);
    
    let args = data.arguments.split(',')
    
    const paramArr = args.map((arg: any) => <tr>{arg}</tr>)
    
    setParams(paramArr);

    //alert(data.keyword);
    $(".copiedtext").css('display','block');
    $(".copiedtext").html("Copied: <br />" + data.keyword);
    setTimeout(function () {
      $(".copiedtext").css('display','none');
      $(".copiedtext").html('');

    }, 5000);
    navigator.clipboard.writeText(data.keyword);
  }

  let array: any = [];
  const archiveData = archive.map((dataObj: any, i: any) => (
    <p className="hiddentext p-archive" key={i} style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'archive', name: 'Archive', data: archiveData })

  const browserData = browser.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-browser" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'browser', name: 'Browser', data: browserData })

  const databaseData = database.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-database" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'database', name: 'Database', data: databaseData })

  const filesystemData = filesystem.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-filesystem" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'filesystem', name: 'File System', data: filesystemData })

  const ftpData = ftp.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-ftp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'ftp', name: 'FTP', data: ftpData })

  const httpData = http.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-http" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'http', name: 'HTTP', data: httpData })

  const imagesData = images.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-images" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'images', name: 'Images', data: imagesData })

  const NetsuiteData = Netsuite.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-netsuite" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'netsuite', name: 'Net Suite', data: NetsuiteData })

  const NotifierData = Notifier.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-notifier" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'notifier', name: 'Notifier', data: NotifierData })

  const PDFData = PDF.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-pdf" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'pdf', name: 'PDF', data: PDFData })

  const robotData = RobotLogListener.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-robot" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'robot', name: 'Robot Log Listener', data: robotData })

  const salesforceData = SalesForce.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-salesforce" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'salesforce', name: 'Sales Force', data: salesforceData })

  const sapData = sap.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-sap" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'sap', name: 'SAP', data: sapData })

  const slackData = slack.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-slack" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'slack', name: 'Slack', data: slackData })

  const tablesData = Tables.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-tables" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'tables', name: 'Tables', data: tablesData })

  const tasksData = Tasks.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-tasks" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'tasks', name: 'Tasks', data: tasksData })

  const twitterData = Twitter.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-twitter" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'twitter', name: 'Twitter', data: twitterData })

  const awsData = aws.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-aws" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'aws', name: 'AWS', data: awsData })

  const azureData = azure.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-azure" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'azure', name: 'Azure', data: azureData })

  const googleData = google.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-google" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'google', name: 'Google', data: googleData })

  const decoratorsData = decorator.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-decorator" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'decorator', name: 'Decorator', data: decoratorsData })

  const helpersData = helpers.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-helpers" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'helpers', name: 'Helpers', data: helpersData })

  const locatorsData = locators.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-locators" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'locators', name: 'Locators', data: locatorsData })

  const notebookData = notebook.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-notebook" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'notebook', name: 'Notebook', data: notebookData })

  const typesData = types.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-types" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'types', name: 'Types', data: typesData })

  const webdriverData = webdriver.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-webdriver" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'webdriver', name: 'Webdriver', data: webdriverData })

  const clipboardData = clipboard.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-clipboard" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'clipboard', name: 'Clipboard', data: clipboardData })

  const operatingsystemData = operatingsystem.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-operatingsystem" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'operatingsystem', name: 'Operating System', data: operatingsystemData })

  const windowsData = windows.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-windows" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'windows', name: 'windows', data: windowsData })

  const exchangeData = exchange.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-exchange" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'exchange', name: 'Exchange', data: exchangeData })

  const imapsmtpData = imapsmtp.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-imapsmtp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'imapsmtp', name: 'IMAP SMTP', data: imapsmtpData })

  const excelappData = excelapp.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-excelapp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'excelapp', name: 'Excel Application', data: excelappData })

  const filesData = files.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-files" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'files', name: 'Files', data: filesData })

  const outlookappData = outlookapp.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-outlookapp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'outlookapp', name: 'Outlook Application', data: outlookappData })

  const itemsData = items.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-items" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'items', name: 'Items', data: itemsData })

  const secretsData = secrets.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-secrets" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'secrets', name: 'Secrets', data: secretsData })

  const wordappData = wordapp.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-wordapp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj.keyword}</a></p>
  ))
  array.push({ id: 'wordapp', name: 'Word Application', data: wordappData })


  let dataArr = array.map((arr: any, i: any) => (
    <div key={i} className={arr.name.toLowerCase() + ' accordion'} >
      <label htmlFor={arr.id} className="accordionitem">{arr.name} <span className="arrow">&raquo;</span></label>
      <input type="checkbox" id={arr.id} />
      {arr.data}
    </div>
  ))

  const [allData, setAllData] = useState(dataArr);
  const searchForm = useRef(null)

  const searchListener = () => {

    const form = searchForm.current;
    const value = form['search'].value

    let arrayClone = array;
    arrayClone = arrayClone.map((arr: any) => {
      return {
        id: arr.id, name: arr.name, data: arr.data.filter((element: any) => {
          return (element.props.children.props.children.toUpperCase().includes(value.toUpperCase())) ? arr : false
        })
      }
    })

    let dataArr: any = []
    arrayClone.map((array: any) => {
      let arr1: any = []
      array.data.map((arr: any) => arr.props ? arr.props.children ? arr1.push(arr) : null : null)
      arr1.length ? dataArr.push({ id: array.id, name: array.name, data: arr1 }) : null
    })

    let data = dataArr.map((arr: any, i: any) => (
      <div key={i} className={arr.name.toLowerCase() + ' accordion'} >
        <label htmlFor={arr.id} className="accordionitem">{arr.name} <span className="arrow">&raquo;</span></label>
        <input type="checkbox" id={arr.id} />
        {arr.data}
      </div>
    ))

    setAllData([...data])


    //   $(".accordion").css("display","none");
    //   let searchedText: string = $(".searchText").val() as string;
    //   searchedText = searchedText.charAt(0).toUpperCase() + searchedText.slice(1);

    //   $('.hiddentext').css('background-color',"#fff");
    //   $(".hiddentext:contains("+searchedText+")").each(function() {

    //     var cla=$(this).attr('class');
    //     var str=cla.split(" ");
    //     var clname=str[1].split("-");
    //     $("."+clname[1]).removeAttr('style');
    // });
  }

  return (
    <div style={{ textAlign: 'left', verticalAlign: 'top', width: '100%',height:'100%' }}>
      <div className='listofdata'>
        <p className='copiedtext'>

        </p>
        <label style={{ fontSize: '16px' }}>
          {/* Search: */}
          <form className='formstyle' ref={searchForm} action="javascript:void(-1)">
            <input type="text" placeholder='Type to Search' className="searchText" name="search" />
            <button className='btn' onClick={searchListener} >Search</button>

          </form>
        </label>

        {allData}
      </div>
      <div className='discriptionofdata'>
        <div style={{ fontSize: 'small', border: 'ridge', wordWrap: 'break-word', minHeight: '80px' }}><b>Parameters:</b>
          <table>
            {params}
          </table>
        </div>
        <p style={{ fontSize: 'small', border: 'ridge', wordWrap: 'break-word', minHeight: '80px' }}><b>Description:</b> {description}</p>

      </div>
    </div>
  );
};

export class Panel extends ReactWidget {
  constructor() {
    super();
    this.addClass('jp-ReactWidget');
  }

  render(): JSX.Element {
    return <Libraries />;
  }
}
