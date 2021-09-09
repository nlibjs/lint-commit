import {statOrNull} from '@nlib/nodetool';
import {LintError} from './LintError.private';

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
