import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
	const [Allvalues, setCounter] = useState({
		color: "Blue",
		counter: 0,
	});

	// const [count, setCount] = useState(0);
	// const [isTimerRunning, setIsTimerRunning] = useState(false); // State to track if the timer is running
	// const [intervalID, setIntervalID] = useState(null); // State to hold the interval ID

	//below usestate was for geting data i.e. GET method from the API
	// const [allValues, setVallues] = useState({
	// 	// userdetails: [],
	// 	// showLoader:false
	// });

	// const fetchApi = async () => {
	// 	// setVallues({...Allvalues, showLoader:true});
	// 	const api = "https://gorest.co.in/public/v2/users";
	// 	try {
	// 		const respons = await fetch(api);
	// 		const data = await respons.json(respons); // json is light- weight format to store and transfer the data
	// 		// console.log(data);

	// 		// below condition was to check weather we are getting  response or not
	// 		if (respons.ok === true) {
	// 			// setVallues({ ...Allvalues, userdetails: data, showLoader:false});
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const increment = () => {
	// 	setCounter({
	// 		...Allvalues,
	// 		counter: Allvalues.counter + 1,
	// 		color: "Green",
	// 	});
	// };

	// const decrement = () => {
	// 	setCounter({
	// 		...Allvalues,
	// 		counter: Allvalues.counter - 1,
	// 		color: "Red",
	// 	});
	// };

	// const startTimer = () => {
	// 	if (!isTimerRunning) {
	// 		// Only start if the timer isn't already running
	// 		setIsTimerRunning(true);
	// 		const id = setInterval(() => {
	// 			setCount((prev) => prev + 1);
	// 		}, 1000);
	// 		setIntervalID(id); // Store the interval ID in state
	// 	}
	// };

	// const stopTimer = () => {
	// 	if (isTimerRunning) {
	// 		// Only stop if the timer is running
	// 		clearInterval(intervalID);
	// 		setIsTimerRunning(false);
	// 	}
	// };

	// useEffect(() => {
	// 	// Cleanup on component unmount
	// 	return () => {
		// 		clearInterval(intervalID);
		// 	};
		// }, []);
		const [color,setcolor]=useState(
			
				"lightGray"
		
			);


	
	return (
		<div className="main-container" >
			{/* <div>
				<h1>{Allvalues.counter}</h1>

				<h1>{Allvalues.color}</h1>

				<button className="btn btn-success mr-5" onClick={decrement}>
					Decrement
				</button>
				<button className="btn btn-danger" onClick={increment}>
					Increment
				</button>
			</div>
			<div>
				<h1>This is Timer</h1>
				<h1 className="danger">{count}</h1>
			</div>
			<br />
			<button className="btn btn-warning" onClick={startTimer}>
				Start
			</button>
			<button className="btn btn-danger" onClick={stopTimer}>
				Stop
			</button>{" "}
			<br /> */}
			<div>
				{/* Added Stop button */}
				{/* 		
			{// The  Method below is ternary method  
				allValues.showLoader ?( <div className="spinner-border" role="status"> </div> ):(
			// 		if.shower=false( spinner-border )will call                                  : if true code below will be call	
					<div className="container" >
				<div className="card-cont ">
					<ul >

					{allValues.userdetails.map((each) => (
						<Home key={each.id} userList={each} />
					))}
					</ul>
				</div>

				</div>
				)
				}
				<button className="btn btn-warning" onClick={fetchApi}>fetch</button> */}
			</div>
	<br />
	<br />
		<h1 style={{backgroundColor:color, padding:20, borderRadius:15}}> SIGN UP FORM</h1>
		<div style={{justifyContent:"flex-start" }}>
			<form style={{backgroundColor:color, color:"purple", borderRadius:10}} className="form-control p-5">
				<label htmlFor="username" >Username</label>
				<input className="form-control" id="username" type="text" />
				<br />
				<label htmlFor="password" >Password</label>
				<input className="form-control" id="password" type="text" />
				<br />
				
				<label htmlFor="Male" >Male </label>
				<input className='ms-1 mt-2 me-2' type="radio" id="Male" name="gender"/> 
				<label htmlFor="Female">Female </label>
				<input className='ms-1 mt-2 ml-2' type="radio"  id="Female" name="gender"/> 
				<br />
				<button className="btn btn-primary mt-2"  >Sign up</button>

			</form>
				<nav className=" m-5">
				<button className="btn btn-danger m-2" style={{backgroundColor:"green"}} onClick={()=>setcolor("lightGreen")} >green</button>
				<button className="btn btn-danger  m-2" style={{backgroundColor:"pink"}} onClick={()=>setcolor("pink")} >pink</button>
				<button className="btn btn-danger  m-2" style={{backgroundColor:"orange"}} onClick={()=>setcolor("orange")} >orange</button>
				<button className="btn btn-danger  m-2" style={{backgroundColor:"yellow",color:"red"}} onClick={()=>setcolor("yellow")} >gray</button>

				</nav>
		</div>
		</div>
	);
};

export default App;
