import { useEffect, useState } from "react"




export default function Table() {


    const [dataJson, setDataJson] = useState()


    async function fetcher() {
        await fetch("./dummyData.json")
            .then(response => {
                console.log("before>>>>", dataJson)
                return response.json();
            })
            .then(data => {
                setDataJson(data);

            })
    }

    useEffect(() => {

        fetcher()


    }, [])
    console.log("after>>>>", dataJson)

    return (
        <div className="tableDiv">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Year</th>
                        <th>Medals</th>
                    </tr>
                </thead>
                <tbody>
                    {(dataJson == undefined) ? (console.log("loading")) : (

                        dataJson.map(info => {
                            return (
                                <tr key={info.Id}>
                                    <td>{info.Id}</td>
                                    <td>{info.Year}</td>
                                    <td>{info.Medals}</td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
                <tfoot>

                </tfoot>
            </table>

        </div>


    )
};