import {EmailSenderConfig, MainConfig, MainConfigProjectInfo} from './types';

export interface MainParams {
  projectName: string;
  testName: string;
  isProduction: boolean;
  mainConfigPath: string;
  rootDirectoryPath: string;
}

export class App {
  public async run(params: string[], cwd: string): Promise<void> {
    console.log('Hello World');
  }
}
