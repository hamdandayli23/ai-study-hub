@echo off
title AI Study Assistant - Mobile App Builder
echo ========================================================
echo       AI STUDY ASSISTANT - MOBILE APP (ANDROID)
echo ========================================================
echo.
echo 1. Bundling web assets...
call node bundle-mobile.js
echo.
echo 2. Syncing assets with Capacitor Mobile engine...
call npx cap sync
echo.
echo 3. Do you want to open in Android Studio to build the APK?
echo    (Make sure Android Studio is installed on your computer)
echo.
choice /m "Open project in Android Studio now?"
if errorlevel 2 goto done
if errorlevel 1 goto open_android

:open_android
echo Adding Android platform if needed...
call npx cap add android
echo Opening Android Studio...
call npx cap open android
goto done

:done
echo.
echo ========================================================
echo Mobile setup sync complete!
echo TIP: You can also install the mobile app instantly by 
echo opening your deployed website on your phone and tapping
echo "Add to Home Screen" or the "Install App" button.
echo ========================================================
pause
