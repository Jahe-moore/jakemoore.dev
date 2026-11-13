#!/bin/sh
# Run AFTER the site is live: tells Bing (and other IndexNow engines) to re-crawl these URLs now.
curl -s -o /dev/null -w "IndexNow HTTP %{http_code}\n" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{"host":"jakemoore.dev","key":"fda934a1de4fadd43b5d6dca0e029009","keyLocation":"https://jakemoore.dev/fda934a1de4fadd43b5d6dca0e029009.txt","urlList":["https://jakemoore.dev/","https://jakemoore.dev/portfolio.html","https://jakemoore.dev/contact.html","https://jakemoore.dev/python.html","https://jakemoore.dev/r.html","https://jakemoore.dev/excel.html"]}'
