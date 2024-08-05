import { useState } from "react"

function Form({dealings, setDealings}) {
    const [ putData,setPutData] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
        setDealings([...dealings, putData]);
        setPutData({
          date: "",
          description: "",
          category: "",
          amount: ""
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setPutData({
          ...putData,
          [name]: value
        });
      }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="row border p-4 m-4">
                    <div className="col-3 mx-auto">
                        <input className="form-control" onChange={handleChange} name="date" value={putData.date} type="date" placeholder="date" />
                    </div>
                    <div className="col-3 mx-auto">
                        <input className="form-control form-control-sm col-3" onChange={handleChange} name="description" value={putData.description} placeholder="Enter Description" />
                    </div>
                    <div className="col-3 mx-auto">
                        <input className="form-control form-control-sm col-3" onChange={handleChange} name="category" value={putData.category} placeholder="Enter Category" />
                    </div>
                    <div className="col-3 mx-auto">
                        <input className="form-control form-control-sm col-3" onChange={handleChange} name="amount" value={putData.amount} placeholder="Enter Amount" />
                    </div>
                    <div className="col-4 mx-auto">
                        <button type="submit" className="mx-auto btn btn-primary">Add Dealing</button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Form