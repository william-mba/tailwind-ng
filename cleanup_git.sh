#!/bin/bash

# Fetch the latest changes from the remote repository and prune deleted branches
git fetch --prune

# Delete local branches that no longer exist on the remote
for branch in $(git branch -vv | grep ': gone]' | while read -r line; do echo "$line" | cut -d ' ' -f 1; done); do
  echo "Deleting local branch: $branch"
  git branch -d $branch
done

# Fetch and prune tags
git fetch --prune origin '+refs/tags/*:refs/tags/*'

# Delete local tags that no longer exist on the remote
for tag in $(git tag -l); do
  if ! git ls-remote --tags origin | grep -q "refs/tags/$tag"; then
    echo "Deleting local tag: $tag"
    git tag -d $tag
  fi
done

echo "Local branches and tags have been cleaned up to match the remote."
