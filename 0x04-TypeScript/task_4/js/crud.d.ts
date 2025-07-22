import {RowID, RowElement} from './interface';

declare module './crud.js' {
  // Function to insert a new row
  function insertRow(row: RowElement): RowID;

  // Function to update an existing row
  function updateRow(rowId: RowID, row: RowElement): RowID;

  // Function to delete a row
  function deleteRow(rowId: RowID): void;
}

export { insertRow, updateRow, deleteRow, RowID, RowElement };