import Link from "next/link";

export default function ClientsPage() {
    const clients = [
        { id: 'Jorge' }, { id: 'Thiago' }, { id: 'Fernando' }, { id: 'XeroVerde' }
    ]
    return <div>
        <ul>
            {clients.map(client => <li key={client.id}>
                <Link href={{
                    pathname: '/clients/[clientId]',
                    query: { clientId: client.id }
                }}>{client.id}</Link></li>)}
        </ul>
    </div>
}