ssh-agent bash
ssh-add %HOMEPATH%/.ssh/mykey.pem
xcopy ".\build" ".\www" /E /I /Y
scp -r www root@47.100.40.176:/opt/nginx
rd /S /Q ".\www"