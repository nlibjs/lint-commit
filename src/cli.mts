#!/usr/bin/env node
import * as console from "node:console";
import * as fs from "node:fs";
import * as process from "node:process";
import * as util from "node:util";
import { Command } from "commander";
import { checkString } from "./checkString.mjs";
import { getCommitMessageFile } from "./getCommitMessageFile.mjs";
import { ignorePatterns } from "./ignore.mjs";
import { parseMessage } from "./parseMessage.mjs";
import { readNonCommentLine } from "./readNonCommentLine.mjs";

const packageJson = JSON.parse(
	fs.readFileSync(new URL("../package.json", import.meta.url), "utf-8"),
) as unknown as { name: string; version: string; description: string };

const program = new Command();
program.name(packageJson.name);
program.description(packageJson.description);
program.requiredOption(
	"--input <string>",
	"A file path to COMMIT_EDITMSG or a variable's name of of the path.",
);
program.version(packageJson.version);
program.action(async ({ input }: { input: string }) => {
	const messageFile = await getCommitMessageFile(input);
	const message = await fs.promises.readFile(messageFile, "utf8");
	const subjectLine = readNonCommentLine(message).next().value ?? "";
	if (ignorePatterns.every((pattern) => !checkString(subjectLine, pattern))) {
		const result = parseMessage(message);
		process.stdout.write(util.inspect(result));
	}
});
program.parseAsync().catch((error) => {
	console.error(error);
	process.exit(1);
});
