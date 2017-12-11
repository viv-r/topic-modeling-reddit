Param(
    [string]$install, # update dependencies
    [string]$port     # port number to serve on, default is 3000
)

Write-Host "Checking master for changes"
cd C:\GitHub\HCDE556
git pull

if ($install) {
    Write-Host "Installing dependencies"
    npm i
}

npm run build

if (!$port) {
    $port = 3000
}

# find and stop the current build
try {
    $procs = Get-Process node -ErrorAction SilentlyContinue
    if ($procs) {
        foreach ($proc in $procs) {
            Write-Host "Stopping current server"
            
            # try to close gracefully
            $proc.CloseMainWindow()

            # but kill it if it doesn't behave
            Sleep 5
            if (!$proc.HasExited) {
               $proc | Stop-Process -Force
            }
            Write-Host "process stopped"
        }
    }
}
catch {
    Write-Host "No servers currently running"
}

cd C:\GitHub\HCDE556\build
$prog = "cmd.exe"
$params= @("/K";"serve -s -p $($port)";" >C:\GitHub\HCDE556\build_log.txt")
Start-Process $prog $params