import {promises as afs} from 'fs';
import * as os from 'os';
import * as path from 'path';
import {fileURLToPath} from 'url';
import ava from 'ava';
import {exec} from './exec.private';

const scriptPath = fileURLToPath(new URL('./cli.mjs', import.meta.url));

ava('lint a commit message', async (t) => {
    const directory = await afs.mkdtemp(path.join(os.tmpdir(), 'lint-commit'));
    const messageFile = path.join(directory, 'COMMIT_EDITMSG');
    await afs.writeFile(messageFile, [
        '# Comment',
        'feat(scope): subject message',
        'body line 1',
        'body line 2',
        '# Comment',
    ].join('\n'));
    t.log(await exec(`node ${scriptPath} --input ${messageFile}`));
    t.pass();
});

ava('ignore message', async (t) => {
    const directory = await afs.mkdtemp(path.join(os.tmpdir(), 'lint-commit'));
    const messageFile = path.join(directory, 'COMMIT_EDITMSG');
    await afs.writeFile(messageFile, '1.2.3');
    t.log(await exec(`node ${scriptPath} --input ${messageFile}`));
    t.pass();
});

ava('lint an invalid commit message', async (t) => {
    const directory = await afs.mkdtemp(path.join(os.tmpdir(), 'lint-commit'));
    const messageFile = path.join(directory, 'COMMIT_EDITMSG');
    await afs.writeFile(messageFile, [
        '# Comment',
        'feat subject message',
        'body line 1',
        'body line 2',
        '# Comment',
    ].join('\n'));
    await t.throwsAsync(async () => {
        t.log(await exec(`node ${scriptPath} --input ${messageFile}`));
    });
});
