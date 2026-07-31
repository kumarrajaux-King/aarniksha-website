@echo off
cd /d "%~dp0"
echo ============================================
echo  Publishing to aarnikshasolutions.com
echo ============================================
echo.
git add .
git commit -m "site update"
git push
echo.
echo Done. GitHub is building the site now - live in about 3 minutes.
echo Check: https://github.com/kumarrajaux-King/aarniksha-website/actions
echo.
pause
