#!/bin/bash

#-----------------------------------------------------------------------
# Creates a new git worktree and changes the current directory to it.
#
# IMPORTANT: This script must be sourced to affect your current shell.
#
# Usage: source ./gwt.sh <worktree-name>
# Example: source ./gwt.sh feature-auth
#-----------------------------------------------------------------------

# Check if an argument is provided
if [ $# -eq 0 ]; then
    echo "Error: No worktree name provided."
    echo "Usage: source $0 <worktree-name>"
    return 1 # Use 'return' because 'exit' will close your terminal when sourced
fi

# Define variables for clarity
ARGUMENT=$1
WORKTREE_PATH="../worktree/$ARGUMENT"

# Create the worktree, and if successful, change directory
if git worktree add "$WORKTREE_PATH"; then
    echo "✅ Successfully created worktree at: $WORKTREE_PATH"
    cd "$WORKTREE_PATH" || return 1
    echo "➡️  Changed directory to $(pwd)"
    claude --dangerously-skip-permissions
else
    echo "❌ Failed to create worktree."
    return 1 # Indicate failure
fi


