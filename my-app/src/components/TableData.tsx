import { AnySoaRecord } from "dns";

interface ItableData {
    text: any;
}

const TableData = ({ text }: ItableData) => {
    return (<td>{text}</td>);
}

export default TableData;