import React, { useState } from 'react'
import './App.css'


function Checkbox() {
    const [clicktask, setclicktask] = useState([])

    const [box1, setBox1] = useState([ {id: "1", value: "item1" }, { id: "2", value: "item2" }, { id: "3", value: "item3" }, { id: "4", value: "item4" }])

    const [box2, setBox2] = useState([])




    function handlechange(e) {

        if (e.target.checked === true) {

            setclicktask([
                ...clicktask,
                { id: e.target.id, value: e.target.value },
            ]);
        } else {

            setclicktask.filter((task) => {
                return task.id === !e.target.id
            })

        }
        console.log(clicktask)

    }


    const leftitem = () => {
        setBox2([...box2, ...clicktask])
        setBox1(box1.filter((item) => {
            return !clicktask.some((removeitem) => removeitem.id === item.id)
        }))
        console.log(setBox1)

        setclicktask([])
    }



    const rightitem = () => {
        setBox1([...box1, ...clicktask])
        setBox2(box2.filter((item) => {
            return !clicktask.some((removeitem) => removeitem.id === item.id)
        }))
        setclicktask([])
    }


    // console.log(Checkbox)



    return (
        <>
            <div className='Droplist'>
                <div className='box1'>
                    <ul>
                        {
                            box1.map((item,index) => {
                                return (
                                    <li key={item.id}>
                                        <input type="checkbox" id={item.id} value={item.value}
                                            onChange={handlechange}
                                        />
                                        {item.value}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='button'>
                    <button onClick={leftitem}>left</button>
                    <button onClick={rightitem}>right</button>

                </div>
                <div className='box 2'>
                <ul>
            {
              box2.map((item, index) => {
                return (
                  <li key={index +1}>
                    <input type="checkbox" id={item.id} value={item.value}
                      onChange={handlechange}
                    />
                    {item.value}
                  </li>
                )
              })
            }
          </ul>
                </div>

            </div>
        </>
    )
}

export default Checkbox