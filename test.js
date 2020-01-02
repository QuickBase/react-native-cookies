export const toggleDevelopmentMode = () => {
    const activateDevelopmentModePassword = 'qbdev';
    const activateHerdDevelopmentModePassword = 'qbdevherd';
    const { environment } = settingsStore.getState().environment;
    let environmentInfo = {
      newEnvironment: null,
      message: ''
    }
    const { email } = store.getState().authentication;
    switch (email) {
      case activateDevelopmentModePassword:
        environmentInfo.newEnvironment = ENV.DEV;
        environmentInfo.message = 'Development Mode Enabled';
        break;
      case activateHerdDevelopmentModePassword:
        environmentInfo.newEnvironment = ENV.HERD;
        environmentInfo.message = 'Herd Mode Enabled';
        break;
      default:
        break;
    }
    if (newEnvironment === environment && newEnvironment !== ENV.PROD) {
      // change environment to prod
      environmentInfo.newEnvironment = ENV.PROD;
      environmentInfo.message = 'Development Mode Disabled';
    }
    return environmentInfo;
  };

  setEnvironment = () => {
    const environmentInfo = toggleDevelopmentMode();
    const newEnvironment = environmentInfo.newEnvironment;

    if (newEnvironment && newEnvironment !== this.props.environment) {
      Alert.alert(environmentInfo.message);
      this.props.setEnvironment(environmentInfo.newEnvironment);
      this.setState(initialState);
    }
  };
