
export type Collection = {

  /**
   * Specify the relative path to the collection file to run. Path should start after ./assets/collection-files/<Your path here...>.
   *
   * @type {string}
   */
  collection: string;

  /**
   * Specify the relative string login collection path here. Path should start after ./assets/collection-files/<Your path here...>.
   *
   * @type {string}
   */
  loginCollectionName: string;

  /**
   * Specify the token name for this collection that lives in the environment config file.
   *
   * @type {string}
   */
  tokenName: string;
};

export type CompareInfo = {
  /**
   * Specify what type of comparison to use. Ex: lt = 'less than', le = 'less than or equal to', etc....
   *
   * @type {('lt'|'le'|'eq'|'ge'|'gt')}
   */
  compareType: 'lt'|'le'|'eq'|'ge'|'gt';

  /**
   * Specify the number to compare against.
   *
   * @type {number}
   */
  threshold?: number;
};

export type DataType = 'array'|'object'|'number'|'function'|'string'|'boolean'|'bigint'|'symbol'|'undefined';

export interface EmailInfo {
  /**
   * Specify the host name to use when sending an email.
   *
   * @type {string}
   * @memberof EmailInfo
   */
  host: string;

  /**
   * Specify the port.
   *
   * @type {number}
   * @memberof EmailInfo
   */
  port: number;

  /**
   * Specify the email sender address.
   *
   * @type {string}
   * @memberof EmailInfo
   */
  from?: string;
  username?: string;
  password?: string;
}

export type MainConfig = {
  /**
   * If true then all currently running instances will terminate.
   *
   * @type {boolean}
   */
  terminate: boolean;

  /**
   * Specify email information to use when sending an email.
   *
   * @type {EmailInfo}
   */
  email: EmailInfo;

  /**
   * Specifies how long files/folders can live before being cleaned up as well as a maximum
   * allowed count of files/folders regardless of time.
   *
   * @type {MaintenanceInfo}
   */
  maintenance: MaintenanceInfo;

  connectionStringConfigPath: string;

  /**
   * A string name for a project which will contain string keys for each different test info.
   */
  [key: string]: MainConfigProject | any;
};

export type MaintenanceInfo = {
  /**
   * (Optional) Specify the time span for files/folders to live.
   *
   * @type {TimeInfo}
   */
  timeInfo?: TimeInfo;

  /**
   * Specify the maximum allowed files/folders to live. Files and folders will be left
   * from newest to oldest.
   *
   * @type {number}
   */
  maxFilesFolders: number;
};

export type MainConfigProject = {
  /**
   * A string name of the test within a project. The value should be a MainConfigProjectInfo object that defines
   * where the project config file is.
   */
  [key: string]: MainConfigProjectInfo
};

export type MainConfigProjectInfo = {
  /**
   * The relative string path to the project config file to use. The path should start after ./assets/config/<Your path goes here>.
   *
   * @type {string}
   */
  projectConfigPath: string;

  /**
   * When true, if the program is running it will terminate once this property is checked.
   *
   * @type {boolean}
   */
  terminate: boolean;

  /**
   * Specifies how long files/folders can live before being cleaned up as well as a maximum
   * allowed count of files/folders regardless of time.
   *
   * @type {MaintenanceInfo}
   */
  maintenance: MaintenanceInfo;
};

export type ComparedResultsColumns = {
  /**
   * A string key that can have a ComparedInfo object that can be used to compare results or simply
   * a boolean as true if you want to include the column and not compare it.
   *
   */
  [key: string]: CompareInfo|boolean;
};

export type SendEmailInfo = {
  /**
   * (Optional) Who to send the email from. The main config should have this defined. If you define it
   * here then it will override the main config sender.
   *
   * @type {string}
   */
  from?: string;

  /**
   * The message to send in the body of the email.
   *
   * @type {string}
   */
  message: string;

  /**
   * You can optionally send an HTML email. If you send an HTML email the message will not be used.
   *
   * @type {string}
   */
  html?: string;

  /**
   * Subject of the email.
   *
   * @type {string}
   */
  subject: string;

  /**
   * Recipients to send the email to.
   *
   * @type {string[]}
   */
  to: string[];
};

export type ProjectConfig = {
  /**
   * The string name of the project config that is running.
   *
   * @type {string}
   */
  name: string;

  /**
   * The amount of time to wait between load test rounds.
   *
   * @type {TimeInfo}
   */
  debounceBetweenRequests: TimeInfo;

  /**
   * A list of collections to run as the load test.
   *
   * @type {Collection[]}
   */
  collections: Collection[];

  /**
   * Columns to keep for the compared results file.
   *
   * @type {ComparedResultsColumns}
   */
  comparedResultsColumns: ComparedResultsColumns;

  /**
   * The string relevant path to the environment config file. Path should start after the ./assets/environment/ path.
   *
   * @type {string}
   */
  environmentPath: string;

  /**
   * The amount of time the load test should run for.
   *
   * @type {TimeInfo}
   */
  executionTime: TimeInfo;

  /**
   * The string relevant path to the login collection. Path should start from ./assets/collection-files/ path.
   *
   * @type {string}
   */
  loginCollectionPath: string;

  /**
   * The string relevant path to the file to use as the base when comparing load test results.
   *
   * @type {string}
   */
  resultsToCompare: string;

  /**
   * The number of users running in the load test.
   *
   * @type {number}
   */
  userCount: number;

  /**
   * Whether or not to skip logging in when running the load test. Saves time when debugging.
   *
   * @type {boolean}
   */
  skipLogin: boolean;

  /**
   * The threshold to use for all columns. If specified within the comparedResultsColumns then this will be overridden
   * for each column that defines a threshold.
   *
   * @type {number}
   */
  threshold: number;

  /**
   * Information on what the email should look like when sending the notification
   * of comparison violations.
   *
   * @type {SendEmailInfo}
   */
  comparedResultsEmail: SendEmailInfo;
};

export type TimeInfo = {
  /**
   * The type of time to calculate in milliseconds.
   *
   * @type {TimeType}
   */
  type: TimeType;

  /**
   * The number of time type to calculate in milliseconds.
   *
   * @type {number}
   */
  count: number
};

export type TimeType = 'days'|'hours'|'minutes'|'seconds';

export type EmailSenderConfig = {
  /**
   * The string name of the project that is currently running.
   *
   * @type {string}
   */
  projectName: string;

  /**
   * The string name of the test for the currently running project.
   *
   * @type {string}
   */
  testName: string;

  /**
   * The absolute string path to the main config file to use.
   *
   * @type {string}
   */
  mainConfigPath: string;

  /**
   * The absolute string path to the project root folder.
   *
   * @type {string}
   */
  rootDirectoryPath: string;
};
