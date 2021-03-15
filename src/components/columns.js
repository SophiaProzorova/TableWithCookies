export const COLUMNS = [
    {
        Header: ' ',
        accessor: (item) => {
            return <img src={item.icon}/> 
        },
        className:'icon',
        id:'icon'
    },
    {
        Header:'Name',
        accessor:'name',
        id:'name'
    },
    {
        Header:'Size',
        accessor:'size',
        id:'size'
    },
    {
        Header:'Create time',
        accessor:'ctime',
        id:'ctime'
    },
    {
        Header:'Modify time',
        accessor:'mtime',
        id:'mtime'
    }
]