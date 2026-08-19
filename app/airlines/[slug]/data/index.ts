import type { AirlineData } from '../airlines-data';
import { qantasAirlinesData } from './qantas-airlines';
import { airNewZealandData } from './air-new-zealand';

export const airlinesDataMap: Record<string, AirlineData> = {
  'qantas-airlines': qantasAirlinesData,
  'air-new-zealand': airNewZealandData,
};

export {
  qantasAirlinesData,
  airNewZealandData,
};

export default airlinesDataMap;