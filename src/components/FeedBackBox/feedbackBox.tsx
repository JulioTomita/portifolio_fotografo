export default function FeedbackBox() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between bg-gray-200 p-8">
      <div className="text-black border rounded-2xl h-80 w-2/3 border-green-950 relative bg-green-100 ">
        <div className="justify-center flex p-8 font-serif text-3xl">
          O que estão dizendo?
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center p-4">
            <p className="text-xl font-semibold text-black">
              "Excelente trabalho!"
            </p>
            <p className="text-lg text-black">
              "Fiquei muito satisfeito com o resultado final!"
            </p>
          </div>
        </div>
        <div className="justify-center flex p-8 font-serif text-lg">
          Lucas Hayashi, Maringá-PR
        </div>
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-green-300 rounded-full" />
          <div className="w-3 h-3 bg-green-900 rounded-full" />
          <div className="w-3 h-3 bg-green-300 rounded-full" />
          <div className="w-3 h-3 bg-green-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}
