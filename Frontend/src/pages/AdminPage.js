import React from 'react'
import Collapsible from 'react-collapsible'



export const AdminPage = (Data) => {


  function NumberList(props) {
    let listItems = []



    const data = props.data

    for (let i = 0; i < data.length; i++) {

      listItems[i] = <ul class="collection">
        <Collapsible trigger={<li className="collection-item">{data[i].title}</li>}>
          <li className="collection-item">{data[i].textmsg}</li>
        </Collapsible>
      </ul>

    }
    return (
      listItems
    );
  }




  return (
    <div>


      { Data.Data && <NumberList data={Data.Data} />}


    </div>
  )
}