export default function Flexbox() {
  return (
    <section className='min-h-screen w-full flex justify-center items-start pt-32 font-normal bg-cover bg-no-repeat bg-gradient-to-br from-rose-500 to-rose-600'>
      <div className='w-[120rem] bg-slate-200 min-h-[50rem] shadow-md'>
        <header className='h-28 border bg-white border-b border-gray-300'>
          header
        </header>
        <div className='flex'>
          <nav className='bg-black flex-[0_0_18%]'>navigation</nav>
          <main className='bg-slate-500 flex-1'>hotel view</main>
        </div>
      </div>
    </section>
  );
}
