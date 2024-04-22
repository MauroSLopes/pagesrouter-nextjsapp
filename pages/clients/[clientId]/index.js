import { useRouter } from "next/router";

export default function EspecificClientPage() {
    const router = useRouter();

    function onGoBack() {
        router.push('/');
    }

    return <div>
        <h1>Nome: {router.query.clientId}</h1>
        <button onClick={onGoBack}>Go Back</button>
    </div>
}