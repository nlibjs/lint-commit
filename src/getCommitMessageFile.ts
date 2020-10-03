import {AppError} from '@nlib/global';
import {statOrNull} from '@nlib/nodetool';

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
    throw new AppError({
        code: 'NoMessageFile',
        data: filePathOrEnvironmentVariableName,
    });
};
