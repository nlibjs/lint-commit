import * as fs from 'fs';
import {LintError} from './LintError.private';

const isRecordLike = (input: unknown): input is Record<string, unknown> => {
    switch (typeof input) {
    case 'object':
    case 'function':
        return true;
    default:
        return false;
    }
};
const statOrNull = async (input: fs.PathLike) => {
    return await fs.promises.stat(input).catch((error) => {
        if (isRecordLike(error) && error.code === 'ENOENT') {
            return null;
        }
        throw error;
    });
};
export const getCommitMessageFile = async (
    filePathOrEnvironmentVariableName: string,
): Promise<string> => {
    let stats = await statOrNull(filePathOrEnvironmentVariableName);
    if (stats) {
        return filePathOrEnvironmentVariableName;
    }
    const environmentValue = process.env[filePathOrEnvironmentVariableName];
    if (environmentValue) {
        stats = await statOrNull(environmentValue);
        if (stats) {
            return environmentValue;
        }
    }
    throw new LintError({
        code: 'NoMessageFile',
        message: 'Cannot find the message file',
    });
};
