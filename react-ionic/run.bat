@echo off

set HTTPS=true
set SSL_CRT=C:/Users/johnson.le/.cert/cert.pem
set SSL_KEY=C:/Users/johnson.le/.cert/key.pem

set host=localhost
set port=8100


set "option=%1"
goto %option%

:android
    npx ionic cap run android
goto end

:dev
    @REM npx ionic serve --no-open --port %port%  --host %host% --ssl --ssl-cert=%SSL_CRT% --ssl-key=%SSL_KEY%
    npx ionic serve --no-open --port %port%  --host %host%
goto end

:end