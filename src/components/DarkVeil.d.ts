import type { FC } from 'react';

export interface DarkVeilProps {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
}

declare const DarkVeil: FC<DarkVeilProps>;
export default DarkVeil;
