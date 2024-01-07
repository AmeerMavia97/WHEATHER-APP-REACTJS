

function App (){
    return (
        <>
        <div>
        <nav className="flex bg-[#1d202c] p-1 text-white justify-between">
            <div className="flex ml-[10%]  gap-3">
            <p className="text-blue-400 text-[30px]"><i class=" fa-brands fa-cloudflare"></i></p>
            <h1 className="text-[20px] mt-2  font-poppins">WEATHER APP</h1>
            </div>
           
            <div className="flex gap-[30px] mt-3 text-[14px] mr-[10%]">
            <p className="pl-[20px] pr-[20px]  pt-[2px] pb-1 text-center mb-3  border-blue-400 border-[1px] border-solid rounded-[30px] text-xs text-blue-400" >Home</p>
            <p type="button" className="">About</p>
            <p type="button" className="">Live Camera</p>
                <p type="button" className="">Photos</p>
                <p type="button" className="">Contact</p>
            </div>
        </nav>
    </div>     
        </>
      )
}

export default App
