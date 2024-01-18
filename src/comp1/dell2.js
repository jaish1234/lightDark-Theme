import React from 'react'
import Dell3 from './dell3';

function Dell2(props) {

    console.log("props == ", props);
    let data = props.myData + props.myData2

  return (
    <div>
        This is second my name is == {props.myData}
        <Dell3 data={data} />
    </div>
  )
}

export default Dell2