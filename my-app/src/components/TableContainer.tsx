import TableData from "./TableData";
import TableHead from "./TableHead";

interface ITableContainer {
    rowData: Array<any>;
}

const TableContainer = ({ rowData }: ITableContainer) => {
    return(
        <table>
            <tr>
                <TableHead text={'Name'}/>
                <TableHead text={'Email'}/>
                <TableHead text={'City'}/>
                <TableHead text={'Company'}/>
            </tr>
            {rowData.length ? rowData.map((item, i) => (
                <tr key={item.id}>
                    <TableData  text={item?.name}/>
                    <TableData   text={item?.email}/>
                    <TableData   text={item?.address?.city}/>
                    <TableData   text={Object.keys(item?.company).length ? item?.company.name : ''}/>
                </tr>
            )): ''}
        </table>
    );
}

export default TableContainer;