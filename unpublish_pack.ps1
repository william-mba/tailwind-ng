param (
    [string]$packageName,         # Nom du package NPM
    [string[]]$excludeVersions    # Liste des versions à exclure
)

# Vérifier si le paramètre packageName est fourni
if (-not $packageName) {
    Write-Host "❌ Erreur : Vous devez fournir un nom de package en paramètre." -ForegroundColor Red
    Write-Host "🔹 Utilisation : .\unpublish-npm.ps1 nom-du-package -excludeVersions '1.0.0','1.2.3'"
    exit 1
}

# Récupérer toutes les versions publiées du package
$versions = npm view $packageName versions --json | ConvertFrom-Json

if ($versions -is [System.Array]) {
    Write-Host "🔍 Versions trouvées pour $packageName :" -ForegroundColor Green
    $versions | ForEach-Object { Write-Host " - $_" }

    # Filtrer les versions à supprimer en excluant celles spécifiées
    $versionsToDelete = $versions | Where-Object { $excludeVersions -notcontains $_ }

    if ($versionsToDelete.Count -eq 0) {
        Write-Host "⚠️ Aucune version à supprimer après filtrage." -ForegroundColor Yellow
        exit 0
    }

    Write-Host "🚀 Dépublication des versions suivantes de $packageName :" -ForegroundColor Yellow
    $versionsToDelete | ForEach-Object { Write-Host " - $_" }

    # Dépublier chaque version excluant celles protégées
    $versionsToDelete | ForEach-Object {
        $version = $_
        Write-Host "❌ Suppression de $packageName@$version ..." -ForegroundColor Cyan
        npm unpublish "$packageName@$version" --force
        Start-Sleep -Seconds 2  # Pause pour éviter les limitations NPM
    }

    Write-Host "✅ Toutes les versions non exclues de $packageName ont été dépubliées." -ForegroundColor Green
} else {
    Write-Host "⚠️ Aucune version trouvée pour $packageName ou erreur lors de la récupération des versions." -ForegroundColor Red
}
