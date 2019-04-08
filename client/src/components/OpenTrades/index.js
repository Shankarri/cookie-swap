import React, { Component } from "react";
import "./style.css";


function OpenTradeTable(props) {
   var tradeRow = [];


   //displays open trades for the individual that is logged in
for (var index in props.tradeDetails) {
    tradeRow.push([
        props.tcmInfo[props.tradeDetails[index].tcmID_giver].name,
        props.tcmInfo[props.tradeDetails[index].tcmID_giver].city,
        props.tcmInfo[props.tradeDetails[index].tcmID_giver].troop,
        props.tradeDetails[index].cookie_type, 
        props.tradeDetails[index].cookie_amount
    ]);

}


    // console.log("test", props);

    return (
        <table  className='tradecol striped' >
            <thead>
                <tr>
                    <th>Your Name</th>
                    <th>Your Location</th>
                    <th>Your Troop#</th>
                    <th>Cookie Type</th>
                    <th>Amount of Boxes</th>
                </tr>
            </thead>
            <tbody>
                {props.tradeDetails ? tradeRow.map((obj,index) => (
                    <tr key={obj[0]+index}>
                        <td class="name"> {obj[0]}</td>
                        <td class="name"> {obj[1]}</td>
                        <td class="number"> {obj[2]}</td>
                        <td class="name"> {obj[3]}</td>
                        <td class="number"> {obj[4]}</td>
        
                   </tr>
                )) : <tr><td></td></tr>}
            </tbody>
        </table>
    );
}

export default OpenTradeTable


