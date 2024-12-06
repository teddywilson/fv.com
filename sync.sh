#!/usr/bin/env bash
#
# Downloads data from multiple sheets in a Google Sheets document and stores them as separate CSV files.

# Google Sheets document ID.
DOCUMENT_ID="2PACX-1vRO4CR0Z9OLYQYTdIP-lxbWXFPex26Iaelm0cElTBLQidovERlAeXfdzbjWrom5DEr3Do5Z7ZOwKjKH"

# The current directory of this script, regardless of where it's executed from.
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Destination directory where resulting CSVs will be stored. Create it if it doesn't already exist.
DIR_DST="${SCRIPT_DIR}/src/data"
mkdir -p "${DIR_DST}"

# Sheet details (name and gid)
SHEETS=(
  "calendar:0"
  "text:407807123"
)

# Loop through each sheet and download its data as a CSV.
for SHEET in "${SHEETS[@]}"; do
  NAME=$(echo "$SHEET" | cut -d':' -f1)
  GID=$(echo "$SHEET" | cut -d':' -f2)
  FILE_DST="${DIR_DST}/${NAME}.csv"

  echo "Downloading sheet '${NAME}' (gid=${GID}) to ${FILE_DST}..."
  
  curl -L \
    "https://docs.google.com/spreadsheets/d/e/${DOCUMENT_ID}/pub?gid=${GID}&output=csv" > "${FILE_DST}"
done

echo "Download complete."
