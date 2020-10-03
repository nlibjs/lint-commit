import {testFunction} from '@nlib/test';
import {getCommitMessageFile} from './getCommitMessageFile';

const EnvName = 'CommitMessageFile';

process.env[EnvName] = module.id;

testFunction(getCommitMessageFile, {input: module.id, expected: module.id});
testFunction(getCommitMessageFile, {input: EnvName, expected: module.id});
