@echo off
set PYTHONPATH=%USERPROFILE%\Desktop\stuff\repos\noslib\python;%~dp0

set host=0.0.0.0
set port=42000

set "option=%1"
goto %option%

:nodemon
:dev
    echo Running nodemon
    @REM nodemon app.py --host %host% --port %port% --key-file %key% --cert-file %cert%
    nodemon app.py --host %host% --port %port%
    goto end

:python
    echo Running python --host %host% --port %port%
    python app.py
    goto end

:node
    echo Running NodeJS
    nodejs app.py
    goto end

:end




