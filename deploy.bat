@echo off
title Deploy AI Study Hub to Public Web
echo ========================================================
echo       AI STUDY ASSISTANT - ONE-CLICK PUBLIC DEPLOY
echo ========================================================
echo.
echo Deploying your website to Vercel...
echo If this is your first time, a browser window will open
echo for you to sign in with Google or GitHub.
echo.
call npx vercel --prod
echo.
echo ========================================================
echo Deployment complete! Copy the URL displayed above.
echo ========================================================
pause
