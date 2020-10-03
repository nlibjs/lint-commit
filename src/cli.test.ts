import * as os from 'os';
import * as path from 'path';
import {promises as afs} from 'fs';
import ava from 'ava';
import {exec} from '@nlib/nodetool';
const scriptPath = module.id.replace(/\.test\./, '.');

ava('lint a commit message', async (t) => {
    const directory = await afs.mkdtemp(path.join(os.tmpdir(), 'indexen'));
    const messageFile = path.join(directory, 'COMMIT_EDITMSG');
    await afs.writeFile(messageFile, [
        '# Comment',
        'feat(scope): subject message',
        'body line 1',
        'body line 2',
        '# Comment',
    ].join('\n'));
    await exec(`npx ts-node ${scriptPath} --input ${messageFile}`);
    t.pass();
});

ava('lint an invalid commit message', async (t) => {
    const directory = await afs.mkdtemp(path.join(os.tmpdir(), 'indexen'));
    const messageFile = path.join(directory, 'COMMIT_EDITMSG');
    await afs.writeFile(messageFile, [
        '# Comment',
        'feat subject message',
        'body line 1',
        'body line 2',
        '# Comment',
    ].join('\n'));
    await t.throwsAsync(async () => {
        await exec(`npx ts-node ${scriptPath} --input ${messageFile}`);
    });
});

ava('show help', async (t) => {
    const {stdout: help1} = await exec(`npx ts-node ${scriptPath} --help`);
    const {stdout: help2} = await exec(`npx ts-node ${scriptPath} -h`);
    for (const keyword of ['--input', '-i', '--help', '-h', '--version', '-v']) {
        t.true(help1.includes(keyword));
        t.true(help2.includes(keyword));
    }
});

ava('output the version number', async (t) => {
    const {stdout: version1} = await exec(`npx ts-node ${scriptPath} --version`);
    const {stdout: version2} = await exec(`npx ts-node ${scriptPath} -v`);
    t.true((/\d+\.\d+\.\d+/).test(version1.trim()));
    t.true((/\d+\.\d+\.\d+/).test(version2.trim()));
});
