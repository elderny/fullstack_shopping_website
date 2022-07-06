import Nopage from "../components/Nopage"

export default function slug({ data }) {
    console.log(data)
    return (
        <>
            {!data ? <Nopage /> :
                ''

            }
        </>
    )
}
export const getServerSideProps = async context => {
    const { slug } = context.query
    const { data } = await fetch('http://localhost:5000/api/getSpecificProduct?slug=' + slug).then(res => res.json())
    return {
        props: { data }
    }
}