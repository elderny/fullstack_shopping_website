export default function index() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded cursor-pointer hover:scale-105 hover:shadow-lg">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <div className="flex">
                <div className="border-2 border-gray-300 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></div>
              </div>
              <div style={{ height: "15px", margin: "7px 0px" }}>
                <span style={{ padding: "0px 6px;", textAlign: "center", border: "1px solid black", borderRadius: "5px" }}>S</span>
              </div>
              <div>
                <p className="mt-1">$16.00</p>
                <span>Qty: 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}