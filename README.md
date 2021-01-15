# Description

A simple TypeScript application template. It comes with the following preconfigured
- Jasmine set up for testing. The testing files should to in a folder called spec at the same level as the src folder.
- Linting comes with clang-format. Configure this however you want in the .clang-format file.

## Requirements
- You must run `npm install` from the command line when first opening the project.


## How to

### Run a debug session without VS Code breakpoints
From the command line run `npm run debug`. If you want to run with breakpoints in VS Code then you must select your debug type from the debug pane and then hit `F5`.

### Run unit tests
From the command line run `npm run test`.

### Debug unit tests
Select a `Debug Current Test File` or `Debug All Tets` profile from the debug pane in VS Code and hit `F5`.

### Build the project
From the command link run `npm build`. This will run all tests firs and then it will build the project if there were no failing tests.
