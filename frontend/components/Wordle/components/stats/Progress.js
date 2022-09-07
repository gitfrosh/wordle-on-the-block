
export const Progress = ({ index, size, label }) => {
  return (
    <div className="flex justify-left m-1">
      <div className="items-center justify-center w-2">{index + 1}</div>
      <div className="w-full ml-2">
        <div
          style={{ width: `${8 + size}%` }}
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5"
        >
          {label}
        </div>
      </div>
    </div>
  )
}
