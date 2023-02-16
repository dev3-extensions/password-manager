function PasswordDisplayInput({ password }: { password: string }) {
  return (
    <input
      id="password"
      value={password}
      type="text"
      readOnly={true}
      className="w-full rounded-lg border border-[#404040] bg-[#262626] p-2.5 font-medium shadow-lg outline-none hover:ring-1 hover:ring-[#0465d3] focus:ring-2 focus:ring-[#0570eb]"
    />
  )
}

export default PasswordDisplayInput
