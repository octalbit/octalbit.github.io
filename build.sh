#!/bin/sh

TMP_DIR=$(mktemp -d)

echo "\033[1;33m What have you done to the site?\033[0m"
read update

# Create bundle
npm run build
git commit -am "Create new bundle"

# Copy build to temp folder
cp -r ./build/ $TMP_DIR/build
BUILD_FILES=`ls ./build`

# Wipe out current site
git checkout master
git rm -rf .
mv .git $TMP_DIR/.git
rm -rf .
mv $TMP_DIR/.git .git

# Move new bundle to master
mv -f $TMP_DIR/build/** ./

# Commit and push changes
git commit -m "$update"
echo "\033[1;31mPushing new site to GitHub repo\n\033[0m"
git push --force origin master

# Get back to develop
git checkout develop
