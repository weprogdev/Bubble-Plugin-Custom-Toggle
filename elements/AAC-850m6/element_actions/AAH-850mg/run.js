function(instance, properties, context) {
  if (!instance.data.enabled) {
    instance.data.enabled = true;
    instance.publishState('is_enabled', true);
    instance.triggerEvent('enabled');
    instance.data.updateStyle();
  }
}