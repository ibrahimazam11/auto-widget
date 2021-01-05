import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { MainAreaWidget } from '@jupyterlab/apputils';
// import { PanelLayout } from '@lumino/widgets';

import { ILauncher } from '@jupyterlab/launcher';

// import { reactIcon } from '@jupyterlab/ui-components';

import { Panel } from './widget';

/**
 * The command IDs used by the react-widget plugin.
 */
// namespace CommandIDs {
//   export const create = 'create-react-widget';
// }

/**
 * Initialization data for the react-widget extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'react-widget',
  autoStart: true,
  optional: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    // const { commands } = app;
    const content = new Panel();
    const widget = new MainAreaWidget<Panel>({ content });
    widget.title.iconClass = 'jp-Auto-icon'
    widget.title.caption  = 'Autosphere Libraries'
    app.shell.add(widget, 'left', { rank: 102 });
    // const command = CommandIDs.create;
    // commands.addCommand(command, {
    //   caption: 'Create a new React Widget',
    //   label: 'Autosphere',
    //   icon: args => (args['isPalette'] ? null : reactIcon),
    //   execute: () => {
    //     // const content = new Panel();
    //     // const widget = new MainAreaWidget<Panel>({ content });
    //     // widget.title.label = 'Autosphere 123';
    //     // widget.title.icon = ''
    //     // app.shell.add(widget, 'left', { rank: 102 });
    //   }
    // });

    // if (launcher) {
    //   launcher.add({
    //     command
    //   });
    // }
  }
};

export default extension;
