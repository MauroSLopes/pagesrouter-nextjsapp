import Link from "next/link";

export default function MainPage() {
    const directPage = [
        { name: 'portfolio' }, { name: 'clients' }
    ]
    return (<div>
        <h1>Home page</h1>
        <ol>
            {directPage.map(directory => <li key={directory.name}>
                <Link href={directory.name}>{directory.name}</Link></li>)}
        </ol>
    </div>)
};