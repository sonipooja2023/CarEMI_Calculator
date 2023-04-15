import React, { useState } from 'react'
import Slider from "@mui/material/Slider"
import "./emi.css"
function EMI() {
    const cars=[
        {
            name:"Honda Accord",
            price:30000
        },
        {
            name:"Tesla Model Y",
            price:60000
        },
        {
            name:"BMW",
            price:70000
        },
        {
            name:"Nissan",
            price:40000
        } 
    ]
    const years=["1","2","3","4","5","6","7"]
    const [carPrice,setPrice]=useState(30000);
    const [downPayment,setDownPayment]=useState(5000);
    const [interestRate,setInterestRate]=useState(5);
    const [loanPeriod,setLoanPeriod]=useState(1);
    let totalLoanAmount=carPrice-downPayment;
    let monthlyPayment=Math.floor(totalLoanAmount*(((interestRate/1200)*Math.pow((1+(interestRate/1200)),loanPeriod*12))/(Math.pow((1+(interestRate/1200)),loanPeriod*12)-1)));
  return (
    <div className='container'>
        <h2>Car EMI Calculator</h2>
        <label for="selectCar">Select Car</label>
        <select name="selectCar" id="selectCar" onChange={(e)=>setPrice(e.target.value)} className='carOption'>
            {cars.map(car=>
            <option value={car.price}>{car.name}{" $"}{car.price}</option>    
            )}
        </select>
        <div className='emiValue'>
            <p>Down payment<span>${downPayment}</span></p>
            <Slider
             defaultValue={5000}
             aria-label="Default"
             valueLabelDisplay='auto'
             max={carPrice}
             onChange={(e)=>setDownPayment(e.target.value)}
            />
            <p style={{fontSize:12}}>0<span>${carPrice}</span></p>
        </div>
        <div className='emiValue'>
            <p>Bank Interest Rate<span>{interestRate}%</span></p>
            <Slider
             defaultValue={12}
             aria-label="Default"
             valueLabelDisplay='auto'
             max={22}
             min={5}
             step={0.01}
             onChange={(e)=>setInterestRate(e.target.value)}
             color="primary"
            />
            <p style={{fontSize:12}}>5%<span>22%</span></p>

        </div>
        <div className='loanPeriod'>
            <p>Loan Period (Years)</p>
            <ul className='loanList'>
                {years.map((year)=>
                  <li value={year} onClick={()=>setLoanPeriod(year)} className={`${loanPeriod===year?"active":"loan"}`}>{year}</li>
                )}
            
            </ul>
        </div>
        <div className='totalAmount'>
           
            <p className="amount">Total loan amount <span>${totalLoanAmount}</span></p><hr></hr>
            <p className="amount">Payable amount <span>${monthlyPayment*(loanPeriod*12)}</span></p><hr></hr>
            <p className="amount">You Will Pay Extra <span>${(monthlyPayment*(loanPeriod*12))-totalLoanAmount}</span></p>
        </div>
        <div className='emiPerMonth'>
          <p>${monthlyPayment}/Month</p>
        </div>
    </div>
  )
}

export default EMI