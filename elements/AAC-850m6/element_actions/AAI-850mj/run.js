function(instance, properties, context) {
  if (instance.data.enabled) {
    instance.data.enabled = false;
    instance.publishState('is_enabled', false);
    instance.triggerEvent('disabled');
    instance.data.updateStyle();
  }
}