import {App} from './app';

const args = process.argv.slice(2);

async function main(argList: any[], cwd: string) {
  const app = new App();
  await app.run(argList, cwd);
}

main(args, __dirname);
