function App() {
  return (
    <div className="App">
      <div className="p-2 w-max" id="calculator-container">
        <h2 className="text-right w-full" id="display">
          0
        </h2>
        <div className="grid gap-2 grid-cols-4 grid-rows-5" id="keys">
          {/* AC / X */}
          <button className="border border-gray-300 hover:border-black col-span-2 font-semibold h-24 w-50">
            AC
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            /
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            x
          </button>
          {/* 7 8 9 - */}
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            7
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            8
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            9
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            -
          </button>
          {/* 4 5 6 + */}
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            4
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            5
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            6
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            +
          </button>
          {/* 1 2 3 = */}
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            1
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            2
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            3
          </button>
          <button className="border border-gray-300 hover:border-black row-span-2 font-semibold w-24">
            =
          </button>
          {/* 0 . */}
          <button className="border border-gray-300 hover:border-black col-span-2 h-24 w-50">
            0
          </button>
          <button className="border border-gray-300 hover:border-black h-24 w-24">
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
