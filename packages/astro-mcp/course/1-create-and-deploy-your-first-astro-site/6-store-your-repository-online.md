# Store your repository online

> **🎯 Get Ready To**
>
> - Put your project repository online

This course will use GitHub to store our repository and connect to a web host. You are welcome to use the online git provider of your choice.

## Create a repository on GitHub

Although there are a few ways to get your local code stored in GitHub, this course will guide you through a method that does not require using git in the command line.

1. Log in to GitHub.com in a browser and click the <kbd>+</kbd> in the upper right of the screen to make a new repository.
2. Choose a name for your repository. This does not have to be the same name as your project folder.
3. You will be presented with options, but you do not need to change any of the defaults. Scroll down and click the button to <kbd>Create Repository</kbd>.
4. You will be presented with various setup next steps, but you won't need to use any of them. Make a note of the URL of your repository. You can now exit this page without doing anything.

## Commit your local code to GitHub

In the last section, you made a change to your page's content. This means that your project files have changed, and VS Code should show a number on top of the "Source" menu icon. This source tab is where you will regularly go to update your files on GitHub.

1. Click the Source Control tab in your VS Code to see a list of files that have changed. If you see a message that you need to install `git`, follow the instructions provided, then reload VS Code.
2. Click the <kbd>•••</kbd> "3 dots" menu above the commit message and choose <kbd>Remote</kbd> > <kbd>Add Remote</kbd>.
3. Select <kbd>Add remote from GitHub</kbd>. If necessary, follow any authentication steps then return to VS Code and repeat this action.
4. You should see a list of all your repositories on GitHub. Choose the one you created for this project. If you don't see your project, paste in its GitHub URL directly. You may also be asked to give this repository a local name. You can select any name you like.
5. At the top of the menu pane, there will be a place to enter a **commit message** (description of your file changes). Type in `initial commit` and press the <kbd>Commit</kbd> button to commit these changes.
6. You may see a message telling you that you have no "staged" commits, and asking you if you want to stage them. Click <kbd>Always</kbd> and continue.
7. Lastly, the list of changed files should be replaced with a <kbd>Publish</kbd> button. Click this to send your committed changes to GitHub.

### See your project on GitHub

To verify that your project is successfully stored on GitHub, visit GitHub.com and look under your account for a list of your repositories. Choose the new one you created, and verify that it contains your Astro project files.
