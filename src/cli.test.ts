import { execFile } from "node:child_process";
import { promises as afs } from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import ava from "ava";

const scriptPath = fileURLToPath(new URL("./cli.mjs", import.meta.url));
const run = promisify(execFile);
const lintMessage = async (message: string) => {
	const directory = await afs.mkdtemp(path.join(os.tmpdir(), "lint commit "));
	const messageFile = path.join(directory, "COMMIT_EDITMSG");
	try {
		await afs.writeFile(messageFile, message);
		return await run(process.execPath, [scriptPath, "--input", messageFile]);
	} finally {
		await afs.rm(directory, { recursive: true, force: true });
	}
};

ava("lint a commit message from a path containing spaces", async (t) => {
	await t.notThrowsAsync(
		lintMessage(
			[
				"# Comment",
				"feat(scope): subject message",
				"body line 1",
				"Merge the resulting files after validation.",
				"# Comment",
			].join("\n"),
		),
	);
});

for (const subject of [
	"1.2.3",
	"Merge branch topic",
	"Merged topic",
	'Revert "feat: change"',
]) {
	for (const eol of ["\n", "\r\n"]) {
		ava(
			`ignore ${subject} after comments (${JSON.stringify(eol)})`,
			async (t) => {
				const result = await lintMessage(
					["# Comment", subject, "", "Body"].join(eol),
				);
				t.is(result.stdout, "");
				t.is(result.stderr, "");
			},
		);
	}
}

ava("lint an invalid commit message", async (t) => {
	await t.throwsAsync(
		lintMessage(
			[
				"# Comment",
				"feat subject message",
				"body line 1",
				"body line 2",
				"# Comment",
			].join("\n"),
		),
		{ code: 1 },
	);
});

for (const message of [
	"feta: misspelled type\n\nMerge the resulting files after validation.",
	"# Comment\r\nfeta: misspelled type\r\n\r\nMerged example in the body",
	"feta: misspelled type\n\nRevert an earlier change.",
	"feta: misspelled type\n\n1.2.3",
	"feat:  ",
	"feat: \t",
	"feat:  subject",
]) {
	ava(`reject ${JSON.stringify(message)}`, async (t) => {
		await t.throwsAsync(lintMessage(message), { code: 1 });
	});
}
