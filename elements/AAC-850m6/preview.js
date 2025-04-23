function(instance, context) {
  	instance.data.enabled = false;
    // Gera um ID único para o container
    const uniqueId = "cool-toggle_" + (context.instanceId || Math.round(Math.random()*1000000));

    // Cria uma div com esse ID e insere no elemento
    const container = document.createElement("div");
    const toggle = document.createElement("div");
    container.id = uniqueId;
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.overflow = "hidden";
    
    container.classList.add('cool-toggle');
    toggle.classList.add("toggle-circle");
    container.appendChild(toggle);

    instance.canvas[0].appendChild(container);

    // Armazena o ID e inicializa variáveis
    instance.data.id = uniqueId;
}