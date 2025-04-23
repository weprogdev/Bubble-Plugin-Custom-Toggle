function(instance, properties, context) {
  instance.data.enabled = properties.state;
  instance.publishState('is_enabled', instance.data.enabled);
  instance.triggerEvent(instance.data.enabled ? 'enabled' : 'disabled');
  instance.data.updateStyle();
}