$files = Get-ChildItem -Filter "dzwigi*.html"

foreach ($f in $files) {
    if ($f.Name -match "^dzwigi") {
        $content = Get-Content -Raw $f.FullName
        
        # Remove h1 inline styles
        $content = $content -replace '<h1 style="[^"]*">Dźwigi</h1>', '<h1>Dźwigi</h1>'
        
        # Remove h3 inline styles
        $content = $content -replace '<h3 style="color: var\(--primary-color\);[^"]*">([^<]+)</h3>', '<h3>$1</h3>'
        
        # Remove h4 inline styles
        $content = $content -replace '<h4 style="[^"]*">Opis</h4>', '<h4>Opis</h4>'
        
        # Remove p inline styles
        $content = $content -replace '<p style="color: var\(--text-muted\);[^"]*">', '<p>'
        
        # Remove sidebar inline styles
        $content = $content -replace '<div style="background: var\(--bg-color-light\);[^"]*">', '<div>'
        $content = $content -replace '<h3 style="background: #002b5e;[^"]*">Dźwigi</h3>', '<h3>Dźwigi</h3>'
        $content = $content -replace '<ul style="list-style: none;">', '<ul>'
        
        Set-Content -Path $f.FullName -Value $content -Encoding UTF8
    }
}
