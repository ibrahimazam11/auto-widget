import _ from "lodash";
import { ReactWidget } from '@jupyterlab/apputils';
import $ from 'jquery';
import 'jqueryui';
import "bootstrap";

import React, { useState, useRef, useEffect } from 'react';

import archive from './docs/Archive.json';
import browser from './docs/Browser.json';
import crypto from './docs/Crypto.json';
import database from './docs/Database.json';
import dialog from './docs/Dialog.json';
import filesystem from './docs/FileSystem.json';
import ftp from './docs/FTP.json';
import http from './docs/HTTP.json';
import images from './docs/Images.json';
import json from './docs/JSON.json';
import Netsuite from './docs/Netsuite.json';
import Notifier from './docs/Notifier.json';
import PDF from './docs/PDF.json';
import RobotLogListener from './docs/RobotLogListener.json';
import SalesForce from './docs/Salesforce.json';
import sap from './docs/SAP.json';
import slack from './docs/Slack.json';
import Tables from './docs/Tables.json';
import Tasks from './docs/Tasks.json';
import Twitter from './docs/Twitter.json';

import aws from './docs/cloud/aws.json';
import azure from './docs/cloud/azure.json';
import google from './docs/cloud/google.json';

import decorators from './docs/core/decorators.json';
import geometry from './docs/core/geometry.json';
import helpers from './docs/core/helpers.json';
import locators from './docs/core/locators.json';
import notebook from './docs/core/notebook.json';
import robocorp from './docs/core/robocorp.json';
import types from './docs/core/types.json';
import webdriver from './docs/core/webdriver.json';

import clipboard from './docs/Desktop/Clipboard.json';
import operatingsystem from './docs/Desktop/operatingSystem.json';
import windows from './docs/Desktop/windows.json';

import exchange from './docs/Email/Exchange.json';
import imapsmtp from './docs/Email/ImapSmtp.json';

import excelapp from './docs/excel/application.json';
import files from './docs/excel/files.json';

import outlookapp from './docs/outlook/application.json';

import items from './docs/Robocloud/Items.json';
import secrets from './docs/Robocloud/Secrets.json';

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
    setDescription(data.doc);
    
    // let args = data.arguments.split(',')
    
    const paramArr = data.arguments.arg.map((arg: any) => <tr>{arg}</tr>)
    
    setParams(paramArr);

    //alert(data.keyword);
    $(".copiedtext").css('display','block');
    $(".copiedtext").html("Copied: <br />" + data._name);
    setTimeout(function () {
      $(".copiedtext").css('display','none');
      $(".copiedtext").html('');

    }, 5000);
    navigator.clipboard.writeText(data._name);
  }

  let array: any = [];
  const archiveData = archive.keywordspec.kw.map((dataObj: any, i: any) => (
    <p className="hiddentext p-archive" key={i} style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'archive', name: 'Archive', data: archiveData })

  const browserData = browser.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-browser" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'browser', name: 'Browser', data: browserData })

  const cryptoData = crypto.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-crypto" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'crypto', name: 'Crypto', data: cryptoData })

  const databaseData = database.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-database" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'database', name: 'Database', data: databaseData })

  const dialogData = dialog.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-dialog" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'dialog', name: 'Dialog', data: dialogData })

  const filesystemData = filesystem.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-filesystem" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'filesystem', name: 'File System', data: filesystemData })

  const ftpData = ftp.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-ftp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'ftp', name: 'FTP', data: ftpData })

  const httpData = http.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-http" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'http', name: 'HTTP', data: httpData })

  const imagesData = images.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-images" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'images', name: 'Images', data: imagesData })

  const jsonData = json.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-json" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'json', name: 'JSON', data: jsonData })

  const NetsuiteData = Netsuite.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-netsuite" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'netsuite', name: 'Net Suite', data: NetsuiteData })

  const NotifierData = Notifier.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-notifier" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'notifier', name: 'Notifier', data: NotifierData })

  const PDFData = PDF.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-pdf" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'pdf', name: 'PDF', data: PDFData })

  const robotData = RobotLogListener.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-robot" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'robot', name: 'Robot Log Listener', data: robotData })

  const salesforceData = SalesForce.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-salesforce" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'salesforce', name: 'Sales Force', data: salesforceData })

  const sapData = sap.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-sap" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'sap', name: 'SAP', data: sapData })

  const slackData = slack.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-slack" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'slack', name: 'Slack', data: slackData })

  const tablesData = Tables.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-tables" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'tables', name: 'Tables', data: tablesData })

  const tasksData = Tasks.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-tasks" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'tasks', name: 'Tasks', data: tasksData })

  const twitterData = Twitter.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-twitter" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'twitter', name: 'Twitter', data: twitterData })

  const awsData = aws.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-aws" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'aws', name: 'AWS', data: awsData })

  const azureData = azure.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-azure" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'azure', name: 'Azure', data: azureData })

  const googleData = google.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-google" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'google', name: 'Google', data: googleData })

  const decoratorsData = decorators.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-decorator" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'decorator', name: 'Decorator', data: decoratorsData })

  const geometryData = geometry.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-geometry" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'geometry', name: 'Geometry', data: geometryData })

  const helpersData = helpers.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-helpers" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'helpers', name: 'Helpers', data: helpersData })

  const locatorsData = locators.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-locators" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'locators', name: 'Locators', data: locatorsData })

  const notebookData = notebook.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-notebook" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'notebook', name: 'Notebook', data: notebookData })

  const robocorpData = robocorp.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-robocorp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'robocorp', name: 'Robocorp', data: robocorpData })

  const typesData = types.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-types" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'types', name: 'Types', data: typesData })

  const webdriverData = webdriver.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-webdriver" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'webdriver', name: 'Webdriver', data: webdriverData })

  const clipboardData = clipboard.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-clipboard" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'clipboard', name: 'Clipboard', data: clipboardData })

  const operatingsystemData = operatingsystem.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-operatingsystem" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'operatingsystem', name: 'Operating System', data: operatingsystemData })

  const windowsData = windows.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-windows" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'windows', name: 'windows', data: windowsData })

  const exchangeData = exchange.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-exchange" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'exchange', name: 'Exchange', data: exchangeData })

  const imapsmtpData = imapsmtp.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-imapsmtp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'imapsmtp', name: 'IMAP SMTP', data: imapsmtpData })

  const excelappData = excelapp.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-excelapp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'excelapp', name: 'Excel Application', data: excelappData })

  const filesData = files.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-files" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'files', name: 'Files', data: filesData })

  const outlookappData = outlookapp.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-outlookapp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'outlookapp', name: 'Outlook Application', data: outlookappData })

  const itemsData = items.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-items" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'items', name: 'Items', data: itemsData })

  const secretsData = secrets.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-secrets" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
  ))
  array.push({ id: 'secrets', name: 'Secrets', data: secretsData })

  const wordappData = wordapp.keywordspec.kw.map((dataObj: any, i: any) => (
    <p key={i} className="hiddentext p-wordapp" style={{ textAlign: 'left' }}><a onClick={() => clickHandler(dataObj)}>{dataObj._name}</a></p>
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
