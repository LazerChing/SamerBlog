set commitMessage=%1
echo batMessage=%commitMessage%
git add .
git commit -m %commitMessage%
git push -u https://github.com/LazerChing/SamerBlog.git master