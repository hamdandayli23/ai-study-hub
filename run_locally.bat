@echo off
title AI Study Hub - Local Server & App Hub
echo ========================================================
echo       AI STUDY ASSISTANT - LOCAL APP SERVER
echo ========================================================
echo.
echo [1] On your Laptop:
echo     Opening http://localhost:8080 in your browser...
echo     Look for the "Install App" button to install on PC!
echo.
echo [2] On your Mobile Phone (Connected to same Wi-Fi):
echo     Open your phone browser and go to your PC's IP address
echo     or deploy publicly using deploy.bat!
echo.
echo [3] To run directly as a Native Windows App without browser:
echo     Double-click "run_laptop_app.bat"
echo.
echo ========================================================
start "" "http://localhost:8080"
python -m http.server 8080
pause
