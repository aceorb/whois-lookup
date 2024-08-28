import { useState } from 'react';

import { fetchWhoisData } from '../services/whoisService';
import {INFO_TYPE_CONTACT, INFO_TYPE_DOMAIN, infoTypeOptions} from "../common/constants.js";

function WhoisForm() {
    const [domain, setDomain] = useState('');
    const [infoType, setInfoType] = useState('domain');
    const [domainData, setDomainData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const result = await fetchWhoisData(domain, infoType);
            setDomainData({
                type: result.type,
                data: result.data,
            });
            console.log(result);
            setError('');
        } catch (err) {
            setError('Failed to fetch data' + err.toString());
            setDomainData(null);
        }
    };
    console.log(domainData);
    return (
        <div className="container">
            <div className="title mt-4">
                <h1 className="text-3xl">Whois Lookup</h1>
            </div>
            <div className="container-submit flex gap-2 justify-center mt-4">
                <label>DomainName:</label>
                <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter domain name"
                    className="border-2"
                />
                <label>Type:</label>
                <select value={infoType} onChange={(e) => setInfoType(e.target.value)}>
                    {
                        infoTypeOptions.map(item => (<option key= {item.value} value={item.value}>{item.text}</option>))
                    }
                </select>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {error &&
                <div className="container-error mt-4">
                    <p style={{color: 'red'}}>{error}</p>
                </div>
            }

            {domainData && (
                <div className="container-result mt-4">
                    <table className="table-auto">
                        <thead>
                            {domainData.type === INFO_TYPE_DOMAIN &&
                                (
                                    <tr>
                                        <th>Domain Name</th>
                                        <th>Registrar Name</th>
                                        <th>Registration Date</th>
                                        <th>Expiration Date</th>
                                        <th>Estimated Domain Age</th>
                                        <th>Hostnames</th>
                                    </tr>
                                )
                            }

                            {domainData.type === INFO_TYPE_CONTACT &&
                                (
                                    <tr>
                                        <td>Registrant Name</td>
                                        <th>Technical Contact Name</th>
                                        <th>Administrative Contact Name</th>
                                        <th>Contact Email</th>
                                    </tr>
                                )
                            }
                        </thead>
                        <tbody>
                            {domainData.type === INFO_TYPE_DOMAIN &&
                                (
                                    <tr>
                                        <td>{domainData.data.domainName}</td>
                                        <td>{domainData.data.registrarName}</td>
                                        <td>{domainData.data.registrationDate}</td>
                                        <td>{domainData.data.expirationDate}</td>
                                        <td>{domainData.data.estimatedDomainAge}</td>
                                        <td>{domainData.data.hostnames}</td>
                                    </tr>
                                )
                            }
                            {domainData.type === INFO_TYPE_CONTACT &&
                                (
                                    <tr>
                                        <td>{domainData.data.registrantName}</td>
                                        <td>{domainData.data.technicalContactName}</td>
                                        <td>{domainData.data.administrativeContactName}</td>
                                        <td>{domainData.data.contactEmail}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default WhoisForm;