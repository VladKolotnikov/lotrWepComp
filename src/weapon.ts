export class WeaponDTO {
  constructor(
    public readonly dmg: number, 
    public readonly speed: number, 
    public readonly reach: number, 
    public readonly kb: boolean, 
    public readonly price: string, 
    public readonly id: string) {
  }
}
