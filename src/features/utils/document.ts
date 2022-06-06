'use strict';

import * as vscode from 'vscode';


/**
 * A type guard. Checks if given object x has the key.
 *
 * @param key  key name
 * @param x    object to observe
 *
 * @returns `true` if given object x has the key; otherwise `false`
 */
const has = <K extends string>(
  key: K,
  x: object,
): x is { [key in K]: unknown } => (
  key in x
);


/**
 * Get the document text.
 *
 * @param textDocument The affected document to lint.
 *
 * @returns document text
 */
export default function getDocumentText(textDocument: vscode.TextDocument) {
  type Notebook = {
    getCells(): { document: vscode.TextDocument & { languageId: String } }[]
  };

  // If document is an iPython notebook, `textDocument.getText()` would only return
  // the current cell content. But the document has an additional property `notebook`
  // which contains, among other things, a list of all cells. Thus we can simply return
  // the list separated by two new lines.
  // Note: Only cells with the language id `python` will be taken.
  // TODO: On the first time, while opening a notebook, the linter function is called
  //       for each cell separately. Accordingly, the linter will be called n-times
  //       (number of cells inside the notebook) while opening a notebook.
  if (has('notebook', textDocument)) {
    return (textDocument.notebook as Notebook)
      .getCells()
      .filter((cell) => cell.document.languageId === 'python')
      .map((cell) => cell.document.getText())
      .join("\n\n");
  }

  // default behavior
  return textDocument.getText();
}
