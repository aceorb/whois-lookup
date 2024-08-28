function CustomTable({headers, data}) {
    return (
        <table className="table p-4 bg-white rounded-lg shadow">
            <thead>
                <tr>
                    {headers.map((header, index) => (<th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900" key={index}>{header}</th>))}
                </tr>
            </thead>
            <tbody>
                <tr className="text-gray-700">
                    {data.map((data, index) => (<th className="border-b-2 p-4 dark:border-dark-5" key={index}>{data}</th>))}
                </tr>
            </tbody>
        </table>
    );
}

export default CustomTable;