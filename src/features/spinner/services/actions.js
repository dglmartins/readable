export const SPINNER_ON_OFF = 'SPINNER_ON_OFF';

export function spinnerOnOff (spinner) {
  return {
    type: SPINNER_ON_OFF,
    spinner
  };
};
