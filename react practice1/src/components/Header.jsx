import '../index.css'

export default function Top() {
    return (
        <div>
            <Header></Header>
        </div>
    );
};

function Header() {
    return (
        <header className='flex justify-between items-center'>
            <div className=''>
                <h2 className='text-2xl font-bold'>header</h2>
                <span className='text-gray-500'>1/1 done today</span>
            </div>
            <div className=''>
                <h4>10 july - 12 july</h4>
                <div className='flex gap-2 w-full items-center'>
                    <button className='bg-blue-400 px-2 py-1 rounded'>prev</button>
                    <button className='bg-blue-400 px-2 py-1 rounded'>Nxt</button>
                </div>
            </div>
        </header>
    );
};