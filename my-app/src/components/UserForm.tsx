import { useState } from "react";

interface IUserForm {
    data: Array<any>;
    setData: any;
}

export const UserForm = ({ data, setData }: IUserForm) => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');

    const handelSubmit = () => {  console.log(name, company, city, email);};

        return (
            <form onSubmit={handelSubmit}>
                <span>Name</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <span>Email</span>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span>City</span>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                <span>Company</span>          
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        )
} 