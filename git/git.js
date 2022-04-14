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
