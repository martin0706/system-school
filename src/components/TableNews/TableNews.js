

const TableNews = (props) => {

    let handleClick = (e) => {
        e.preventDefault();
        console.log(props.news);
        fetch(`https://system-school-7931c-default-rtdb.firebaseio.com/news/${props.name}.json`, { method: 'DELETE' })
            .then(res => res.json()) // or res.json()
            .then(res => console.log(res))

    }



    return (
        <>

            <tr>
                <td>{props.title}</td>
                <td>{props.date}</td>
                <td>
                    <button className="detailsBtn" onClick={handleClick}>Details</button>
                    <button className="deleteBtn" onClick={handleClick} >Delete</button>
                </td>
            </tr>

            <style jsx>
                {`

                    table {
                        border-collapse: collapse;
                        width: 100%;
                        color:black;
                    }

                    td, th {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }

                    tr:nth-child(even) {
                        background-color: #dddddd;
                    }

                    table button {
                        background-color:black;
                        color: white;
                        padding: 5px;
                        
                        border: none;
                        cursor: pointer;
                       
                        margin: auto 10px;
                      }
                   
                      .deleteBtn{
                        background-color:red;
                      }
              `}
            </style>
        </>
    );

};

export default TableNews;