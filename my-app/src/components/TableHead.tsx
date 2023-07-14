interface ItableHead {
    text: string;
}

const TableHead = ({ text }: ItableHead) => {
    return (<th>{text}</th>);
}

export default TableHead;