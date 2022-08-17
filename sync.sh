#!/usr/bin/env bash
#
# Downloads Family Vision shows from Google Sheets and stores it as a CSV. The frontend will read
# and display this data.

# Google Sheets document ID. I don't think it really matters if this is hidden or not.
DOCUMENT_ID="2PACX-1vRO4CR0Z9OLYQYTdIP-lxbWXFPex26Iaelm0cElTBLQidovERlAeXfdzbjWrom5DEr3Do5Z7ZOwKjKH"

# The current directory of this script, regardless of where it's executed from.
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Destination directory where resulting CSV will be stored. Create it if it doesn't already exist.
DIR_DST="${SCRIPT_DIR}/src/data"
mkdir -p ${DIR_DST}

# Where the resulting CSV should be stored.
FILE_DST="${DIR_DST}/calendar.csv"

# Download the file from Google Sheets.
#   * -L will follow any redirects if present.
#   * > will overwrite the file if it already exists, as opposed to using -o.
curl -L \
  "https://docs.google.com/spreadsheets/d/e/${DOCUMENT_ID}/pub?output=csv" > ${FILE_DST} \