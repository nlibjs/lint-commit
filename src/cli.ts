#!/usr/bin/env node
import * as process from 'process';
import * as console from 'console';
import * as util from 'util';
import * as fs from 'fs';
import * as path from 'path';
import type {Writable} from 'stream';
import {
    createCLIArgumentsParser,
    getVersion,
    serializeDefinitionMap,
} from '@nlib/nodetool';
import {getCommitMessageFile} from './getCommitMessageFile';
import {parseMessage} from './parseMessage';
import {ignorePatterns} from './ignore';
import {checkString} from './checkString';

const parse = createCLIArgumentsParser({
    input: {
        type: 'string',
        alias: 'i',
        description: 'A file path to COMMIT_EDITMSG or a variable\'s name of of the path',
    },
    help: {
        type: 'boolean',
        alias: 'h',
        description: 'Show help',
    },
    version: {
        type: 'boolean',
        alias: 'v',
        description: 'Output the version number',
    },
});

export const nlibLintCommitCLI = async (
    args: Array<string>,
    stdout: Writable = process.stdout,
) => {
    if (args.includes('--help') || args.includes('-h')) {
        stdout.write('nlib-changelog --output path/to/changelog.md\n\n');
        for (const help of serializeDefinitionMap(parse.definition)) {
            stdout.write(help);
        }
    } else if (args.includes('--version') || args.includes('-v')) {
        stdout.write(`${getVersion(path.join(__dirname, '../package.json'))}\n`);
    } else {
        const props = parse(args);
        const messageFile = await getCommitMessageFile(props.input);
        const message = await fs.promises.readFile(messageFile, 'utf8');
        if (ignorePatterns.every((pattern) => !checkString(message, pattern))) {
            const result = parseMessage(message);
            process.stdout.write(util.inspect(result));
        }
    }
};

if (require.main === module) {
    nlibLintCommitCLI(process.argv.slice(2))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
