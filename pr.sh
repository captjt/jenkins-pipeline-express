git checkout master && git checkout -b $1 && echo 123 > README.md && git add . && git commit -m 'eat sleep added repeat' && git push origin $1 && git checkout master