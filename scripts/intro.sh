#!/user/bin/env bash

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

echo "Script directory: $SCRIPT_DIR"

file=$(grep -r "migrate_file" "$SCRIPT_DIR")
echo "File: $file"
