@echo off
echo Presiona una tecla para ver el status
PAUSE
git status
PAUSE
echo Presiona una tecla par agregar los cambios al head
git add .
PAUSE
presiona una tecla para commitear
SET /P commit = Escriba su Commit:
commit -m "%commit%"
PAUSE