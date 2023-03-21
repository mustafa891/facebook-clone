import React from 'react'
import * as S from "./style"  

export default function RegisterForm({submitHandler}) {

  return (
     <S.Container>
        <S.Wrapper>
          <S.Header>
            <h2>Create a new account</h2>
            <div>it`s quick and easy</div>
          </S.Header>

         <S.Body>

            <S.Form onSubmit={submitHandler}>
               <S.InputGroup>
                  <div>
                    <input name='fname' className='input' type="text" placeholder='First name' /> 
                  </div>
                  <div>
                    <input name="lname" className='input' type="text" placeholder='Last name' /> 
                  </div>
               </S.InputGroup>

               <S.InputGroup>
                  <input name="email" className='input' type="email" placeholder='Email address' /> 
               </S.InputGroup>
               
               <S.InputGroup>
                  <input name="password" className='input' type="password" placeholder='New password' /> 
               </S.InputGroup>

               <S.InputGroup>
                  <input name="file" className='input' type="file" placeholder='New password' /> 
               </S.InputGroup>

               <span>Birthday</span>
               <S.InputGroup>
               <select  className="month">
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
               </select>

               <select className='day'>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
               </select>

               <select className="year">
               <option value="2023">2023</option>
               <option value="2022">2022</option>
               <option value="2021">2021</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
               <option value="2018">2018</option>
               <option value="2016">2016</option>
               <option value="2015">2015</option>
               <option value="2014">2014</option>
               <option value="2013">2013</option>
               <option value="2012">2012</option>
               <option value="2011">2011</option>
               <option value="2009">2009</option>
               <option value="2008">2008</option>
               <option value="2007">2007</option>
               <option value="2006">2006</option>
               <option value="2005">2005</option>
               <option value="2004">2004</option>
               <option value="2003">2003</option>
               <option value="2002">2002</option>
               <option value="2002">2002</option>
               <option value="2001">2001</option>
               <option value="2000">2000</option>
               <option value="1999">1999</option>
               <option value="1998">1998</option>
               </select>
                  </S.InputGroup>

                  <span>Gender</span>
                  <S.InputGroup>
                     <div className='radio__input'>
                     <label htmlFor='female'>Female</label>
                     <input id='female' name='test' type="radio" />
                     </div>
                     <div className='radio__input'>
                        <label htmlFor='male'>Male</label>
                     <input id="male" name='test' type="radio" />
                     </div>
                     <div className='radio__input'>
                        <label htmlFor='custom'>Custom</label>
                     <input id='custom' name='test' type="radio" />
                     </div>
                  </S.InputGroup>
                     <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                     <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time</p>

                     <S.ButtonWrapper>
                       <button>Sign Up</button>
                     </S.ButtonWrapper>
            </S.Form>

         </S.Body>

        </S.Wrapper>
     </S.Container>
  )
}
