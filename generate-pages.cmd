@echo off
setlocal EnableDelayedExpansion

:: Définition du chemin de base
set "BASE_PATH=src\pages\games"

:: Template de base pour les composants
set "TEMPLATE_START=import { Layout } from '@/components/layout/Layout';"
set "TEMPLATE_START=!TEMPLATE_START! import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';"
set "TEMPLATE_START=!TEMPLATE_START! export const COMPONENT_NAME = () => { return ("
set "TEMPLATE_MIDDLE=    <Layout><div className="max-w-4xl mx-auto space-y-8"><h1 className="text-4xl font-bold mb-8">PAGE_TITLE</h1><Card className="glass-card"><CardHeader><CardTitle>Gestion de PAGE_TITLE</CardTitle></CardHeader><CardContent><p>Page de gestion de PAGE_TITLE en construction...</p></CardContent></Card></div></Layout>);};"

:: Création des dossiers principaux
mkdir "%BASE_PATH%\minecraft" 2>nul
mkdir "%BASE_PATH%\dayz" 2>nul
mkdir "%BASE_PATH%\fivem" 2>nul
mkdir "%BASE_PATH%\cs2" 2>nul

:: Fonction pour créer les fichiers
call :CreateFile "minecraft" "security" "Security" "Sécurité Minecraft"
call :CreateFile "minecraft" "economy" "Economy" "Économie Minecraft"
call :CreateFile "minecraft" "moderation" "Moderation" "Modération Minecraft"

call :CreateFile "dayz" "economy" "Economy" "Économie DayZ"
call :CreateFile "dayz" "security" "Security" "Sécurité DayZ"
call :CreateFile "dayz" "events" "Events" "Events DayZ"

call :CreateFile "fivem" "economy" "Economy" "Économie FiveM"
call :CreateFile "fivem" "vehicles" "Vehicles" "Véhicules FiveM"
call :CreateFile "fivem" "housing" "Housing" "Housing FiveM"
call :CreateFile "fivem" "jobs" "Jobs" "Jobs FiveM"

call :CreateFile "cs2" "economy" "Economy" "Économie CS2"
call :CreateFile "cs2" "matchmaking" "Matchmaking" "Matchmaking CS2"
call :CreateFile "cs2" "anticheat" "Anticheat" "Anticheat CS2"
call :CreateFile "cs2" "competitive" "Competitive" "Compétitif CS2"

echo Génération des pages terminée !
goto :eof

:CreateFile
set "game=%~1"
set "category=%~2"
set "componentName=%~3"
set "pageTitle=%~4"

set "FILE=%BASE_PATH%\%game%\%category%.tsx"

:: Remplacer les variables dans le template
set "CURRENT_TEMPLATE_START=!TEMPLATE_START!"
set "CURRENT_TEMPLATE_START=!CURRENT_TEMPLATE_START:COMPONENT_NAME=%componentName%!"

set "CURRENT_TEMPLATE_MIDDLE=!TEMPLATE_MIDDLE!"
set "CURRENT_TEMPLATE_MIDDLE=!CURRENT_TEMPLATE_MIDDLE:PAGE_TITLE=%pageTitle%!"

(
    echo !CURRENT_TEMPLATE_START!
    echo !CURRENT_TEMPLATE_MIDDLE!
) > "%FILE%"

goto :eof 