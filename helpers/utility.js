export const getCondition = (condition) => {
  const weatherOptions = {
    Haze: {
      iconName: 'weather-hazy',
      gradient: ['#4da0b0', '#d39d38'],
    },
    Clouds: {
      iconName: 'weather-cloudy',
      gradient: ['#4da0b0', '#d39d38'],
    },
    Thunderstorm: {
      iconName: 'weather-lightning',
      gradient: ['#4da0b0', '#d39d38'],
    },
    Rain: {
      iconName: 'weather-pouring',
      gradient: ['#4da0b0', '#d39d38'],
    },
    Atmosphere: {
      iconName: 'weather-rainy',
      gradient: ['#4da0b0', '#d39d38'],
    },
    Clear: {
      iconName: 'white-balance-sunny',
      gradient: ['#4da0b0', '#d39d38'],
    },
    Mist: {
      iconName: 'weather-fog',
      gradient: ['#4da0b0', '#d39d38'],
    },
    Dust: {
      iconName: 'cloud',
      gradient: ['#4da0b0', '#d39d38'],
    },
  };

  return weatherOptions[condition] || weatherOptions.Clear;
};