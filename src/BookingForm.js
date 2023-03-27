import { useState } from 'react';
import './App.css';
export default function BookingForm(){
    const [date, setDate] = useState();
    const [guests, setGuests] = useState();
    const [time, setTime] = useState()  //needs to be an array called "avaliableTimes"
    const [occasion, setOccasion] = useState();
    const avaliableTimes = [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const [name, setName] = useState();
    const onInput = (e) => setName(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");

       

    // const onChange ={e => (e.target.value)};

    };
    return(
        <div className='main'>
            <form className='form' onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input value={name} onInput={onInput}></input>
                        <br></br><br></br>

                        <label htmlFor="date">Choose Date:</label>
                        <input type="date"
                         placeholder="Date"
                          name="Date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          />

                        <br></br><br></br>
                        <label>Choose Time:</label><br></br>
                        <select value={time} onChange={(e) => setTime(e.target.value)} >
                           <option>17:00</option>
                           <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                          <option>21:00</option>
                          <option>22:00</option>
                        </select>
                        <br></br><br></br>
                        <label htmlFor='guests'>Number Of Guests:</label>
                        <input type="number" placeholder='1' min="1" max="10"
                        name='guests'
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        />
                        <br></br><br></br>
                        <label htmlFor='occasion' >Occasion:</label>
                        <select id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}>
                          <option>Birthday</option>
                          <option>Anniversary</option>
                        </select>
                    </div>
                         <br></br>
                         <button type='submit' disabled={!name}>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}