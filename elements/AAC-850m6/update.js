function(instance, properties, context) {
    if(!instance.data.instanced){
        instance.data.enabled = properties.initial_state;
        instance.data.instanced = true;
    	instance.publishState('is_enabled', instance.data.enabled);
    }
    
    const el = document.getElementById(instance.data.id);
    if (!el) return;
    
    const circle = el.querySelector('.toggle-circle');
    if (!circle) return;
    
    let circleHeight = el.offsetHeight - (2 * properties.padding);
    if(properties.border) circleHeight -= (2 * properties.border_width);
    
    circle.style.height =  circleHeight + "px";
    
    const updateStyle = () => {
        el.style.padding = properties.border ? (properties.padding + properties.border_width) + "px" :  properties.padding + "px";
        el.style.borderRadius = Math.ceil((el.offsetHeight / 2)) + 'px';
        el.style.backgroundColor = instance.data.enabled ? properties.bg_on : properties.bg_off;

        circle.style.backgroundColor = instance.data.enabled ? properties.toggle_on : properties.toggle_off;
		
        //Toggle position
        if(instance.data.enabled){
            let distance = el.offsetWidth - circle.offsetWidth - (2 * properties.padding);
            if(properties.border) distance -= (4 * properties.border_width);
            
            circle.style.transform = "translateX(" + distance + "px)";
        }
        else circle.style.transform =  'none';
        
        //Border
        if(properties.border){
            el.style.borderWidth = properties.border_width + "px";
            el.style.borderColor = instance.data.enabled ? properties.border_color_on : properties.border_color_off;
            el.style.borderStyle = "solid";
        }
        else{
            el.style.border = "none";
        }

        //Container Shadow
        if(properties.shadow){
            el.style.boxShadow = properties.shadow_vOffset+ "px " + properties.shadow_hOffset + "px " + properties.shadow_spread + "px " + properties.shadow_color;
        }
        else{
            el.style.boxShadow = 'none';
        }

        //Toggle Shadow
        if(properties.t_shadow){
            circle.style.boxShadow = properties.t_shadow_vOffset+ "px " + properties.t_shadow_hOffset + "px " + properties.t_shadow_spread + "px " + properties.t_shadow_color;
        }
        else{
            circle.style.boxShadow = 'none';
        }
    }
    
    instance.data.updateStyle = updateStyle;
    instance.data.updateStyle();
}