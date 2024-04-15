import "./second.css"
function SecondForm() {
    return(
        <div>
            <form>
                <div className="first-box">
                    <p class='fname'>Full Name</p>
                    <input type='text' id='fname' name='fname'/>
                    <input type='text' id='lname' name='lname'/>
                </div>
                <div className="full-name">
                    <label>First Name</label>
                    <label>Last Name</label>
                </div>
                <div className='address'>
                    <p class='fname'>Address</p>
                    <div className='addresss'>
                        <input type='text' id='address' name='address'/>
                    </div>
                </div>
                <label className="full-name">Street Address</label>
                <div className="street-address">
                    <input type='text' id='city' name='city'/>
                    <input type='text' id='province' name='province'/>
                </div>
                <div className="full-address">
                    <label>City</label>
                    <label>State/province</label>
                </div>
                <div className="first-box">
                    <p >Birth date</p>
                    <input type='text' id='date' name='month'/>
                    <input type='text' id='date' name='day'/>
                    <input type='text' id='date' name='year'/>
                </div>
                <div className='birth-date'>
                    <label>Month</label>
                    <label>Day</label>
                    <label>Year</label>
                </div>
                <div class="gender-options">
                    <p>Gender</p>
                   <div className="gender">
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required />
                            <label className="female"> Male</label>
                        </div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required /> 
                            <label className="female">Female</label>
                        </div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required />
                            <label className="female"> N/A </label>
                        </div>
                   </div>
                </div>
                <div className='address'>
                    <p class='fname'>Number</p>
                    <div className='addresss'>
                        <input type='text' id='address' name='address'/>
                    </div>
                </div>
                <label className="full-name">Phone Number</label>
                <div className='address'>
                    <p class='fname'>S/Email</p>
                    <div className='addresss'>
                        <input type='text' id='address' name='address'/>
                    </div>
                </div>
                <label className="full-name">example@example.com</label>
                <div className='address'>
                    <p class='fname'>Company</p>
                    <div className='addresss'>
                        <input type='text' id='address' name='address'/>
                    </div>
                </div>
                <div className="courses">
                    <p>Courses</p>
                    <div >
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required />
                            <label className="female"> English 101</label>
                        </div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required />
                            <label className="female"> Creative writind</label>
                        </div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required />
                            <label className="female"> Maths 101</label>
                        </div>
                    </div>
                    <div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required /> 
                            <label className="female">History 202</label>
                        </div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required /> 
                            <label className="female">English 102</label>
                        </div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required /> 
                            <label className="female">Maths 102</label>
                        </div>
                    </div>
                    <div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required />
                            <label className="female"> Creative writing 1</label>
                        </div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required />
                            <label className="female"> History 104</label>
                        </div>
                        <div className='calendar'>
                            <input type="radio" id='radio' name="gender" required />
                            <label className="female"> Windows 8 </label>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <p for="notes">Comments</p>
                    <textarea id="notes" name="notes" rows="6" cols="50"></textarea>
                </div>
            </form>
        </div>
    )
}
export default SecondForm;