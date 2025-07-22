// creating a type alias for RowID
type RowID = number;

// RowElement interface
interface RowElement {
 firstName: string;
 lastName: string;
 age?: number;
}

export { RowID, RowElement };