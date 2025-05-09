param (
    [string]$packageName,         # Name of the NPM package
    [string[]]$excludeVersions    # List of versions to exclude
)

# Check if the packageName parameter is provided
if (-not $packageName) {
    Write-Host "❌ Error: You must provide a package name as a parameter." -ForegroundColor Red
    Write-Host "🔹 Usage: .\unpublish-npm.ps1 package-name -excludeVersions '1.0.0','1.2.3'"
    exit 1
}

# Retrieve all published versions of the package
$versions = npm view $packageName versions --json | ConvertFrom-Json

if ($versions -is [System.Array]) {
    Write-Host "🔍 Versions found for $packageName:" -ForegroundColor Green
    $versions | ForEach-Object { Write-Host " - $_" }

    # Filter the versions to delete by excluding the specified ones
    $versionsToDelete = $versions | Where-Object { $excludeVersions -notcontains $_ }

    if ($versionsToDelete.Count -eq 0) {
        Write-Host "⚠️ No versions to delete after filtering." -ForegroundColor Yellow
        exit 0
    }

    Write-Host "🚀 Unpublishing the following versions of $packageName:" -ForegroundColor Yellow
    $versionsToDelete | ForEach-Object { Write-Host " - $_" }

    # Unpublish each version excluding the protected ones
    $versionsToDelete | ForEach-Object {
        $version = $_
        Write-Host "❌ Deleting $packageName@$version ..." -ForegroundColor Cyan
        npm unpublish "$packageName@$version" --force
        Start-Sleep -Seconds 2  # Pause to avoid NPM rate limits
    }

    Write-Host "✅ All non-excluded versions of $packageName have been unpublished." -ForegroundColor Green
} else {
    Write-Host "⚠️ No versions found for $packageName or an error occurred while retrieving the versions." -ForegroundColor Red
}