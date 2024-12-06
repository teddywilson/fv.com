#!/usr/bin/env bash
#
# Downloads data from multiple sheets in a Google Sheets document and stores them as separate CSV files.

DOCUMENT_ID="2PACX-1vRO4CR0Z9OLYQYTdIP-lxbWXFPex26Iaelm0cElTBLQidovERlAeXfdzbjWrom5DEr3Do5Z7ZOwKjKH"

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

DIR_DST="${SCRIPT_DIR}/src/data"
mkdir -p "${DIR_DST}"

SHEETS=(
  "calendar:0"
  "text:407807123"
)

for SHEET in "${SHEETS[@]}"; do
  NAME=$(echo "$SHEET" | cut -d':' -f1)
  GID=$(echo "$SHEET" | cut -d':' -f2)
  FILE_DST="${DIR_DST}/${NAME}.csv"

  echo "Downloading sheet '${NAME}' (gid=${GID}) to ${FILE_DST}..."
  
  curl -L \
    "https://docs.google.com/spreadsheets/d/e/${DOCUMENT_ID}/pub?gid=${GID}&output=csv" > "${FILE_DST}"
done

echo "Download complete."
