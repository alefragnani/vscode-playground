// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

class EmojiFileDecorationProvider implements vscode.FileDecorationProvider{
    onDidChangeFileDecorations?: vscode.Event<vscode.Uri | vscode.Uri[] | undefined> | undefined;
    provideFileDecoration(uri: vscode.Uri, token: vscode.CancellationToken): vscode.ProviderResult<vscode.FileDecoration> {
        return new vscode.FileDecoration("😀", "tooltip smile", new vscode.ThemeColor("problemsWarningIcon.foreground"));
    }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "so-file-decoration" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('so-file-decoration.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from so-file-decoration!');
	});

	context.subscriptions.push(disposable);


    
    const p = vscode.window.registerFileDecorationProvider(new EmojiFileDecorationProvider());
}

// this method is called when your extension is deactivated
export function deactivate() {}
