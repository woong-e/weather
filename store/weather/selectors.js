import { createSelector } from 'reselect';

const indexSelector = {
  form: createSelector(
    state => state.weather.index.get('form'),
    form => ({
      main: form.get('main'),
      name: form.get('name'),
      weather: form.get('weather'),
    }),
  )
}

export {
  indexSelector,
}

