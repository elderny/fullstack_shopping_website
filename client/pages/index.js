import Link from 'next/link'
export default function index(data) {
  const colors = ['red', 'blue', 'orange', 'grey', 'green']
  const sizes = ['SM', 'S', 'M', 'ML', 'X']
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              Object.keys(data).map((title, i) => {
                return (

                  <Link href={`/${data[title].slug}`} key={i}>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded cursor-pointer hover:scale-105 hover:shadow-lg mr-5">
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={data[title].image}
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {data[title].category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {data[title].title}
                        </h2>
                        <div className="flex">
                          {
                            colors.map((e, index) =>
                              (data[title].color.includes(e))
                                ? <div key={index} className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" style={{ backgroundColor: e }}></div>
                                : ''
                            )
                          }
                        </div>
                        <div style={{ height: "15px", margin: "7px 0px" }}>
                          {
                            sizes.map((e, index) =>
                              (data[title].size.includes(e))
                                ? <span key={index} className='mr-2' style={{ padding: "0px 4px", textAlign: "center", border: "1px solid black", borderRadius: "5px" }}>{e}</span>
                                : ''
                            )
                          }
                        </div>
                        <div>
                          <p className="mt-1">${data[title].price}</p>
                          <span>Qty: {data[title].qty}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
export const getServerSideProps = async () => {
  const data = await fetch('http://localhost:5000/api/getProducts').then(res => res.json())
  return {
    props: data
  }
}