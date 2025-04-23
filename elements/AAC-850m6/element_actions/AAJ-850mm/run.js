function(instance, properties, context) {
  instance.data.enabled = !instance.data.enabled;
  instance.publishState('is_enabled', instance.data.enabled);
  instance.triggerEvent(instance.data.enabled ? 'enabled' : 'disabled');
  instance.triggerEvent('toggled');
  instance.data.updateStyle();
}