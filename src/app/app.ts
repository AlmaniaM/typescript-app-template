export class App {
  public async run(params: string[], cwd: string): Promise<void> {
    return await new Promise((resolve, reject) => {
      try {
        console.log('Hello World');
        resolve();
      } catch ( error ) {
        reject(error);
      }
    });
  }
}
