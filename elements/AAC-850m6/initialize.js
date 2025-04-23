function(instance, context) {
  	instance.data.enabled = false;
    instance.data.instanced = false;
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
    
    container.addEventListener('click', () => {
        instance.data.enabled = !instance.data.enabled;
    	instance.publishState('is_enabled', instance.data.enabled);
        if(instance.data.enabled) container.classList.add("active");
    	else container.classList.remove("active");
        instance.data.updateStyle();
    });

    instance.canvas[0].appendChild(container);
    instance.canvas[0].style.overflow = "visible";

    // Armazena o ID e inicializa variáveis
    instance.data.id = uniqueId;
}