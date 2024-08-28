import { useState } from 'react';

import { fetchWhoisData } from '../services/whoisService';
import InputForm from "./InputForm.jsx";
import InfoTable from "./InfoTable.jsx";
import ErrorContainer from "./ErrorContainer.jsx";
import CustomSkeleton from "./CustomSkeleton.jsx";

function WhoisForm() {
    const [domain, setDomain] = useState('');
    const [infoType, setInfoType] = useState('domain');
    const [domainData, setDomainData] = useState(null);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        try {
            setError('');
            setIsSubmitting(true);
            const result = await fetchWhoisData(domain, infoType);
            setDomainData({
                type: result.type,
                data: result.data,
            });
            setIsSubmitting(false);
        } catch (err) {
            setError('Failed to fetch data' + err.toString());
            setDomainData(null);
            setIsSubmitting(false);
        }
    };
    return (
        <div className="container">
            <div className="title mt-4">
                <h1 className="text-7xl block text-indigo-500">Whois Lookup</h1>
            </div>
            <InputForm
                domain={domain}
                infoType={infoType}
                handleSubmit={handleSubmit}
                setDomain={setDomain}
                setInfoType={setInfoType}
                isSubmitting={isSubmitting}
            />
            {error && <ErrorContainer error={error}/>}
            {isSubmitting && <CustomSkeleton/>}
            {!error && !isSubmitting && <InfoTable
                domainData={domainData}
            />}


        </div>
    );
}

export default WhoisForm;