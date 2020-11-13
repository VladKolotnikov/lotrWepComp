import {normalizeSync} from 'normalize-diacritics';

export class WeaponDTO {
  id_normalized: string;

  constructor(
    public readonly dmg: number, 
    public readonly speed: number, 
    public readonly reach: number, 
    public readonly kb: boolean, 
    public readonly price: string, 
    public readonly id: string) {
      this.id_normalized = normalizeSync(id);
  }
}
