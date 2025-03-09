// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "so-decorator-regex" is now active!');

    let timeout: NodeJS.Timer;

    const decoration = vscode.window.createTextEditorDecorationType({
        textDecoration: 'underline wavy #0000ff'
    });

    triggerUpdateDecorations();

    vscode.workspace.onDidChangeTextDocument(event => {
		if (vscode.window.activeTextEditor && event.document === vscode.window.activeTextEditor.document) {
			updateDecorations();
		}
	}, null, context.subscriptions);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('so-decorator-regex.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from so_decorator_regex!');

        //
        //
        // if (!vscode.window.activeTextEditor) return;

        // const document = vscode.window.activeTextEditor.document;

        // const decoration = vscode.window.createTextEditorDecorationType({
        //     textDecoration: 'underline wavy #0000ff'
        // });

        // let ranges = [];
        // let words = ["bola", "coisa"];

        // for (let word of words) {
        //     let matches = [...document.getText().matchAll(new RegExp(word, 'g'))];

        //     if (matches.length === 0) continue;

        //     for (let match of matches) {
        //         let startPos = document.positionAt(match.index as number);
        //         let endPos = document.positionAt(match.index as number + match[0].length);
        
        //         ranges.push({
        //         range: new vscode.Range(startPos, endPos),
        //         });
        //     }
        // }

        // vscode.window.activeTextEditor.setDecorations(decoration, ranges);

	});



    function updateDecorations() {
        if (!vscode.window.activeTextEditor) return;

        const document = vscode.window.activeTextEditor.document;

        

        const ranges: vscode.Range[] =  [];
        let words = ["bola", "coisa"];

        for (let word of words) {
            let matches = [...document.getText().matchAll(new RegExp(word, 'g'))];

            if (matches.length === 0) continue;

            for (let match of matches) {
                let startPos = document.positionAt(match.index as number);
                let endPos = document.positionAt(match.index as number + match[0].length);
        
                ranges.push(
                new vscode.Range(startPos, endPos),
                );
            }
        }

        vscode.window.activeTextEditor.setDecorations(decoration, ranges);
    }

    function triggerUpdateDecorations() {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(updateDecorations, 100);
	}

	context.subscriptions.push(disposable);

    
}

// This method is called when your extension is deactivated
export function deactivate() {}
