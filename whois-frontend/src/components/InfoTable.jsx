import {INFO_TYPE_CONTACT, INFO_TYPE_DOMAIN} from "../common/constants.js";
import CustomTable from "./CustomTable.jsx";
import {useMemo} from "react";

const domainHeaders = [
    'Domain Name',
    'Registrar Name',
    'Registrar Date',
    'Expiration Date',
    'Estimated Domain Age',
    'Hostnames',
];
const contactHeaders = [
    'Registrant Name',
    'Technical Contact Name',
    'Administrative Contact Name',
    'Contact Email',
];
function InfoTable({domainData}) {
    const tableData = useMemo(() => {
        if(!domainData)
            return [];
        if ( domainData.type === INFO_TYPE_DOMAIN)
            return [
                domainData.data.domainName,
                domainData.data.registrarName,
                domainData.data.registrationDate,
                domainData.data.expirationDate,
                domainData.data.estimatedDomainAge,
                domainData.data.hostnames,
            ];
        else
            return [
                domainData.data.registrantName,
                domainData.data.technicalContactName,
                domainData.data.administrativeContactName,
                domainData.data.contactEmail,
            ];
    }, [domainData]);

    return (
        <div className="container-result mt-4">
            {domainData && ( <CustomTable
                headers={domainData.type === INFO_TYPE_DOMAIN ? domainHeaders : contactHeaders}
                data={tableData}
            />)}
        </div>
    );
}
export default InfoTable;