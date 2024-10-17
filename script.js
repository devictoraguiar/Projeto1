function toggleMode() {
    const html = document.documentElement; // Seleciona o elemento <html> da página
    html.classList.toggle('light'); // Alterna a classe 'light' no elemento <html>
    
    // Pega a tag img dentro do elemento com id "profile"
    const img = document.querySelector("#profile img");
    
    // Substitui a imagem dependendo do modo (claro ou escuro)
    if (html.classList.contains('light')) {
        // Se o modo 'light' estiver ativado (tema claro), altera a imagem para 'avatar-light.png'
        img.setAttribute("src", "avatar-light.png");
    } else {
        // Caso contrário (modo escuro), mantém a imagem padrão 'avatar.png'
        img.setAttribute("src", "avatar.png");
    }
}