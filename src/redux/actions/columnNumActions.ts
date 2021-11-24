export const COLUMN_CHANGE_NUM = 'CHANGE_NUM';
export interface IColumnChangeNumAction {
  type: typeof COLUMN_CHANGE_NUM;
  payload: IColumnNumActionPayload;
}
export interface IColumnNumActionPayload {
  currColumnNum: number | 'current' | null;
}
export function _columnChangeNumActionCreator(payload: IColumnNumActionPayload): IColumnChangeNumAction {
  return {
    type: COLUMN_CHANGE_NUM,
    payload
  };
}
