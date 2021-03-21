import { Publication } from '../models/publication';

export const PUBLICATIONS: Array<Publication> = [
  new Publication(0, 'Deportes', 'Partido queda suspendido', new Date(2020,11,17), 'Partido suspendido por fuertes lluvias', 'photo', ''),
  new Publication(0, 'Política', 'Políticos se enfrentan en debate', new Date(2021,3,17), '2 políticos se agarraron a pelear', 'photo', ''),
]
