import ISlot from './ISlot';

export default interface IColumn {
  slots: ISlot[];
  slotsAvailable: number;
}
