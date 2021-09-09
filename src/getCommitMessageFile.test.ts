import {testAsyncFunction} from '@nlib/test';
import {getCommitMessageFile} from './getCommitMessageFile';

const EnvName = 'CommitMessageFile';

process.env[EnvName] = module.id;

testAsyncFunction(getCommitMessageFile, [module.id], module.id);
testAsyncFunction(getCommitMessageFile, [EnvName], module.id);
