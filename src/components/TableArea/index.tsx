import { Item } from "../../types/Item";
import * as C from "./styles";
import { TableItem } from '../TableItem'

type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
            <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
            <C.TableHeadColumn width={130}>Category</C.TableHeadColumn>
            <C.TableHeadColumn>Title</C.TableHeadColumn>
            <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((Item, index)=>(
            <TableItem key={index} item={Item} />
        ))}
      </tbody>
    </C.Table>
  );
};
