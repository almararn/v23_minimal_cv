const Cv = ({ title, date, description }) => {
  return (
    <div className="border-4 border-slate-400 rounded-xl lg:w-5/6 xl:w-4/6 mb-5 px-4 py-2 text-slate-200 shadow-md">
      <h1 className="text-red-600 text-lg font-medium -mb-1">{title}</h1>
      <h2 className="text-xs text-slate-300 mb-2">{date}</h2>
      <h3>{description}</h3>
    </div>
  )
}

export default Cv