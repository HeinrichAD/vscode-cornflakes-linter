# Readme

"cornflakes-linter" is a wrapper for `flake8`.

**added `onType` linting (0.5)**

VSCode already has flake8 integration HOWEVER it doesn't play nicely with flake8 plugins &mdash; the regex doesn't parse the output correctly.
This means that the errors/warnings/information do not show up in the problems tab.
This extension rectifies that.


## Quick Start

1. Make sure you have installed flake8
   ```bash
   pip install flake8
   ```

2. Set the path to the flake8 in `settings.json` (or search in the vscode settings tab).
   ```json
   {
     "cornflakes.linter.executablePath": ".venv/bin/flake8"
   }
   ```

3. Open a `.py` file and then save it and the extension will run showing all of the lint issues (inline and in the problems tab).


## Configuration

### For the extension
You need to include the full path to the flake8 executable that you wish to use.

To find the path to the appropriate flake8, you can _(on *nix)_ use `which` as follows.
```bash
which flake8
```

In Windows, try using `where.exe` in cmd
```cmd
where.exe flake8
```

or `Get-Command` in PowerShell
```powershell
Get-Command flake8
```

Then copy that path to `settings.json` at the endpoint below:
```json
{
  "cornflakes.linter.executablePath": ".venv/bin/flake8"
}
```

#### Change when the linter is run
You can choose when to re-lint the current file &mdash; *on save* or *on type*.
All settings are available through the settings page, or the json.

```json
{
  "cornflakes.linter.run": "onType"
}
```

### Flake8 configuration
The way to configure flake8 extensions / settings / ignores and all other configuration for flake8 is by using the standard [flake8 configuration](https://flake8.pycqa.org/en/latest/user/configuration.html) rules.
The extension will be run from the root directory of the workspace.

Personally, I like a `tox.ini` in the workspace root.

```ini
[flake8]
ignore = E226,E302,E41
max-line-length = 88
exclude = tests/*
max-complexity = 10
```


## Extension Installation

```bash
npm install
npm package
code --install-extension cornflakes-linter-*.vsix
```


## Acknowledgements

And is virtually a direct copy of [ruby-linter](https://github.com/hoovercj/vscode-ruby-linter).

The extension architecture is based off of the PHPValidationProvider from the built-in
[php extension](https://github.com/Microsoft/vscode/tree/master/extensions/php).


## Attributions

Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/ "Creative Commons BY 3.0")


<!--
cspell:ignore vsix Smashicons flaticon
-->
