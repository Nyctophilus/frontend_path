const Git = {
  pull: "git pull origin main",
  genKey:
    'ssh-keygen -t rsa -b 4096 -C "example@gmail.com"',
  testKey: "ssh -T git@github.com", // to test authentication
};

// to edit config file
// git config --edit
// -HL explore git alias list

// to set alias
// git config --global alias.'aliasName' checkout

/*
	git branches
*/

const branches = {
  show: "git branch",
  create: "git branch branchName",
  CDtoBranch: "git checkout branchName",
  delete: "git branch -d branchName", // save delete
  forceDelete: "git branch -D branchName", // force delete even with uncommited changes
  createAndCheckout: "git checkout -b branchName",
  rename: "git branch -m branchName",
  merge: "git merge branchName", // to merge a branch into current branch
};

/*
	stash
*/

const stash = {
  save: "git stash fileName", // stash the changes 'before commits'
  saveWithName: "git stash save stashName",
  pop: "git stash pop",
  popCertainId: "git stash pop stash@{id}",
  list: "git stash list",
  apply: "git stash apply stashName", // get COPY file from top stacked stash
  drop: "git stash drop stashName", // drop the top stacked stash
  dropCertainId: "git stash drop stash@{id}",
  show: "git stash show",
  showCertainOne: "git stash show stash@{id}",
  clear: "git stash clear",
};

const stashToNewBranch = {
  Go: "  git stash branch branchName",
  // It will make:

  // 	a new branch (starting from the commit at which the stash was originally created)
  //	move changes to this branch
  // 	and remove latest stash (Like: git stash pop)
};

/*
	Restore And Clean
*/

const restore = {
  restore: "git restore --staged fileName", //unstage the changes
};

const clean = {
  clean: "git clean -n", // to see what will be deleted
  clean: "git clean -f", // remove untracked files
};

/*
	FIXME Resetting the head
*/

const reset = {
  log: "git log", // 1- see the commit heads
  // 2- search for the commit head hash desired to be pointed at!
  reset: "git reset --hard commitHash", // to reset the head to that certain commit
  // 3- supposely do push afterwards
  push: "git push origin main --force", // to push the changes to the remote
};

/*
	ignore
*/

const ignore = {
  steps: `create .gitignore file`,
  ignoreFiles: `write file/folder names`,
  exclude: `!file/folder name`,
};

/*
	tags
*/

const tags = {
  create: "git tag v1.0",
  //   push it
  push: "git push origin v1.0",
  search: "git tag -l",
  delete: "git push origin --delete v1.0",
};

const notetaedTag = {
  create: "git tag -a v2.0 -m 'Second version'",
  //   push it
  push: "git push origin v2.0",
};

// you can publish a release from a tag from github website GUI
