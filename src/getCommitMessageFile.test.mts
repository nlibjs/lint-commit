import { fileURLToPath } from 'url';
import ava from 'ava';
import { getCommitMessageFile } from './getCommitMessageFile.mjs';

const moduleId = fileURLToPath(import.meta.url);

ava(`${moduleId} → ${moduleId}`, async (t) => {
  t.is(await getCommitMessageFile(moduleId), moduleId);
});

const EnvName = 'CommitMessageFile';
ava(`${EnvName} → ${moduleId}`, async (t) => {
  process.env[EnvName] = moduleId;
  t.is(await getCommitMessageFile(EnvName), moduleId);
});
